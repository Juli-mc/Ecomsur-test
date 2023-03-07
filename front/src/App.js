import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getAllProductsThunk } from "./store/slices/products.slice";
import ProductsInCart from "./components/ProductsInCart";
import Home from "./components/Home";
import ProductWithDetails from "./components/ProductWithDetails";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const { cart, products } = useSelector((state) => state);

  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  console.log(products);

  return (
    <>
      <Routes>
        <Route path="/purchases" element={<ProductsInCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:id" element={<ProductWithDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
