import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const [post, setPost] = useState();
  async function getPost() {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const data = await res.json();
    setPost(data);
  }
  useEffect(() => {
    getPost();
  }, []);
  console.log(post);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="md:flex max-w-[900px] p-4 space-x-4  cursor-pointer max-h-[500px] bg-neutral rounded-box gap-10">
        <div className="flex flex-col gap-5">
            <div className="">
              <img src={post && post.images[0]} className="rounded-box mt-10 " />
            </div>
            <div className="hidden md:block">
              <img src={post && post.images[1]} className="rounded-box" />
            </div>
        </div>
        <div className="">
            <h1 className="text-3xl md:text-5xl mb-4 font-bold text-white mt-6">Name:  {post && post.title}</h1>
            <p className=" text-lg md:text-xl mb-4 text-white mt-2 capitalize">
                Category: {post && post.category}
            </p>
            <p className=" text-lg md:text-xl mb-4 text-white mt-2">
                Brand: {post && post.brand}
            </p>
            <p className=" text-lg md:text-xl mb-4 text-white mt-2">
                Description: {post && post.description}
            </p>
            <p className="text-lg md:text-xs mb-4 text-white mt-2">
                Price: {post && post.price * 12}00 uzs
            </p>
            <div className="flex gap-7 items-center text-white">
              <button onClick={decrement} className="text-red-500 text-4xl">-</button>
              <span className=" text-3xl">{count}</span>
              <button onClick={increment} className="text-green-500 text-3xl">+</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
