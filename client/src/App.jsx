import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import ShopScreen from './screens/ShopScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUs from './screens/ContactUs';
import BlogsScreen from './screens/BlogsScreen';
import LoginScreen from './screens/LoginScreen';
import Footer from './components/Footer';
import SignUp from './screens/SignUp';
import CartScreen from './screens/CartScreen';
import Show_item_details from './screens/Show_item_details';
import BlogChild from './screens/BlogChild';
import MyFormComponent from './screens/MyFormComponent';
// import Read_More from './components/Read_More';
import 'bootstrap';
import OrderProductOptions from './screens/OrderProductOptions';
const App = () => {
  return (
    <div>
      <Navbar/>
       <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shop" element={<ShopScreen/>} />
          <Route path="/aboutus" element={<AboutUsScreen/>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogs" element={<BlogsScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/shop/item_details" element={<Show_item_details />} />
          <Route path="/blogchild" element={<BlogChild />} />
          <Route path="/myprofile" element={<MyFormComponent />} />
          <Route path='/orderOptions' element={<OrderProductOptions/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App