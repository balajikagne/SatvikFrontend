import React from "react";
import "./contactus.css";
import poster from "../assets/IMG_2142.png"
import { useState } from "react";
function ContactUs() {
  const [name, setName] = useState("");
  const [emailData, setEmailData] = useState({
    to: "kagnebalaji171@gmail.com",
    UserId:'',
    subject: "",
    message: "",
  });
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const MessageSent = () => {
    emailjs
      .send(
        "service_h5tz2bi",
        "template_50xjld1",
        emailData,
        "kagnebalaji171@gmail.com"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
    console.log(emailData.UserId)
  };
  return (
    <>
      <div className="ContactUs_Container">
      <div className="Contact_first">
          <div class="Image-container">
            <img
              src={poster}
              alt=""
            />
            <div class="Image-overlay">
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="cantact_details">
          <div className="info_container">
            <div className="box1">
              <div className="title1">
              <h3>Get Social</h3>
              </div>
              <div className="logo_container">
              <a href="https://www.facebook.com/satvikgroup19" style={{textDecoration:'none',fontSize:'2rem'}}><i className="fab fa-facebook" style={{ color: '#1877f2' }}></i></a>
              <a href="https://twitter.com/DairySatvi40615" style={{textDecoration:'none',fontSize:'2rem'}}><i className="fab fa-twitter" style={{ color: '#1da1f2' }}></i></a>
              <a href="https://www.instagram.com/satvik_milk_and_milk_product_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{textDecoration:'none',fontSize:'2rem'}}><i className="fab fa-instagram" style={{ color: '#bc2a8d' }}></i></a>
    </div>
    <div className="title2">
              <h3>Contact Info</h3>
              </div>
              <div className="location_container">
                <div className="box1">
                <i class="fa-solid fa-location-dot"></i>
                <p>1386, NARASIPURAM ROAD, Pullagavunda puthur ( North), Devarayapuram , Thondamuthur Block, Coimbatore, Tamil Nadu-641109</p>
                </div>
                <div className="box2">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+917397793823">+917397793823</a>
                </div>
                <div className="box2">
                <i class="fa-solid fa-envelope"></i>
                <a href="">
info@shive.life</a>
                </div>
              </div>
            </div>
            {/* <div className="box2"></div> */}
          </div>
          <div className="form_container">
            <p>Get In Touch with Us</p>
            <div className="child1">
              <label htmlFor="">Your Name</label>
            <input type="text" />
            </div>
            <div className="child1">
              <label htmlFor="">Email</label>
            <input type="text" />
            </div>
            <div className="child1">
              <label htmlFor="">Phone No.</label>
            <input type="text" />
            </div>
            <div className="child1">
              <label htmlFor="">Message</label>
            <textarea type="text" />
            </div>
            <div className="child3">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
