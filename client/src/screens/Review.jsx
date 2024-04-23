import React from "react";
import "./Review.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllitems } from "../actions/ItemAction";
function Review() {
  const allitems=useSelector(item=>item.getAllitemsReducer)
  const {items,loading,error}=allitems;
   useEffect(() => {
    dispatch(getAllitems());
  }, []);
  return (
    <>
      <div className="Outer_review">
        <p>Review yet not submit</p>
        <div className="review_box">
           <div className="r_box_1">
            <p style={{fontSize:'30px'}}>{items.dsc}</p>
            <p style={{fontSize:'20px',marginBottom:'-10px',marginTop:'-10px'}}>Your email address will not be published. Required fields are marked *</p>
           </div>
           
           <div className="r_box_input">
            
            <div className="childern_1">
            <div className="box1"><label htmlFor="Message">Name</label>
            <input></input></div>
           <div className="box2">
           <label htmlFor="Message">Email</label>
            <input type="email"></input>
           </div>
            </div>
            <div className="maessage_box">
            <label htmlFor="Message">Your Review</label>
            <textarea></textarea>
            </div>
           </div>
           <div className="r_btn_box">
           <button className="r_btn">Send</button>
           </div>
        </div>
      </div>
    </>
  );
}

export default Review;
