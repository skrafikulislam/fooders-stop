import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchFood from "./SearchFood";
import RecipeDetails from "./RecipeDetails";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence wait>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cuisine/:type"} element={<Cuisine />} />
          <Route path={"/searched/:search"} element={<SearchFood />} />
          <Route path={"/recipe/:name"} element={<RecipeDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Pages;
