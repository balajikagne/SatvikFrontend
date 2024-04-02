import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';
function Navbar() {
  
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const cartsize=useSelector((item)=>item.addtoCartReducer)
   const userstate = useSelector((state) => state.loginUserReducer);
  //  console.log(userstate.currentUser)
   const { currentUser } = userstate;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const dispatch=useDispatch()
  function logout(){
    dispatch(logoutUser())
  }
  
  return (
    <>
      <div className={scrollY > 0 ? 'navbar scrolled' : 'navbar'}>
      <a href="/">
        <div className='Left_box'>
         
          <img src={logo} alt='' />
         
        </div>
        </a>
        <div className='Navbar_btn'>
          <ul>
            <li><a href='/'>Home</a></li>
            {currentUser ? (<><li><a href='/myprofile'>Profile</a></li></>):(null)}
            <li><a href='/shop'>Shop</a></li>
            <li><a href='/aboutus'>About Us</a></li>
            <li><a href='/contactus'>Contact Us</a></li>
            <li><a href='/blogs'>Blogs</a></li>
            {currentUser ? (<><li><a onClick={()=>{logout()}}>LogOut</a></li></>):(<><li><a href='/login'>Login</a></li></>)}
            <div className='container_cart'>
              <a href="/cart" style={{textDecoration:'none'}}><i className="fa-solid fa-cart-shopping"></i></a>
              <div className="cart_value">
                <p>{cartsize.cartItems.length}</p>
              </div>
            </div>
          </ul>
        </div>
        <div className='container_cart_1'>
        <a href="/cart" style={{textDecoration:'none'}}><i className="fa-solid fa-cart-shopping"></i></a>
              <div className="cart_value">
                <p>{cartsize.cartItems.length}</p>
              </div>
            </div>
        <div className="menus" onClick={toggleMenu}>
        <i class="fa-solid fa-bars" style={{color:"skyblue"}}></i>
        </div>
        {isMenuOpen && (
          <div className="navbar_menu">
            <ul>
              <li><a href='/'>Home</a></li>
              {currentUser ? (<><li><a href='/myprofile'>Profile</a></li></>):(null)}
              <li><a href='/shop'>Shop</a></li>
              <li><a href='/aboutus'>About Us</a></li>
              <li><a href='/contactus'>Contact Us</a></li>
              <li><a href='/blogs'>Blogs</a></li>
              {currentUser ? (<><li><a onClick={()=>{logout()}}>LogOut</a></li></>):(<><li><a href='/login'>Login</a></li></>)}
              <div className='container_cart'>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
