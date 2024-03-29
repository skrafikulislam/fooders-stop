import React from "react";
import Veg from "../components/Veg";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veg />
      <Popular />
    </motion.div>
  );
};

export default Home;
