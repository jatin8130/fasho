import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../redux/wishSlice';

const wishlisticon = ({ items }) => {

    const dispatch = useDispatch();

    const wishlistItems = useSelector((state) => state.wishlist.items);
    const iswishlist = wishlistItems.some((data) => data.id == items.id);

    const handleWishlist = () => {
        if(iswishlist) {
            dispatch(removeFromWishlist(items.id))
        } else {
            dispatch(addToWishlist(items));
        }
    }

    return (
        <div className='absolute right-0 top-0 cursor-pointer text-2xl' onClick={() => {
            handleWishlist()
        }}>{iswishlist ? "❤️" : "🤍"}</div>
    )
}

export default wishlisticon;
