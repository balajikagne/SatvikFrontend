import "./contactus.css";
import poster from "../assets/IMG_2142.png";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
function ContactUs() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
     console.log(form.current)
     const formData = {
      name,
      email,
      phone,
      message,
    };
     emailjs.sendForm(
      'service_embz3s6', 
      'template_xl9560w', 
      form.current, 
      'igR-yc13C33Kh_xMF'
  )
  .then(
      (result) => {
        Swal.fire({
          title:"Thank For Feedback",
          text:'Thank You',
          icon:'success',
          confirmButtonText: "OK",
        }).then((resule)=>{
          if(resule){
            window.location.href='/contactus'
          }
          else{
            window.location.href='/contactus'
          }
        })
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
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
          <form className="form_container" ref={form} onSubmit={sendEmail}>
            <p>Get In Touch with Us</p>
            <div className="child1">
              <label htmlFor="">Your Name</label>
            <input type="text" name="user_name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="child1">
              <label htmlFor="">Email</label>
            <input type="text" name="user_email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="child1">
              <label htmlFor="phone">Phone No.</label>
            <input type="text" name='phone' onChange={(e)=>{setPhone(e.target.value)}}/>
            </div>
            <div className="child1">
              <label htmlFor="message">Message</label>
            <textarea type="text" name="message" onChange={(e)=>{setMessage(e.target.value)}}/>
            </div>
            <div className="child3">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
