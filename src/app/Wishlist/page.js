'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adduser } from '../redux/Slice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Wishlisticon from "../pages/wishlisticon"
import Swal from 'sweetalert2';
import { removeFromWishlist } from '../redux/wishSlice';

const page = () => {

    const router = useRouter();
    const data = useSelector((data) => data.wishlist.items);
    const dispatch = useDispatch();

    const productShow = (item) => {
        router.push(`/Product/${item.id}`);
    }

    const popup = (item) => {
        Swal.fire({
            icon: 'success',
            title: 'Product added to cart successfully. Pls checkout cart!',
            text: item,
            timer: 3000
        })
    }

    return (
        <div>
            <div className='bg-[#F6F6F6] h-[1cm] w-[100%] flex items-center gap-2 sm:pl-10 pl-3 text-sm'>
                <Link className='hover:text-orange-600' href={'/'}>Home</Link>
                <span>/</span>
                <button>My Wishlist</button>
            </div>
            {
                data.length ?
                    <div className='homeclient'>
                        {
                            data.map((item, ind) => {
                                return (
                                    <div key={ind} className='product-list relative'>
                                        <Wishlisticon items={item} />
                                        <img className='product-img cursor-pointer' onClick={() => productShow(item)} src={item.img} alt='img...' />
                                        <h3 className='product-names'>{item.label}</h3>
                                        <span className='product-price'>€{item.price}</span>
                                        <div className='laptop-size-color'>
                                            <select className='product-size'>
                                                <option>{item.listsize[0].size}</option>
                                                <option>{item.listsize[1].size}</option>
                                            </select>
                                            <input className='product-color' type='color' value={item.color} />
                                        </div>
                                        {
                                            <div className='mobile-size-color'>
                                                <select className='product-size'>
                                                    {
                                                        item.listsize.map((item, ind) => {
                                                            return <option key={ind}>{item.size}</option>
                                                        })
                                                    }
                                                </select>
                                                <input className='product-color' type='color' value={item.color} />
                                            </div>
                                        }
                                        <input onClick={() => {
                                            dispatch(adduser({ img: item.img, name: item.label, color: item.color, price: item.price }))
                                            popup(item.label)
                                            dispatch(removeFromWishlist(item.id))
                                        }
                                        } className='stock' type='button' value='ADD TO CART' />
                                    </div>
                                )
                            })
                        }
                    </div> : <div className='text-center my-[2cm]'>
                        <p className='mb-2'>There was no more item in your wishlist</p>
                        <button onClick={() => router.push('/')} className='border-2 px-4 py-2 rounded-md text-gray-500 hover:text-white hover:bg-orange-500'>Continue Shopping</button>
                    </div>
            }
        </div>
    )
}

export default page
