import { configureStore } from "@reduxjs/toolkit";
import Adduser from './Slice';
import wishlist from "../redux/wishSlice";

export default configureStore({
    reducer:{
        Add: Adduser,
        wishlist: wishlist,
    }
})