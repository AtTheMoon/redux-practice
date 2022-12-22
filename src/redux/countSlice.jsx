import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 9,
        name: 'Saitama',
    },
    reducers:{
        increment: function(state, action){
            state.count = state.count + Number(action.payload)
            console.log(action);
        },
        dicrement: function(state, action){
            state.count = state.count - 1
        },
        plusFive: function(state, action){
            state.count = state.count + 5
        },
        minusFive: function(state, action){
            state.count = state.count - 5
        },
        resetFunc: function(state, action){
            state.count = 0
        }
    }
})

export const {increment, dicrement, plusFive, minusFive, resetFunc} = countSlice.actions

export default countSlice.reducer