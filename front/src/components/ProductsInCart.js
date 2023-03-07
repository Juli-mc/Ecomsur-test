import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slices/cart.slice";
import Loader from "./Loader";

const ProductsInCart = () => {
  const { cart } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  setTimeout(
    () => {
      setLoader(false);
    },
    3000,
    [cart]
  );

  const totalPrice = cart.reduce(
    (total, currentProduct) =>
      total + currentProduct.product.price * currentProduct.quantity,
    0
  );

  const dispatch = useDispatch();
  const handleRemoveItemCart = (prod) => {
    toast("Product successfully removed from cart ", {
      duration: 4000,
      position: "top-center",
      icon: "🗑️",
    });
    dispatch(removeItem(prod));
  };

  return (
    <>
      <h1 style={{ fontSize: "7vh" }} className="card-title">
        Shopping cart
      </h1>
      {loader ? (
        <Loader />
      ) : (
        <div className="cart-item">
          <ul style={{ listStyle: "none" }}>
            {cart.map((cartProduct) => (
              <li style={{ margin: "2vh" }} key={cartProduct.product._id}>
                <h1 style={{ padding: "2vh" }}>{cartProduct.product.name}</h1>
                <img
                  alt={cartProduct.product.name}
                  src={`http://localhost:5000/${cartProduct.product.image}`}
                  style={{ maxWidth: "50vh", borderRadius: "2rem" }}
                />
                <br />
                <p style={{ padding: "1vh" }}>
                  Price x1: {cartProduct.product.price}
                </p>
                <p style={{ padding: "1vh" }}>
                  Quantity: {cartProduct.quantity}
                </p>{" "}
                <p style={{ padding: "1vh" }}> Total price for this product:</p>{" "}
                <p style={{ padding: "1vh" }}>
                  $ {cartProduct.quantity * cartProduct.product.price}
                </p>
                <br />
                <button
                  className="remove-item-btn"
                  onClick={() => handleRemoveItemCart(cartProduct.product)}
                >
                  Remove item
                </button>
              </li>
            ))}
          </ul>
          <Toaster />
          <h1 style={{ padding: "1vh" }}>FINAL PRICE: $ {totalPrice}</h1>
        </div>
      )}
    </>
  );
};

export default ProductsInCart;
