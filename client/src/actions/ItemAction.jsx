import axios from 'axios';
// import swal from 'sweetalert'
export const getAllitems=()=>async dispatch=>{
    dispatch({type:'GET_ITEMS_REQ'})
    try {
        const response=await axios.get('http://127.0.0.1:5002/api/items/getallitems')
        console.log(response)
        dispatch({type:'GET_ITEMS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED",payload : error})
    }
}

export const getALLBlogs=()=>async dispatch=>{
    dispatch({type:'GET_BLOGS_REQ'})
    try {
        const response=await axios.get('http://127.0.0.1:5002/api/BLOGS/getallBLOGS')
        
        dispatch({type:'GET_BLOGS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_BLOGS_FAILED",payload : error})
    }
}

export const getALLOffers=()=>async dispatch=>{
    dispatch({type:'GET_OFFERS_REQ'})
    try {
        const response=await axios.get('http://127.0.0.1:5002/api/OFFERS/getallOFFERS')
        
        dispatch({type:'GET_OFFERS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_OFFERS_FAILED",payload : error})
    }
}

export const filterP=(searchkey,category)=>async dispatch=>{
    
    dispatch({type:'GET_ITEMS_REQ'})
      let  filterdItem1;
    //   console.log('hellow')
    try{
        console.log(searchkey,category)
        
            
           if (searchkey==='low to high' && category==='all')
           {
            const res=await axios.get("http://127.0.0.1:5002/api/items/getallitems")
            // filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=res.data.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices), parseFloat(a.prices));
                const lowestPriceB = Math.min(parseFloat(b.prices), parseFloat(b.prices));
  
                return lowestPriceA - lowestPriceB;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
           else if (searchkey=='low to high' && category!=='all')
           {
            const res=await axios.get("http://127.0.0.1:5002/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=filterdItem1.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices), parseFloat(a.prices));
                const lowestPriceB = Math.min(parseFloat(b.prices), parseFloat(b.prices));
  
                return lowestPriceA - lowestPriceB;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
           else if (searchkey=='high to low' && category!=='all')
           {
            const res=await axios.get("http://127.0.0.1:5002/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=filterdItem1.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices), parseFloat(a.prices));
                const lowestPriceB = Math.min(parseFloat(b.prices), parseFloat(b.prices));
  
                return lowestPriceB - lowestPriceA;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
           else if (searchkey==='high to low' && category==='all'){
            const res=await axios.get("http://127.0.0.1:5002/api/items/getallitems")
            // filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=res.data.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices), parseFloat(a.prices));
                const lowestPriceB = Math.min(parseFloat(b.prices), parseFloat(b.prices));
  
                return lowestPriceB - lowestPriceA;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
          else{
            const res=await axios.get("http://127.0.0.1:5002/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem1})
          }
       
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
