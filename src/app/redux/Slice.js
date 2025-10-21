'use client'
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

const Adduser = createSlice({
    name: 'adduser',
    initialState,
    reducers: {
        adduser: (state, action) => {
            const data = {
                nanoid: nanoid(),
                order: action.payload
            }
            state.user.push(data);
        },

        remove: (state, action) => {
            const data = state.user.filter((val) => {
                return val.nanoid !== action.payload
            })

            state.user = data;
        },

        clear: (state) => {
            state.user = [];
        },
    }
})

export const { adduser, remove, clear } = Adduser.actions;
export default Adduser.reducer;