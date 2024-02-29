// import { createStore } from "redux";
// const reducer=(state=0,action)=>{
//     switch(action.type){
//         case 'INCREMENT': return state+1
//         case 'DECREMENT': return state-1
//         default: return state
//     }

// }
// export const store=createStore(reducer);
import cartReducer from './slices/cartSlice'
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        cart:cartReducer,
    }
})













