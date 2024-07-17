'use client'
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

const Adduser = createSlice({
    name: 'adduser',
    initialState,
    reducers:{
        adduser:(state, action)=> {
            const data = {
                id: nanoid(),
                order: action.payload
            }
            state.user.push(data);
        },

        remove:(state, action)=> {
            const data = state.user.filter((val)=> {
                return val.id !== action.payload
            })

            state.user = data;
        }
    }
})

export const { adduser, remove } = Adduser.actions;
export default Adduser.reducer;