import React, { useEffect, useState } from "react";
import { setCart } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddCart = (prod) => {
    toast("Product successfully added to cart", {
      duration: 4000,
      position: "top-center",
      icon: "✅",
    });
    dispatch(setCart(prod));
  };

  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${product._id}`)
      .then((res) => setProductDetails(res.data));
  }, [product]);

  const percentStarts = `${(product.rating * 100) / 5}%`;

  return (
    <li className="card-product" key={product._id}>
      <img
        alt={product.name}
        src={`http://localhost:5000/${product.image}`}
        style={{
          maxWidth: "32vh",
          borderRadius: "5px",
          marginRight: "15px",
        }}
      />
      <div className="details-product">
        <h4>{product.name}</h4>
        <h3>$ {product.price}</h3>
        <p>Available: {product.countInStock} c/u </p>

        <Link to={`/productDetail/${product._id}`} state={{ productDetails }}>
          <p>See more details...</p>
        </Link>

        <span
          className="container-starts"
          style={{
            background: `linear-gradient(90deg, gold ${percentStarts}, gray ${percentStarts}, gray)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
        <br />
        {product.countInStock > 0 && (
          <button
            className="add-btn"
            style={{ marginTop: "10px" }}
            onClick={() => handleAddCart(product)}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductCard;
