"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { categories, ICategory } from '@/utils/constant';
import { Button } from '../ui/button';

interface ICategories {
    onChange: (val: string) => void
}

function Categories({onChange}: ICategories) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: index * 0.2 },
        }),
      };
  return (
    <div className="flex justify-center items-center flex-wrap">
        {categories.map((category: ICategory, index: number) => (
          <motion.div
            key={category.key + index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
          >
            <Button
              variant="link"
              className={`cursor-pointer ${
                selectedCategory === category.label ? "underline" : ""
              }`}
              size="sm"
              onClick={() => {
                setSelectedCategory(category.label)
                onChange(category.label)
              }}
            >
              {category.label}
            </Button>
          </motion.div>
        ))}
      </div>
  )
}

export default Categories