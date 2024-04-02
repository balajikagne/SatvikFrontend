import React from 'react'
import '../screens/BlogScreen.css'
import { useNavigate } from 'react-router'
function MapBlogs({item}) {
 const navigate=useNavigate()
 function navigateBlogs(){
  navigate('/blogchild',{state:item})

 }
  return (
    <>
      <div className="Outer_Container_21" key={item.id} onClick={()=>{navigateBlogs()}}>
             <div className="Inner_Container11">
               <img
                 src={item.imageUrl}
                 alt="item"
               />
               <div className="headline_box_new">
               <div className="box_text">
               <h3>{item.name}</h3>
               <span>27 Oct 2022</span>
               </div>
               <p>{item.category}</p>
               </div>
             </div>
           </div>
    </>
  )
}

export default MapBlogs
