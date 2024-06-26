import axios from "axios";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQ" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().addtoCartReducer.cartItems;
  try {
    const res = await axios.post("https://satvikbackend.onrender.com/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    // if (checker===true){
    //   window.location.href='/orders'
    // }
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};

export const getUserOrders=()=>async (dispatch,getState)=>{
  const currentUser=getState().loginUserReducer.currentUser;
  dispatch({type:"USER_ORDER_REQ",
});
try{
  const response=await axios.post("https://satvikbackend.onrender.com/api/orders/getuserorder",{
    userid:currentUser._id,
  });
  dispatch({type:"USER_ORDER_SUCCESS",payload:response.data});
}
catch(error)
{
  dispatch({type:"USER_ORDER_FAILED",payload:error})
}
};
export const getALLOrders = () => async (dispatch,getState) => {
    dispatch({ type: "ALL_ORDER_REQ" });
    try {
      const res = await axios.get("https://satvikbackend.onrender.com/api/orders/getallorders");
      dispatch({ type: "ALL_ORDER_SUCCESS" ,payload:res.data});
      
    } catch (error) {
      dispatch({ type: "ALL_ORDER_FAILED",payload:error });
      console.log("error side")
    }
  };
