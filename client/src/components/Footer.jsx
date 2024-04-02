import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <>
      <div className='Footer_Container'>
        <div className='Footer_box_1'>
            <img src="http://satvikdairy.in/wp-content/uploads/2024/02/cropped-Picsart_24-02-06_11-38-07-241-300x267.png" alt="" />
            <h2>Simply Natural</h2>
            <div className='social_media'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>

        </div>
        <div className='Footer_box_2'>
            <h2>Quick Access</h2>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/contactus">Contact Us</a>
            <a href="/aboutus">About Us</a>
        </div>
        <div className='Footer_box_2'>
            <h2>Important Links</h2>
            <a href="/cart">Cart</a>
            <a href="/myprofile">Checkout</a>
            <a href="/login">Login</a>
        </div>
        <div className='Footer_box_3'>
            <h2>Experience the Purest Goodness: Satvik Milk & Milk Products</h2>
            <p>Explore our range of organic, ethically sourced dairy delights, crafted for pure indulgence and well-being. Connect with us to learn more and find your perfect taste of goodness.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
