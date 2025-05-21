import LayOut from "../../Components/LayOut/LayOut";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./ProductDetail.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../Components/CurrancyFormat/CurrancyFormat";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  return (
    <LayOut>
      {product && product.id ? (
        <div className={classes.singleProductContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={classes.singleProductImage}
          />
          <h2 className={classes.singleProductTitle}>{product.title}</h2>
          <div className={classes.rating}>
            <Rating value={product.rating?.rate || 0} precision={0.1} readOnly />
            <small>{product.rating?.count || 0}</small>
          </div>
          <div>
            <CurrencyFormat amount={product.price} />
          </div>
          <button className={classes.button}>add to cart</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </LayOut>
  );
}

export default ProductDetail;
