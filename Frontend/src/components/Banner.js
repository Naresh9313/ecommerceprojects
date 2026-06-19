import React, { useState, useEffect } from "react";
import "../styles/Homepage.css";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bannerImages = [
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img
        src={bannerImages[currentImage]}
        className="banner-img"
        alt="Banner"
        width="100%"
      />
    </div>
  );
};

export default Banner;
