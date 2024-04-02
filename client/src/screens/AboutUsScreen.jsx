import React from "react";
import "./about.css";
import Carousel from "../components/Carousel";
import poster from "../assets/IMG_2142.png"
import founder from '../assets/founder.jpeg'
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
            src="https://satvikdairy.in/wp-content/uploads/2024/02/5-1024x1024.jpg"
            alt=""
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
                <i class="fa-brands fa-facebook"><a href=""></a></i>
                <i class="fa-brands fa-twitter"><a href=""></a></i>
                <i class="fa-brands fa-square-instagram"><a href=""></a></i>
                <i class="fa-brands fa-linkedin"><a href=""></a></i>
              </div>
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
