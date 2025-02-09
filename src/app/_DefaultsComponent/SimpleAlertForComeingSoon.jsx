"use client";

import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SimpleAlertForComingSoon({ handleAlert }) {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={() => handleAlert(false)}
      className="fixed inset-0 flex items-center p-8 justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-gray-900 via-purple-700 to-blue-500 text-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center"
      >
        <button
          onClick={() => handleAlert(false)}
          className="absolute top-2 right-2 text-white text-lg hover:text-gray-300"
        >
          &times;
        </button>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaRocket className="text-5xl mx-auto mb-4 text-yellow-400 animate-spin-slow" />
        </motion.div>
        <h1 className="text-2xl font-extrabold tracking-wide">
          Launching Soon{dots}
        </h1>
        <p className="mt-2 text-sm font-light">
          We are working on something extraordinary! Stay tuned for the big
          reveal.
        </p>
      </motion.div>
    </div>
  );
}
