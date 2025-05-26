import LayOut from "../../Components/LayOut/LayOut";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../Components/CurrancyFormat/CurrancyFormat";
import Loader from "../../Components/Loader/Loader";
import classes from "../../Components/Product/Product.module.css";

function ProductDetail() {
  const { productId } = useParams();
  console.log("ProductDetail mounted with id:", productId);
  const [isLoading, setisLoading] = useState(false);
  const [product, setproduct] = useState({});
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [productId]);
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true} />}
    </LayOut>
  );
}

export default ProductDetail;
