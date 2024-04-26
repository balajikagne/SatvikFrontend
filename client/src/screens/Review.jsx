import React,{useEffect,useRef,useState} from "react";
import "./Review.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllitems } from "../actions/ItemAction";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
function Review() {
    const dispatch=useDispatch()
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  const allitems=useSelector(item=>item.getAllitemsReducer)
  const {items,loading,error}=allitems;
  const sendEmail = (e) => {
    e.preventDefault();
     console.log(form.current)
     const formData = {
      name,
      email,
      message,
    };
     emailjs.sendForm(
      'service_embz3s6', 
      'template_xl9560w', 
      form.current, 
      'igR-yc13C33Kh_xMF'
  )
  .then(
      (result) => {
        Swal.fire({
          title:"Thank For Feedback",
          text:'Thank You',
          icon:'success',
          confirmButtonText: "OK",
        }).then((resule)=>{
          if(resule){
            // window.location.href='/contactus'
          }
          else{
            // window.location.href='/contactus'
          }
        })
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };
   useEffect(() => {
    dispatch(getAllitems());
  }, []);
  return (
    <>
      <div className="Outer_review">
        <p>Review yet not submit</p>
        <form className="review_box" ref={form} onSubmit={sendEmail}>
           <div className="r_box_1">
            <p style={{fontSize:'30px'}}>{items.dsc}</p>
            <p style={{fontSize:'20px',marginBottom:'-10px',marginTop:'-10px'}}>Your email address will not be published. Required fields are marked *</p>
           </div>
           
           <div className="r_box_input">
            
            <div className="childern_1">
            <div className="box1"><label htmlFor="Message">Name</label>
            <input type="text" name="user_name" onChange={(e)=>{setName(e.target.value)}}/></div>
           <div className="box2">
           <label htmlFor="Message">Email</label>
           <input type="text" name="user_email" onChange={(e)=>{setEmail(e.target.value)}}/>
           </div>
            </div>
            <div className="maessage_box">
            <label htmlFor="Message">Your Review</label>
            <textarea type="text" name="message" onChange={(e)=>{setMessage(e.target.value)}}/>
            </div>
           </div>
           <div className="r_btn_box">
           <button className="r_btn" type="submit">Send</button>
           </div>
        </form>
      </div>
    </>
  );
}

export default Review;
