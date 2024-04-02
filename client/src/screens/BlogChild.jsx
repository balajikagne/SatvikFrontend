import React,{useState} from 'react'
import "./BlogChild.css";
import { useLocation } from 'react-router';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome " ;

function BlogChild() {
  const location = useLocation();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [comment,setComment]=useState('')
  function handleSubmit(){

  }
  return (
    <div className='maintag'>
      <div className='subtag'>
     <h4> {location.state.category}</h4>
     <div className='postedon'>Posted On: 23 October 2023 <br></br> No Comments</div>
     <img className='This_data'
              src={location.state.imageUrl}
              alt=""
            />
            <div className='title'> {location.state.name}</div>
            <div className='content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia voluptas modi dicta temporibus numquam ipsam quia libero tenetur consequuntur excepturi architecto, nemo aut magni saepe tempora corporis nisi voluptate.</div>
            <div className='wrap'>Wrap</div>
            <div className='content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia voluptas modi dicta temporibus numquam ipsam quia libero tenetur consequuntur excepturi architecto, nemo aut magni saepe tempora corporis nisi voluptate.</div>
    {/* <div className='iconcontainer'>
     <div className='postview'><FontAwesomeIcon icon="fa-solid fa-chart-simple" />
    Post Views: 645
    </div>
    <div className='icons'>
    <FontAwesomeIcon icon={faSquareEnvelope} style={{color: "#99a1ad",}} />
    <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#195fd7",}} />
    <FontAwesomeIcon icon={faSquareXTwitter} style={{color: "#84a4db",}} />
    </div> */}
     <div className='products'></div>
    <div className='tweets'></div>
    <div className='prevpost'>
    <span className='prevtag'>&lt;</span>
    <div className='grey'> Previous post </div></div>
    {/* </div> */}
    <span className='comment'><strong>Leave a Reply <br/><br/></strong>Your email address will not be published. Required fields are marked *</span>
    <div>
      <h2>Leave a Comment</h2>
      {/* <form className="form-container1" onSubmit={()=>{handleSubmit}}>
  <input  placeholder="name"className="form-input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

  <input placeholder="Email" className="form-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

  <textarea placeholder="Comment" className="form-textarea" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} rows="4" cols="50" required /><br /><br />

  <input className="form-submit" type="submit" value="Submit" />
</form> */}

    </div>
 


    </div>
    
    {/* <h1>Posted on 27 Oct 2022 
No Comments</h1> */}
    
    <div className='subtag2'>
    <h2 >Recent Posts</h2>
    <div className='posts'>
      <span className='mark'>&gt; </span> <a href='https://shive.life/how-shive-a2-ghee-healthier-than-other-cow-ghee/'>How shive Ghee is healtier then other ghee</a>
      <div className='date'>October 27, 2022</div>
      <span className='mark'>&gt; </span>  <a href='https://shive.life/how-shive-a2-ghee-healthier-than-other-cow-ghee/'>How shive Ghee is healtier then other ghee</a>
      <div className='date'>October 27, 2022</div>
      <span className='mark'>&gt; </span>  <a href='https://shive.life/how-shive-a2-ghee-healthier-than-other-cow-ghee/'>How shive Ghee is healtier then other ghee</a>
      <div className='date'>October 27, 2022</div>
      <span className='mark'>&gt; </span>  <a href='https://shive.life/how-shive-a2-ghee-healthier-than-other-cow-ghee/'>How shive Ghee is healtier then other ghee</a>
      <div className='date'>October 27, 2022</div>
      <span className='mark'>&gt; </span>  <a href='https://shive.life/how-shive-a2-ghee-healthier-than-other-cow-ghee/'>How shive Ghee is healtier then other ghee</a>
      <div className='date'>October 27, 2022</div>
    </div>
    
    </div>
    
    </div>
  )
}

export default BlogChild
