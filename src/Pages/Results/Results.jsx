import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import classes from "./Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader"; // Import Loader

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Set loading to true before API call
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]); // Add categoryName as dependency

  return (
    <LayOut>
      <section>
        {isLoading && <Loader />} {/* Loader moved above h1 */}
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {!isLoading &&
            results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
