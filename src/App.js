import React, { useCallback, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Health from "./Components/Health";
import Footer from "./Components/Footer";
import CheckoutCart from "./Components/CheckoutCart";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Categories from "./Components/Categories";
import BlogItem from "./Components/BlogItem";
const App = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/checkout" element={<CheckoutCart />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/blogpost" element={<BlogItem />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
