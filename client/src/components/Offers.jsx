import React from "react";
import "./Offer.css";
import poster from "../assets/poster1.jpg"
import product1 from "../assets/product1.png";
function Offers() {
  function shoppage(){
    window.location.href='/shop'
  }
  return (
    <>
      <div className="container_main">
        <div className="container_offer">
          <div className="first_container1">
            <div className="alltitles">
              <h4 style={{color:"white"}}>Buy Organic Milk Products</h4>
              <h2 style={{color:"white"}}>At the Best Price Available</h2>
              <button className="shopnow" onClick={()=>{shoppage()}}>Shop Now</button>
            </div>
            <img src={poster}></img>
          </div>

          <div className="second_container1">
            <img src={product1}></img>

            <div className="part2">
              <h4>Quality food is the most important thing in our life</h4>
              <p>
                Satvik Farms is an organic firm that delivers desi, and
                farm-fresh products with its goodness and quality untouched. We
                believe that promoting desi products and improving the
                production of native breeds of animals and birds will transform
                the sector largely and bring positive change to the country as a
                whole.
              </p>

              <p>
                India is rich in heritage, and its sole livelihoods are
                agriculture, farming, and husbandry. Satvik comes into existence
                with the very thought of promoting, helping, and supporting
                Indian farming, thereby enhancing the lives of people associated
                with it. We take pride in serving the millions of Indians
                quality, organic products, uplifting the lives of farmers, and
                preserving our cultural heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="overlaye3"></div>
      </div>
    </>
  );
}

export default Offers;
