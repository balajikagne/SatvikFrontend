import React from "react";
import './Carousel.css';
function Carousel() {
  const carouselData = [
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 1",
    },
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 2",
    },
    ,
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 3",
    },
    ,
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 4",
    },
    ,
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 5",
    },
    ,
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 5",
    },
    ,
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 6",
    },
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 7",
    },
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 8",
    },
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 9",
    },
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 10",
    },
    {
      image: "https://shive.life/wp-content/uploads/2022/05/49215.jpg",
      text: "Hello guys 11",
    },
    

    // Add more objects as needed
  ];
  const hasData = carouselData.length > 0;
  return (
    <>
       <div className="Carsoul_container">
        {/* <div className="posters">
          <div className={`logos-slide ${hasData ? "animated" : ""}`}>
            {carouselData.map((item, index) => (
              <div className="box1" key={index}>
                <img src={item.image} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Carousel;
