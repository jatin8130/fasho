import { configureStore } from "@reduxjs/toolkit";
import Adduser from './Slice';

export default configureStore({
    reducer:{
        Add: Adduser,
    }
})