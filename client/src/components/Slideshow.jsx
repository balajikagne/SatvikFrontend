import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import poster1 from "../assets/poster1.png";
import './Slideshow.css'
import { slideImages } from "./SlideImages";
function Slideshow() {
  const [current, setCurrent] = useState(0);
  const length = slideImages.length;
  // const videoRef=useRef()
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    // videoRef.current.play();
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // videoRef.current.play();
  };

  useEffect(() => {
    // Function to transition to the next slide every 10 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [current, length]);

  if (!Array.isArray(slideImages) || slideImages.length <= 0) {
    return null;
  }
  const defaultOptions = (dboyid) => {
    return {
      loop: true,
      autoplay: true,
      animationData: dboyid,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  };
  console.log(slideImages)
  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slideImages.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.images} alt={index} className="Imageslide" />
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Slideshow;
