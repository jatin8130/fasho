'use client'
import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import Link from 'next/link';

const page = () => {

    const data = useSelector((data) => data.Add.user);

    const sum = data.reduce((acc, data) => acc + parseFloat(data.order.price), 0);
    const total = sum ? sum + 5.91 : 0

    return (
        <div>
            <div className='bg-[#F6F6F6] h-[1cm] w-[100%] flex items-center gap-2 sm:pl-10 pl-3 text-sm'>
                <Link className='hover:text-orange-600' href={'/'}>Home</Link>
                <span>/</span>
                <button>Your Cart</button>
            </div>
            <div className='total-sum-product'>
                <div className='total-product'>
                    <h2 className='shopping-cart'>Shopping Cart</h2>
                    {
                        data.length ? data.map((item, ind) => {
                            return (
                                <div key={ind} className='cart-product-line'>
                                    <div className='cart-product cart-product2'>
                                        <img className='cart-product-img' src={item.order.img} alt='...' />

                                        <div className='cart-product-detail'>
                                            <h1 className='cart-product-name'>{item.order.name}</h1>
                                            <p className='cart-product-dimension'>Dimension: <span style={{ color: 'black' }}>40x60cm</span></p>
                                            <p className='cart-product-color'>Color: <input className='cart-product-colors' type='color' value={item.order.color} style={{ color: 'black' }} /></p>
                                        </div>
                                        <div className='cart-product-detail2'>
                                            <input className='cart-product-number' type='number' min='1' value='1' />
                                            <p className='cart-product-price'>€{item.order.price} <span style={{ color: '#989898', fontSize: '13px' }}>× 1</span></p>
                                        </div>
                                    </div>

                                    <div className='cart-line'></div>
                                </div>
                            )
                        }) : <p style={{
                            fontSize: '16px',
                            marginTop: '10px'
                        }}>There was no more item in your cart</p>
                    }
                    {data.length ? <Link className='continue-shopping' href='/'>Continue Shopping</Link> : null}
                </div>

                {/* total sum of product */}
                <div className='total-proceed'>
                    <div className='cart-proceeds'>
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

                        <p style={{
                            cursor: 'pointer'
                           }}
                            className='promo-code'
                        >Have a promo code?</p>
                    </div>
                    <Link href={`/payment/${total}`} style={{
                        cursor: data.length ? 'pointer' : 'not-allowed'
                    }} className='proceed-to-checkout'>PROCEED TO CHECKOUT</Link>
                </div>
            </div>
        </div>
    )
}

export default page
