import React, { useState, useEffect } from "react";
import "./OrderProductOptions.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/OrderAction";
import { userAddressData } from "../actions/userActions.jsx";
import axios from "axios";
import MyFormComponent from "./MyFormComponent.jsx";
const OrderProductOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [time,settime]=useState(new Date())
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addtoCartReducer.cartItems);
  const CurrentUser = useSelector((state) => state.loginUserReducer);
  const CurrentAddress = useSelector((state) => state.addressUserReducer);
  const { loading, success, currentAddress } = CurrentAddress;
  const { currentUser } = CurrentUser;
  console.log(currentAddress)
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const handleCashOnDelivery = () => {
    if (currentAddress)
    {
      setPaymentMethod("Cash on Delivery");
    let ItemName=new Array(cartItems.length)
    let QuantityName=new Array(cartItems.length)
    let TotalPrice=0;
    for (let i=0;i<cartItems.length;i++){
      ItemName[i]=cartItems[i].name+"  ";
      QuantityName[i]=cartItems[i].quantity+"  ";
      TotalPrice=TotalPrice+cartItems[i].prices;
    }
    console.log(ItemName,QuantityName,TotalPrice)
    let webHooKURL="https://discordapp.com/api/webhooks/1224349625188745266/psOAvtv38OnKRPmXUFS3iIRVR8kOUYcttV4B2DDOhonvDLriGkw27PDYHNxPRd1rKLcO"
    const datauser={
      content :`--------------------------------------------------->NEW\n TIME :${time} \n NAME :${currentAddress.name} \n STREET: ${currentAddress.shippingAddress}\n CITY: ${currentAddress.location}\n  MOBNUMBER: ${currentAddress.mobNumber}\n Name of Items: ${ItemName}\n Quantity: ${QuantityName}\n Total Prices: ${TotalPrice}\n PAYMENT MODE:${"Cash on Delivery"}`,
      tts:false,
      color:'white',
    }
    let  res =axios.post(webHooKURL,datauser)
    Swal.fire({
      title: "Thank you for Ordering",
      text: "Thank You",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result && currentAddress) {
        dispatch(placeOrder(currentAddress, subtotal));
        window.location.href = "/myprofile";
      } else {
        window.location.href = "/myprofile";
      }
    });

    dispatch(placeOrder(currentAddress, subtotal));
    }
    else{
      Swal.fire({
        title: "Please add all details",
        text: "Thank You",
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
  };

  const handleOnlinePayment = () => {
    if (currentAddress)
    {
      setPaymentMethod("Online Payment");
    let ItemName=new Array(cartItems.length)
    let QuantityName=new Array(cartItems.length)
    let TotalPrice=0;
    for (let i=0;i<cartItems.length;i++){
      ItemName[i]=cartItems[i].name+"  ";
      QuantityName[i]=cartItems[i].quantity+"  ";
      TotalPrice=TotalPrice+cartItems[i].prices;
    }
    console.log(ItemName,QuantityName,TotalPrice)
    let webHooKURL="https://discordapp.com/api/webhooks/1224349625188745266/psOAvtv38OnKRPmXUFS3iIRVR8kOUYcttV4B2DDOhonvDLriGkw27PDYHNxPRd1rKLcO"
    const datauser={
      content :`--------------------------------------------------->NEW\n TIME :${time} \n NAME :${currentAddress.name} \n STREET: ${currentAddress.shippingAddress}\n CITY: ${currentAddress.location}\n  MOBNUMBER: ${currentAddress.mobNumber}\n Name of Items: ${ItemName}\n Quantity: ${QuantityName}\n Total Prices: ${TotalPrice}\n PAYMENT MODE:${"Online Payment"}`,
      tts:false,
      color:'white',
    }
    let  res =axios.post(webHooKURL,datauser)
    Swal.fire({
      title: "Thank you for Ordering",
      text: "Thank You",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result && currentAddress) {
        dispatch(placeOrder(currentAddress, subtotal));
        // window.location.href = "/myprofile";
      } else {
        // window.location.href = "/cart";
      }
    });

    dispatch(placeOrder(currentAddress, subtotal));
    }
    else{
      Swal.fire({
        title: "Please add all details",
        text: "Thank You",
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
  };

  try {
    useEffect(() => {
      dispatch(userAddressData(currentUser?._id));
      // dispatch(getUserOrders())
    }, []);
  } catch (error) {
    console.log("something went wrong");
  }
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
      Swal.fire({
        title: "Please Create account",
        text: "Thank You",
        icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = "/signup";
        } else {
          window.location.href = "/signup";
        }
      });
    }
  }, []);
  return (
    <>
    <div className="order-options">
      <h2>Select Payment Method</h2>
      <button onClick={handleCashOnDelivery}>Cash on Delivery</button>
      <button onClick={handleOnlinePayment}>Online Payment</button>
      {paymentMethod && <p>Selected Payment Method: {paymentMethod}</p>}
      {paymentMethod === "Online Payment" ? (
        <>
          <div
            style={{
              width: "100%",
              border: "2px solid black",
              borderRadius: "5px",
              textAlign: "center",
              padding: "10px",
              marginLeft: "-10px",
              backgroundColor: "skyblue",
            }}
          >
            <a
              href="https://www.upilinks.in/payment-link/upi690886108"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Click here to make online payment
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
     <div style={{marginTop:"-50px"}}>
     <MyFormComponent/>
   </div>
   </>
  );
};

export default OrderProductOptions;
