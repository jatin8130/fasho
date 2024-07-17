'use client'
import React, { useState } from 'react'
import './Footer.css'

const aboutFoo = [
  {
    label: 'About shop',
    list: [
      {
        label: 'Delivery',
        href: '#'
      },
      {
        label: 'Legal Notice',
        href: '#'
      },
      {
        label: 'Stores',
        href: '#'
      },
      {
        label: 'Login',
        href: '#'
      }
    ]
  },
  {
    label: 'Categories',
    list: [
      {
        label: 'About us',
        href: '#'
      },
      {
        label: 'Secure payment',
        href: '#'
      },
      {
        label: 'Contact us',
        href: '#'
      },
      {
        label: 'Sitemap',
        href: '#'
      },
      {
        label: 'Our blog',
        href: '#'
      }
    ]
  },
  {
    label: 'Your account',
    list: [
      {
        label: 'Personal info',
        href: '#'
      },
      {
        label: 'Orders',
        href: '#'
      },
      {
        label: 'Credit slips',
        href: '#'
      },
      {
        label: 'Addresses',
        href: '#'
      },
      {
        label: 'Vouchers',
        href: '#'
      }
    ]
  }
]

const Footer = () => {

  const[active, setactive] = useState(null);

  const handelevententer = (e) => {
    setactive(e)
  }

  const handeleventleave = () => {
    setactive(null);
  }

  return (
    <div>
      <div className='Footer'>
        <div className='footer'>
          <div className='card-1'>
            <div className='send-get'>
              <span class="material-symbols-outlined send">
                send
              </span>
              <h3 className='get'>Get our latest news and special sales</h3>
            </div>

            <div className='email-check-agree'>
              <div className='email-img'>
                <input className='email' type='text' placeholder='Enter your email' />
                <span class="material-symbols-outlined send-btn">
                  send
                </span>
              </div>

              <div className='check-agree'>
                <input type='checkbox' />
                <p className='agree'>I agree to the terms and condition and the privacy policy</p>
              </div>
            </div>
          </div>

          <div className='card-2'>
            <div className='laptop-card-2'>
              <div className='laptop-logo'>
                <h2 className='fash'>Fasho<span style={{ color: '#FF6701' }}>.COM</span></h2>
                <p className='tm'>© 2024 - Ecommerce software by PrestaShop™</p>
              </div>

              <div className='about-cate-acc'>
                {
                  aboutFoo.map((item, index) => {
                    return (
                      <div key={index} className='card-detail'>
                        <h4 className='detail-heading'>{item.label}</h4>
                        {
                          item.list.map((item, ind) => {
                            return (
                              <p key={ind} className='detail-data'>{item.label}</p>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className='mob-card-2'>
              <div className='laptop-logo'>
                <h2 className='fash'>Fasho<span style={{ color: '#FF6701' }}>.COM</span></h2>
                <p className='tm'>© 2024 - Ecommerce software by PrestaShop™</p>
              </div>

              <div className='about-cate-acc-2'>
                {
                  aboutFoo.map((item, index) => {
                    return (
                      <div key={index} className='card-detail'>
                        <div className='detail-arrow'>
                          <h4 className='detail-heading-2'>{item.label}</h4>
                          <div>
                          {active != item.label && item.list.length ? <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
                            expand_more
                          </span> : null}

                          {active == item.label && item.list.length ? <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handeleventleave(item.label) }}>
                            expand_less
                          </span> : null}
                          </div>
                        </div>
                        {
                          active === item.label && item.list.map((item, ind) => {
                            return (
                              <p key={ind} className='detail-data-2'>{item.label}</p>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
