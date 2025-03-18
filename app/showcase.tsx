"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Showcase = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-96 relative text-white"
      >
        <Image
          src="/assets/showcase.jpg"
          alt="showcase"
          layout="fill"
          objectFit="cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 p-4">
          <div className="text-sm text-gray-400">Nature</div>
          <div className="text-2xl font-bold">Wildscape</div>
          <div>
            Explore the untamed beauty of nature—wild landscapes, hidden trails,
            and the creatures that call them home.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Showcase;
