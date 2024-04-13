import React from "react";
import "./about.css";
import Carousel from "../components/Carousel";
import poster from "../assets/IMG_2142.png"
import founder from '../assets/founder.jpeg'
import poster3 from '../assets/poster3.png'
function AboutUsScreen() {
  return (
    <>
      <div className="About_Container">
        <div className="About_first">
          <div className="image-container">
            <img
              src={poster}
              alt=""
            />
            <div class="image-overlay">
              <p>About Us</p>
            </div>
          </div>
        </div>

        <div className="About_third">
          <img
            src={poster3}
            alt="about our product"
          />
          <div className="About_second">
            <h2>We Work Hard To Provide You The Best Quality Products...</h2>
            <div>
              <p>
                We are committed towards quality and food safety of our
                products. Our determination towards quality and food safety is
                demonstrated by well-defined quality and food safety procedures
                at various stages from procurement to distribution of our
                products. We maintain a cold storage chain from the procurement
                stage till the time the milk and dairy based VAPs reach the
                consumer. All quality checks are documented in a quality manual
                to ensure that we only procure raw milk which meets our
                standards for further processing the products.
              </p>
            </div>
          </div>
        </div>

        <div className="About_fifth">
          <h3>Our Team</h3>
          <p>
            Satvik milk and milk products was established in 2020.Here,our team
            members aim at product quality,determination and service to our
            customers
          </p>
          <div className="all_members">
            <div className="team_member">
              <img
                src={founder}
                alt="founder"
                style={{height:'450px',width:'400px'}}
              />
              <h2>Ninad Mhatre</h2>
              <p>founder</p>
              <div className="social_media1">
              <a href="https://www.facebook.com/satvikgroup19" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/DairySatvi40615" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/satvik_milk_and_milk_product_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-square-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UClMZ3bjAqHEIQFz3YmfTSPg" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-youtube"></i></a>              </div>
            </div>
          </div>
        </div>
        <div className="about_sixth">
          <div className="box1">
            <h1>Melt into happiness of our products...!!!</h1>
            <a href="/shop">Go To Shop</a>
          </div>
          <div className="box2">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsScreen;
