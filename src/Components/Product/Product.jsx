import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader"; // Import Loader

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set loading to true before API call
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={classes.products_container}>
      {isLoading ? (
        <Loader />
      ) : (
        products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))
      )}
    </section>
  );
}

export default Product;
