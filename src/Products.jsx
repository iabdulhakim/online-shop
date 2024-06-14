import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [posts, setPosts] = useState();
  async function getPost() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setPosts(data.products);
  }
  useEffect(() => {
    getPost();
  }, []);
  console.log(posts);
  return (
    <div className="container">
        <div className="justify-between items-center hidden md:flex py-3">
            <a className=" flex items-center ml-4" href="">
              <img src="./logo-shopping.png" alt="" className="h-20 w-20" />
              <p className="text-[30px] font-semibold text-white">Online Shop</p>
            </a>
            <div className="flex items-center gap-5">
                <img src="./cart.svg" alt="" className="h-10 mr-10 cursor-pointer w-10" />
            </div>
       </div>
       <h1 className="text-white text-6xl mt-10 mb-10 font-bold text-center">Products</h1>
      <div className="flex flex-wrap gap-10 p-6 ">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="card border-2 w-[550px] max-h-[550px] rounded-lg bg-white shadow-xl gap-2 flex flex-col cursor-pointer">
            <Link to={"/product/" + post.id}>  
                <div className="card-body flex flex-col p-2 bg-white rounded-md">
                    <figure>
                        <img className=" h-[250px]" src={posts && post.images[0]} alt=""/>
                    </figure>
                    <div className="flex max-w-full justify-between items-center mt-5">
                        <div className="flex max-w-full gap-2">
                            <span className="text-[13px] capitalize mr-5 text-[#000] font-semibold">
                                {posts && post.category} :
                            </span>     
                        </div>
                        <span className="text-[15px] font-medium uppercase">
                            {posts && post.title}
                        </span>
                    </div>
                    <p className=" text-gray-500 max-w-[100%] mt-5 font-medium text-[14px]">
                        {posts && post.description}
                    </p>
                    <div className="flex gap-1">
                        <img src="./star.svg" alt="" />
                  </div>
                    <span className="flex gap-1 text-[#000] mt-4 font-medium">
                    In the shop :
                        <span className="text-[16px] text-blue-500 ">
                            {posts && post.stock}
                        </span>
                    </span>
                    <div className="flex flex-col gap-0 justify-end">
                        <span className="line-through  md:text-start text-center  text-red-400 text-[14px]   mb-1">
                        {posts && Math.ceil(((post.price + post.price * post.discountPercentage) / 100) * 12)}000 uzs
                        </span>
                        <span className="text-green-500 text-[20px] mt-[-11px] font-semibold md:text-start text-center ">
                            {posts && post.price * 12}00 uzs
                        </span>
                    </div>
                    <button className="text-white py-2 mb-0 px-10 rounded-lg md:self-start mt-5 hover:bg-slate-500 bg-slate-800">Buy</button>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
