import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : []
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
            localStorage.setItem('product', JSON.stringify(state.user));
        },

        remove:(state, action)=> {
            const data = state.user.filter((val)=> {
                return val.id !== action.payload
            })

            localStorage.removeItem(action.payload);
            localStorage.setItem('product', JSON.stringify(data));

            state.user = data;
        }
    }
})

export const { adduser, remove } = Adduser.actions;
export default Adduser.reducer;