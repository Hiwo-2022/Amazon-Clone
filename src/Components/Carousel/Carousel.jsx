import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import "./Carousel.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, idx) => (
          <img src={imageItemLink} key={idx} alt={`carousel-img-${idx}`} />
        ))}
      </Carousel>
        <div className="hero__img"></div>
    </div>
  );
}

export default CarouselEffect;
