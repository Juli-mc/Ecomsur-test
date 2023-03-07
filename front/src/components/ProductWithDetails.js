import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { setCart } from "../store/slices/cart.slice";
import Loader from "./Loader";

const ProductWithDetails = ({}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { productDetails } = location.state;
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 3000);

  const percentStarts = `${(productDetails.rating * 100) / 5}%`;
  const handleAddCart = (productDetail) => {
    toast("Product successfully added to cart", {
      duration: 4000,
      position: "top-center",
      icon: "✅",
    });
    dispatch(setCart(productDetail));
  };

  return (
    <>
      <h1 style={{ fontSize: "7vh" }} className="card-title">
        Product details
      </h1>
      {loader ? (
        <Loader />
      ) : (
        <div style={{ padding: "3vh" }}>
          <h2 style={{ padding: "2vh" }}>{productDetails.name}</h2>
          <img
            alt={productDetails.name}
            src={`http://localhost:5000/${productDetails.image}`}
            style={{ maxWidth: "60vh", padding: "2vh", borderRadius: "2rem" }}
          />
          <p style={{ padding: "2vh" }}>Brand: {productDetails.brand}</p>
          <p style={{ padding: "2vh" }}>Category: {productDetails.category}</p>
          <p style={{ padding: "2vh" }}>{productDetails.description}</p>

          <span
            className="container-starts"
            style={{
              background: `linear-gradient(90deg, gold ${percentStarts}, gray ${percentStarts}, gray)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              margin: "2vh",
            }}
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <br />
          <span style={{ fontStyle: "italic", padding: "2vh" }}>
            Based in {productDetails.numReviews} reviews...
          </span>
          <br />
          <p style={{ padding: "2vh" }}>
            Available: {productDetails.countInStock} c/u{" "}
          </p>

          <h1 style={{ padding: "2vh" }}>$ {productDetails.price}</h1>
          {productDetails.countInStock > 0 && (
            <button
              className="add-btn"
              style={{ margin: "2vh" }}
              onClick={() => handleAddCart(productDetails)}
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          )}
          <Toaster />
        </div>
      )}
    </>
  );
};

export default ProductWithDetails;
