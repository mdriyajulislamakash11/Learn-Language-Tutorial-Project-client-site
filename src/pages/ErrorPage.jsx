import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-9xl font-extrabold text-red-600"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-semibold text-gray-800 mt-4"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 mt-2"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-medium transition"
        >
          🔙 Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
