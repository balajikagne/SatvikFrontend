import React from 'react'
import logo from '../assets/logo.png';
import "./Footer.css"
function Footer() {
  return (
    <>
      <div className='Footer_Container'>
        <div className='Footer_box_1'>
            <img src={logo} alt="satvikdairy" />
            <h2>Simply Natural</h2>
            <div className='social_media'>
            <a href="https://www.facebook.com/satvikgroup19" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/DairySatvi40615" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/satvik_milk_and_milk_product_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-square-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UClMZ3bjAqHEIQFz3YmfTSPg" style={{textDecoration:"none",color:'black'}}><i class="fa-brands fa-youtube"></i></a>
            </div>

        </div>
        <div className='Footer_box_2'>
            <h2>Quick Access</h2>
            <a href="/" style={{textDecoration:"none",color:'black'}}>Home</a>
            <a href="/shop" style={{textDecoration:"none",color:'black'}}>Shop</a>
            <a href="/contactus" style={{textDecoration:"none",color:'black'}}>Contact Us</a>
            <a href="/aboutus" style={{textDecoration:"none",color:'black'}}>About Us</a>
        </div>
        <div className='Footer_box_2'>
            <h2>Important Links</h2>
            <a href="/cart" style={{textDecoration:"none",color:'black'}}>Cart</a>
            <a href="/myprofile" style={{textDecoration:"none",color:'black'}}>Checkout</a>
            <a href="/login" style={{textDecoration:"none",color:'black'}}>Login</a>
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
