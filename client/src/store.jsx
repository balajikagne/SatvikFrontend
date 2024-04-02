import { combineReducers, createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; 
import { getAllitemsReducer } from './Reducers/ItemsReducers';
import { addtoCartReducer } from './Reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllBlogsReducer} from './Reducers/BlogsReducer'
import { registerUserReducer,loginUserReducer,addressUserReducer,setAddressUserReducer} from './Reducers/UserReducer';
import { getAllofferReducer } from './Reducers/OfferAction';
import { placeOrderReducer,getUserOrderReducer,allOrdersReducer } from './Reducers/PlaceOrder';
const finalReducer = combineReducers({
  getAllitemsReducer: getAllitemsReducer,
  addtoCartReducer: addtoCartReducer,
  getAllBlogsReducer:getAllBlogsReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
  getAllofferReducer:getAllofferReducer,
  addressUserReducer:addressUserReducer,
  setAddressUserReducer:setAddressUserReducer,
  placeOrderReducer:placeOrderReducer,
  getUserOrderReducer:getUserOrderReducer,
  allOrdersReducer:allOrdersReducer,

});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null
const initialState = {
  addtoCartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer:{
      currentUser:currentUser
  }
  
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
