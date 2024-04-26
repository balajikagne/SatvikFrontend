import React, { useState } from "react";
import { useLocation } from "react-router";
import "./Show_item_details.css";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { toast } from "react-toastify";
function Show_item_details() {
  const location = useLocation();
  const [make, setMake] = useState(true);
  const [number, setNumber] = useState(1);
  const [varient, setVarient] = useState('frist');
  const dispatch = useDispatch();
  function addTo() {
    const item = {
      name: location.state.name,
      img: location.state.img,
      oldPrice: location.state.oldPrice,
      dsc: location.state.dsc,
      _id: location.state._id,
      country:location.state.country,
      field:location.state.field
    };
    toast.success('Successfully added');
    dispatch(addToCart(item,varient,number,location.state.varient[0][varient]));
  }
  function varientAdd(e) {
    setVarient(e)
  }
  return (
    <>
      <div className="Shop_container1_item_details">
        <div className="inner_container1_item_details">
          <div className="second_box1_item_details">
            <div className="detail_box">
              <img
                src={location.state.img}
                alt={location.state.name}
                style={{ cursor: "pointer" }}
              />
              <div className="information_item">
                <a href="" id="category_item">
                  sweet
                </a>
                <h2>{location.state.name}</h2>
                <div className="price_info">
                  <p>Rs {location.state.oldPrice}</p>
                  <h4>{location.state.field[0][varient] * number}</h4>
                </div>
                <div className="item_info_description"></div>
                <p>{location.state.dsc}</p>
                <div className="button_info">
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      addTo();
                    }} style={{cursor:"pointer"}}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="button_info_varient">
                  <button
                    onClick={() => {
                      varientAdd("frist");
                    }}
                  >
                    {location.state.varient[0]['frist']}
                  </button>
                  <button
                    onClick={() => {
                      varientAdd("second");
                    }}
                  >
                    {location.state.varient[0]['second']}
                  </button>
                  <button
                    onClick={() => {
                      varientAdd("third");
                    }}
                  >
                    {location.state.varient[0]['third']}
                  </button>
                </div>
              </div>
            </div>
            <hr style={{ width: "92%" }} />
            <div className="review_description">
              <p
                onClick={() => {
                  setMake(true);
                }}
              >
                Review
              </p>
              <p
                onClick={() => {
                  setMake(false);
                }}
              >
                Description
              </p>
            </div>
            <div className="child_box_item">
              {make ? (
                <>
                  <Review />
                </>
              ) : (
                <>{location.state.dsc}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show_item_details;
