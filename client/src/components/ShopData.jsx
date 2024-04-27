import React, { useEffect, useState } from "react";
import "./ShopData.css";
import { addToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
function ShopData({item}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [start,setStar]=useState('⭐');
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
      toast.success('Successfully added');
      dispatch(addToCart(item,'frist',1,item.varient[0]['frist']));
    }

   const More_info=()=>{
    navigate('/shop/item_details',{state:item})
    }
    console.log(item.field[0]['frist'])
  return (
    <>
      <div className="ShapData_Container" key={item.id} >
             <div className="ShopData_Inner_Container">
               <img
                 src={item.img}
                 alt={item.name}
                 onClick={()=>{More_info(item)}}
                 style={{cursor:"pointer",marginTop:"20px"}}
               />
               <div className="price_varient"><h4 style={{textAlign:'center',fontSize:"1.2rem",marginBottom:"-8px"}}>{item.name}</h4>
               <h4 style={{textAlign:'center',marginBottom:"4px"}}>{item.varient[0]['frist']}</h4>
               <div className="price_box" onClick={()=>{More_info(item)}} style={{marginLeft:"8px"}}>
{/*                 <p style={{color:'grey', textDecoration: "line-through" }}>{item.oldPrice}</p> */}
                <p style={{textAlign:'center'}}>Rs {item.field[0]['frist']}</p>
               </div>
               </div>
               
               <div className="star_Shop_Container">{start}</div>
               <button className="Shop_Container" onClick={addtocart} style={{marginBottom:"20px"}}>
Add To Cart</button>
             </div>
           </div>
    </>
  )
}

export default ShopData;

