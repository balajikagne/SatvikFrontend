import React, { useEffect, useState } from "react";
import "./Featured_Products.css";
import "./ShopData.css";
import { addToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function MapData({item}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [start,setStar]=useState('⭐')
    function addtocart()
    {
      dispatch(addToCart(item,1,'half'));
    }
    function startFunction(){
        let stars = '';
        for (let i = 0; i < item.rating; i++) {
          stars += '⭐'; // You can use any star symbol here
        }
        setStar(stars);
    }
    const More_info=()=>{
      navigate('/shop/item_details',{state:item})
      }
    useEffect(()=>{
        startFunction()
    },[])
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
               <div className="price_varient"><h4>{item.name}</h4>
               <h4>{item.varient[0]['frist']}</h4>
               <div className="price_box" onClick={()=>{More_info(item)}}>
                <p style={{color:'grey', textDecoration: "line-through" }}>Rs 500</p>
                <p>Rs {item.field[0]['frist']}</p>
               </div>
               </div>
               <div className="star_Shop_Container">{start}</div>
               <button className="Shop_Container" onClick={addtocart}>
Add To Cart</button>
             </div>
           </div>
    </>
  )
}

export default MapData
