import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Results from "./Pages/Results/Results";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51RTyNGJUfFjoXvpiWWVcfY19Sm8pxrYlJ9wXtr0rlr0tyjkYVAqWj8L2Fy6YdHsQ5Wfw12pI1aNgC4pOZqtzQmRw00BCKYJ9BY"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/payments"
        element={
          <ProtectedRoute
            msg={"you must login to make payment"}
            redirect={"/payments"}
          >
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={"you must login to view your orders"}
            redirect={"/orders"}
          >
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;
