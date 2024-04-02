import React from 'react';
import "./Loading.css";
export default function Loading() {
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
      <div className="spinner-border">
      <span style={{fontSize:'2rem'}}>Loading...</span>
     </div>
    </div>
  )
}
