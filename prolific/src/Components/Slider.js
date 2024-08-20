import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/download.jfif";
import city2 from "../assets/download2.jfif";
import city3 from "../assets/OIP3.jfif";
import planet1 from "../assets/OIP4.jfif";
import planet2 from "../assets/OIP5.jfif";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [city1, city2, city3, planet1, planet2];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center h-96 bg-black  relative">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
