import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({ // here cart is the slice, and add() and remove() are its functions
        name:"cart",
        initialState:[],
        reducers:{
                add:(state,action) => {
                        state.push(action.payload); // action payload represents the argument that has been passed
                },
                remove:(state,action) => {
                        return state.filter((item) => item.id !== action.payload);
                }
        }
});
 
export const {add,remove} = cartSlice.actions; // export both functions
export default cartSlice.reducer; // export reducer