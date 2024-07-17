import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
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
            localStorage.setItem('data', JSON.stringify(state.user));
        },

        remove:(state, action)=> {
            const data = state.user.filter((val)=> {
                return val.id !== action.payload
            })

            localStorage.removeItem(action.payload);
            localStorage.setItem('data', JSON.stringify(data));

            state.user = data;
        }
    }
})

export const { adduser, remove } = Adduser.actions;
export default Adduser.reducer;