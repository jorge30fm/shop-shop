import React from "react";
import ProductList from "../components/ProductList/index.js";
import CategoryMenu from "../components/CategoryMenu/index.js";
import Cart from "../components/Cart/index.js";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
