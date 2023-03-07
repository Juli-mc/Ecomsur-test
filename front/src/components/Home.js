import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProductsThunk } from "../store/slices/products.slice";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader";

const Home = () => {
  const { cart, products } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div>
        <h1 class="box-title">
          <span class="aqua">Ecomsur</span> <span class="pink">Shop</span>
        </h1>
        <div style={{ textAlign: "center", margin: "3vh" }}>
          <h1>EXPLORE, SEE AND BUY OUR NEW PRODUCTS IN THE SHOP!</h1>
          <p>Technical test carried out by Julián Marin, for Ecomsur.</p>
        </div>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="cart-container">
            <p className="card-list">List of all products</p>
            <Link to="/purchases">
              <div className="card-list">
                <i class="fa-solid fa-cart-shopping" value={cart.length}>
                  {cart.length}
                </i>
              </div>
            </Link>
          </div>
          <ul style={{ textDecoration: "none", marginLeft: "-6vh" }}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </ul>
          <Toaster />
        </>
      )}
    </div>
  );
};

export default Home;
