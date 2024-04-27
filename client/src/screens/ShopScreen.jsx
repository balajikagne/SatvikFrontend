import React, { useState, useEffect } from "react";
import "./shopscreen.css";
import ShopData from "../components/ShopData";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory,filterP1,getAllitems } from "../actions/ItemAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import barfi from '../assets/barfi.jpg';
import uproduct1 from '../assets/our_products/uproduct2.jpg'
import uproduct3 from '../assets/our_products/uproduct3.jpg'
import { Form, Col, Row, Button } from "react-bootstrap";
import {filterP } from "../actions/ItemAction";
function ShopScreen() {
  const [start, setStar] = useState("⭐");
  const [searchkey,setsearch]=useState('');
  const [category,setcategory]=useState('all');
  const dispatch=useDispatch()
  const [currentPage, setCurrentpage] = useState(1);
  const [postPage, setPostpage] = useState(9);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2500);
  const allitems=useSelector(item=>item.getAllitemsReducer)
  const {items,loading,error}=allitems;
  let currentPost=0;
  let gheevalue=0;
  let sweetvalue=0;
  let milkproduct=0;
  function callback(e){
    dispatch(filterP(e,category))
  }
try{
  const lastPostindex = currentPage * postPage;
  const firstpostIndex = lastPostindex - postPage;
  currentPost = items.slice(firstpostIndex, lastPostindex);
  
  for (let i=0;i<items.length;i++)
  {
    if (items[i].category==='ghee'){
      gheevalue++;
    }
    else if (items[i].category==='sweets')
    {
      sweetvalue++;
    }
    else{
      milkproduct++;
    }
  }
}
catch(error){
}


  function startFunction(e) {
    let stars = e;
    for (let i = 0; i < 5; i++) {
      stars += "⭐";
    }
    setStar(stars);
  }
  useEffect(() => {
    startFunction();
    dispatch(getAllitems())
  }, []);
  let val = currentPage;
  function Nextpage() {
    val++;
    setCurrentpage(val);
  }
  function filterCat(e){
    dispatch(filterCategory(e))
  }
   const handlePriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
    dispatch(filterP1(minPrice, newMaxPrice, category)); // Dispatch action with price range
  };
  return (
    <>
      <div className="Shop_container">
        <div className="inner_container">
          <div className="first_box">
            <div className="box1">
              <h2>Filter By Prize</h2>
              <div className="prize_adjust">
      <h3>₹ {minPrice}</h3>
      <input
        type="range"
        className="form-range"
        id="customRange1"
        style={{ width: "70%", marginTop: '17px' }}
        min="0"
        max="2500"
        step="100"
        value={maxPrice}
        onChange={handlePriceChange}
      />
      <h3>₹ {maxPrice}</h3>
    </div>
            </div>
               <h2 style={{textAlign:'center'}}>categories</h2>
            <div className="box2">
              
              <div className="cnames">
                <p onClick={()=>{filterCat('ghee')}} style={{cursor:"pointer"}}>Ghee</p>
                <p onClick={()=>{filterCat('milk products')}} style={{cursor:"pointer"}}>Milk products</p>
                <p onClick={()=>{filterCat('sweets')}} style={{cursor:"pointer"}}>Sweet</p>
              </div>
              <div className="cvalues">
                <p>({gheevalue})</p>
                <p>({milkproduct})</p>
                <p>({sweetvalue})</p>

              </div>
            </div>
            <div className="box3_shop">
              <p>Hottest Deals</p>
              <div className="child_box">
                <img
                  src={barfi}
                  alt=""
                />
                <h4>Chocalate Barfi</h4>
                <div style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"20px",marginBottom:'20px',marginTop:'-30px'}}>
                  <span style={{ textDecoration: "line-through" }}>₹600</span>
                  <h3>₹300</h3>
                </div>
              </div>
              <div className="child_box">
                <img
                  src={uproduct1}
                  alt=""
                />
                <h4>Ghee Pack of 1kg</h4>
                <div style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"20px",marginBottom:'20px',marginTop:'-30px'}}>
                  <span style={{ textDecoration: "line-through" }}>₹600</span>
                  <h3>₹650</h3>
                </div>
              </div>
              <div className="child_box">
                <img
                  src={uproduct3}
                  alt=""
                />
                <h4>PURE COW GHEE</h4>
                <div style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"20px",marginBottom:'20px',marginTop:'-30px'}}>
                  <span style={{ textDecoration: "line-through" }}>₹600</span>
                  <h3>₹650</h3>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="second_box">
            <div className="container_filter">
              <div className="childern_1">
                <p>Home / Shop</p>
                <p>Showing 1-2 of {currentPost.length} results</p>
              </div>
              <div className="childern_2">
              <Form style={{marginTop:"15px"}}>
        <Row>
          <Col>
            <Form.Select value={searchkey} aria-label="Default select example" onChange={(e)=>{if(e.target.value==='Select'){
            return null;
            }else{
              setsearch(e.target.value);callback(e.target.value);
            }}}>
              <option>Select</option>
              <option>low to high</option>
              <option>high to low</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
</div>
            </div>
            <div>
              {loading ? (<Loading/>):error ? (<Error/>):(<>
                <div className="Second_box_child">{currentPost.map((item) => (
                <ShopData item={item} />
              ))}</div>
              </>)}
            </div>
          </div>
        </div>
      </div>
      <div className="next_btn_box1">
    <button onClick={()=>{setCurrentpage(1)}}>1</button>
    <button onClick={()=>{setCurrentpage(2)}}>2</button>
    <button onClick={()=>{Nextpage()}}>next</button>
  </div>
    </>
  );
}

export default ShopScreen;
