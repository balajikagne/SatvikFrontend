// CartScreen.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteFromCart} from '../actions/cartAction.jsx'
import {addToCart} from '../actions/cartAction.jsx';
import "./cartScreen.css";
import { userAddressData } from "../actions/userActions.jsx";
import { placeOrder } from "../actions/OrderAction.jsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function CartScreen() {
  const cartItems = useSelector((state) => state.addtoCartReducer.cartItems);
  const CurrentUser = useSelector((state) => state.loginUserReducer);
  const CurrentAddress = useSelector((state) => state.addressUserReducer);
  const {loading,success,currentAddress}=CurrentAddress;
  const { currentUser } = CurrentUser;
  var subtotal=cartItems.reduce((x,item)=>x+item.price,0);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  function addData(){
    navigate("/orderOptions",{state:{currentAddress:currentAddress,cartItems:cartItems}})
  }
  try{
    
    useEffect(() => {
      dispatch(userAddressData(currentUser?._id));
      // dispatch(getUserOrders())
    }, []);
  }catch(error){
    console.log("something went wrong")
  }
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
    
      Swal.fire({
        title: "Please Login",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href='/login'
        }
        else{
          window.location.href='/login'
        }
      })
    }
  }, []);
  return (
    <div className="cart-screen-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Variant: {item.variant_dsc}</p>
                <p>Price: Rs {item.price}</p>
                <div className="btn_box">
                <i className="fa-solid fa-plus" area-hidden="true" onClick={()=>{dispatch(addToCart(item,item.variant,item.quantity+1,item.variant_dsc))}} style={{cursor:"pointer"}}></i>
                <b>{item.quantity}</b>
                <i className="fa-solid fa-minus" area-hidden="true" onClick={()=>{dispatch(addToCart(item,item.variant,item.quantity-1,item.variant_dsc))}} style={{cursor:"pointer"}}></i>
                </div>
                <button className="delete_btn" onClick={()=>{dispatch(deleteFromCart(item))}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length === 0 ? (null):(<>
      <div className='total_bill_box'>
         <div className='cart_head'>
          Cart totals
         </div>
         <div className="subtotal">
          <p>Subtotal :</p>
          <h4>{subtotal}</h4>
         </div>
         <div className="shiping_address">
          <p>Shiping address :{currentAddress?.shippingAddress}</p>
          
         </div>
         <div className="subtotal">
          <p style={{fontWeight:'30px',fontSize:'1.5rem',color:'black'}}>Total :</p>
          <h4 style={{fontWeight:'30px',fontSize:'1.5rem' ,marginTop:'25px',padding:'10px'}}>{subtotal}</h4>
         </div>
         <div className="order_now">
          <button onClick={()=>{addData()}}>Order now</button>
         </div>
        </div></>)}
    </div>
  );
}

export default CartScreen;
