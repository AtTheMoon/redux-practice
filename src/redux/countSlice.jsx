import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 9,
        name: 'Saitama'
    },
    reducers:{
        increment: function(state, action){
            state.count = state.count + 1
        }
    }
})

export const {increment} = countSlice.actions

export default countSlice.reducer
