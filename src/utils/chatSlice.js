import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage : (state, action) =>{
            state.messages.splice(100,50)
            state.messages.unshift(action.payload)
        }
    }

});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer