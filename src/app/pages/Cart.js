import React, { useEffect, useState } from 'react'
import './Cart.css'
import { remove } from '../redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = ({ handleshow }) => {

    const dispatch = useDispatch();
    const data = useSelector((data) => data.Add.user);

    const sum = data.reduce((acc, data) => acc + parseFloat(data.order.price), 0);
    const total = sum ? sum + 5.91 : 0

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, []);

    return (
        <div>
            <div className='cart-component'>
                <div className='cart-comp'>
                    <div className='shopping-close'>
                        <h1 className='shopping-cart'>Shopping Cart</h1>
                        <span onClick={handleshow} class="material-symbols-outlined close-cart">
                            close
                        </span>
                    </div>

                    {/* product list in cart */}
                    <div className='cart-product-scroll'>
                        {
                            data.map((item, ind) => {
                                return (
                                    <div key={ind} className='cart-product-line'>
                                        <div className='cart-product'>
                                            <img className='cart-product-img' src={item.order.img} alt='...' />

                                            <div className='cart-product-detail'>
                                                <h1 className='cart-product-name'>{item.order.name}</h1>
                                                <p className='cart-product-dimension'>Dimension: <span style={{ color: 'black' }}>40x60cm</span></p>
                                                <p className='cart-product-color'>Color: <input className='cart-product-colors' type='color' value={item.order.color} style={{ color: 'black' }} /></p>
                                                <input className='cart-product-number' type='number' min='1' value='1' />
                                                <p className='cart-product-price'>€{item.order.price} <span style={{ color: '#989898', fontSize: '13px' }}>× 1</span></p>
                                            </div>

                                            <span onClick={() => dispatch(remove(item.id))} class="material-symbols-outlined cart-product-close">
                                                close
                                            </span>
                                        </div>

                                        <div className='cart-line'></div>
                                    </div>
                                )
                            })
                        }

                        {/* product list in cart are proceed to checkout */}
                        <div className='cart-proceed'>
                            <div className='subtotal-price'>
                                <p className='subtotal'>Subtotal</p>
                                <p className='price'>€{sum}</p>
                            </div>

                            <div className='shipping-price'>
                                <p className='shipping'>Shipping</p>
                                <p className='prices'>€{sum ? 5.91 : 0}</p>
                            </div>

                            <div className='shipping-price' style={{ marginBottom: '20px' }}>
                                <p className='shipping'>Included taxes</p>
                                <p className='prices'>€0.00</p>
                            </div>

                            <div className='subtotal-price'>
                                <p className='subtotal'>Total(tax incl.)</p>
                                <p className='price'>€{total}</p>
                            </div>

                            <button className='cart-shopping-btn'>PROCEED TO CHECKOUT</button>
                            <button className='cart-shopping-btn'>CONTINUE SHOPPING</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart
