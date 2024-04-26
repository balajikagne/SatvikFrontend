import { toast } from "react-toastify";

export const addToCart = (item,variant, quantity,variant_dsc) => (dispatch, getState) => {
    try {
        if (quantity > 10) {
            alert('You cannot add more than 10 quantities');
            return;
        } else if (quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: item });
            return;
        }
        const cartItem = {
            name: item.name,
            _id: item._id,
            img: item.img,
            country: item.country,
            variant:variant,
            variant_dsc:variant_dsc,
            quantity: Number(quantity),
            field:item.field,
            price: item.field[0][variant]* quantity,
        };
        dispatch({ type: 'ADD_TO_CART', payload: cartItem });

        const cartItems = getState().addtoCartReducer.cartItems;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
        console.log(error);
    }
};


export const deleteFromCart=(menu)=>(dispatch,getState)=>{
    toast.success('Success Deleted');
    dispatch({type:'DELETE_FROM_CART',payload:menu})
    const cartItems=getState().addtoCartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
