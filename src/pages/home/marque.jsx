/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const Marque = ({ children, className, direction }) => {
  return (
    <div className="overflow-clip cursor-none cursor-view ">
      <motion.ul
        initial={{ x: direction === "reverse" ? "0%" : "-50%" }}
        animate={{
          x: direction === "reverse" ? "-50%" : "0%",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className={twMerge(
          "text-8xl font-normal inline-flex whitespace-nowrap flex-nowrap ",
          className
        )}
      >
        <li className="text-nowrap flex-shrink-0 mx-4">{children}</li>
        <li className="text-nowrap flex-shrink-0 mx-4">{children}</li>
        <li className="text-nowrap flex-shrink-0 mx-4">{children}</li>
        <li className="text-nowrap flex-shrink-0 mx-4">{children}</li>
      </motion.ul>
    </div>
  );
};

export default Marque;
