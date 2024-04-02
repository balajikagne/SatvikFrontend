import React, { useEffect, useState } from "react";
import "./ShopData.css";
import { addToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function ShopData({item}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [start,setStar]=useState('⭐')
    function startFunction(){
        let stars = '';
        for (let i = 0; i < item.rate; i++) {
          stars += '⭐'; // You can use any star symbol here
        }
        setStar(stars);
    }
    useEffect(()=>{
        startFunction();
       
    },[])
    const addtocart=()=>{
      dispatch(addToCart(item,1));
    }

   const More_info=()=>{
    navigate('/shop/item_details',{state:item})
    }
  return (
    <>
      <div className="ShapData_Container" key={item.id} >
             <div className="ShopData_Inner_Container">
               <img
                 src={item.img}
                 alt={item.name}
                 onClick={()=>{More_info(item)}}
                 style={{cursor:"pointer"}}
               />
               <h4>{item.name}</h4>
               <div className="price_box" onClick={()=>{More_info(item)}}>
                <p style={{color:'grey', textDecoration: "line-through" }}>Rs 500</p>
               <p>Rs {item.prices}</p>
               </div>
               <div className="star_Shop_Container">{start}</div>
               <button className="Shop_Container" onClick={addtocart}>
Add To Cart</button>
             </div>
           </div>
    </>
  )
}

export default ShopData;

