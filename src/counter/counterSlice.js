import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        transitionTabAnimation: false,
        currentPage: 'Home',
        headerCancelAnimation: -200,
    },
    reducers: {
        setTransitionTabAnimation: (state,bool)=>{        
            state.transitionTabAnimation = bool.payload;
        },
        setCurrentPage: (state,where)=>{        
            state.currentPage = where.payload;
        },  
        setHeaderCancelAnimation: (state,value)=>{        
            state.headerCancelAnimation = value.payload;
        },            
    },
})

export const { setTransitionTabAnimation,setCurrentPage,setHeaderCancelAnimation } = counterSlice.actions;
export default counterSlice.reducer;