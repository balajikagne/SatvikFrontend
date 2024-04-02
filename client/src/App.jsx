import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
       <BrowserRouter>
        <Routes>
          <Route path="/" component={HomeScreen} ></Route>
<Route path="/shop" component={ShopScreen} ></Route>
<Route path="/aboutus" component={AboutUsScreen} ></Route>
<Route path="/contactus" component={ContactUs} ></Route>
<Route path="/blogs" component={BlogsScreen} ></Route>
<Route path="/login" component={LoginScreen} ></Route>
<Route path="/signup" component={SignUp} ></Route>
<Route path="/cart" component={CartScreen} ></Route>
<Route path="/shop/item_details" component={Show_item_details} ></Route>
<Route path="/blogchild" component={BlogChild} ></Route>
<Route path="/myprofile" component={MyFormComponent} ></Route>
<Route path="/orderOptions" component={OrderProductOptions} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
