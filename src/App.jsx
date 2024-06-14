import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;