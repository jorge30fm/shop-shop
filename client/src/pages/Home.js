import React from "react";
import ProductList from "../components/ProductList.js";
import CategoryMenu from "../components/CategoryMenu.js";
import Cart from "../components/Cart.js";

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
