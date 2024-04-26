import React, { useEffect, useState } from "react";
import "./Featured_Products.css";
import uproduct1 from '../assets/our_products/uproduct1.jpg'
import uproduct2 from '../assets/our_products/uproduct2.jpg'
import uproduct3 from '../assets/our_products/uproduct3.jpg'
import uproduct4 from '../assets/our_products/uproduct4.jpg'
import uproduct5 from '../assets/our_products/uproduct5.jpg'
import MapData from "./MapData";
import { getAllitems } from "../actions/ItemAction";
import Loading from '../components/Loading'
import Error from '../components/Error'
import {useDispatch,useSelector}from 'react-redux';
import ShopData from "./ShopData";
import { useNavigate } from "react-router";
function Featured_Products() {
  
    const dispatch=useDispatch()
    const allitems=useSelector(item=>item.getAllitemsReducer)
    const {items,loading,error}=allitems;
    const navigate=useNavigate()
    useEffect(()=>{
      dispatch(getAllitems())
    },[])
    function setADDRESS(){
      navigate("/shop")
    }
  return (
    <>
 
     <div className="headline_feature">
     <b><p>-----Featured Products-----</p></b>
        <p>SATVIK MILK AND MILK PRODUCTS </p>
     </div>
      <div className="Outer_Container_feature">
        {loading ? (<Loading/>):error ? (<Error/>):(<>{items.slice(0,5).map((item)=>(
             <ShopData item={item}/>
        ))}</>)}
      </div>
      <div className="button">
      <button className="Shop_Container" onClick={()=>{setADDRESS()}} style={{cursor:"pointer"}}>
Know More</button>
      </div>
    </>
  );
}

export default Featured_Products;
