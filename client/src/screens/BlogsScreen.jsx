import React from 'react'
import MapBlogs from '../components/MapBlogs';
import './BlogScreen.css';
import poster from "../assets/IMG_2142.png"
function BlogsScreen() {
  const itemsArray = [
    {
      id: 1,
      imageUrl: "",
      category: "Benefits of Consuming Organic A2 Ghee Daily",
      name: "Ghee",
      rating: 4,
    },
    {
      id: 2,
      imageUrl: "1https://shive.life/wp-content/uploads/2022/01/Best-A2-Ghee-in-India.jpg",
      category: "Benefits of Consuming Organic A2 Ghee Daily",
      name: "Another_Item",
      rating: 3,
    },
    {
        id: 3,
        imageUrl: "1https://shive.life/wp-content/uploads/2022/05/49215.jpg",
        category: "Benefits of Consuming Organic A2 Ghee Daily",
        name: "Another_Item",
        rating: 3,
      },
      {
        id: 4,
        imageUrl: "1https://shive.life/wp-content/uploads/2022/07/54315-3.jpg",
        category: "Benefits of Consuming Organic A2 Ghee Daily",
        name: "Another_Item",
        rating: 3,
      },
      {
        id: 5,
        imageUrl: "1https://shive.life/wp-content/uploads/2022/08/56536.jpg",
        category: "Benefits of Consuming Organic A2 Ghee Daily",
        name: "Another_Item",
        rating: 3,
      },
      {
        id: 6,
        imageUrl: "1https://shive.life/wp-content/uploads/2022/10/MicrosoftTeams-image-2.webp",
        category: "Benefits of Consuming Organic A2 Ghee Daily",
        name: "Another_Item",
        rating: 3,
      },
  ];

return (
<>
<div className="Blogs_first">
          <div className="Blog_Image-container">
            <img
              src={poster}
              alt=""
            />
            <div class="Blog_Image-overlay">
              <p>Blogs</p>
            </div>
          </div>
        </div>
  <div className="Outer_Container_feature1">
    {itemsArray.map((item)=>(
         <MapBlogs item={item}/>
    ))}
  </div>
  <div className="next_btn_box">
    <button>1</button>
    <button>2</button>
    <button>next</button>
  </div>
  <div class="whatsapp_button">
    <a href="https://wa.link/l6p7e1" target="whatsapp">
        <img src="data:image/png;base64,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" alt="WhatsApp"></img>
    </a>
</div>

</>
);
}

export default BlogsScreen
