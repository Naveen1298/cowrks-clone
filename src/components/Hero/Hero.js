import React from "react";
import HeroCss from "./Hero.module.css";
import heroImage from "../../assets/hero_image.jpg";
import heroTextBorder from "../../assets/hero_text_border.png";

const Hero = () => {
  return (
    <div className={HeroCss.background}>
      <div className={HeroCss.heroContainer}>
        <div>
          <img className={HeroCss.heroImage} src={heroImage} alt="heroImage" />
        </div>
        <div className={HeroCss.heroTextContainer}>
          <h2 className={HeroCss.heroText}>Coworking Space in Bengalore</h2>
        </div>
        <div className={HeroCss.heroTextBorderContainer}>
          <img
            className={HeroCss.heroImageBorder}
            src={heroTextBorder}
            alt="heroTextBorder"
          />
        </div>
      </div>
      <div className={HeroCss.content}>
        <h1 className={HeroCss.title}>Coworking spaces in Residency Road</h1>
        <p className={HeroCss.description}>
          Find the perfect workspace in Residency Road with a range of office
          spaces built to suit your business requirements
        </p>
      </div>
    </div>
  );
};

export default Hero;
