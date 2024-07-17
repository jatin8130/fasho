'use client'
import React from 'react'
import '../common/Nav.css'
import { useState } from 'react';
import { Select } from 'antd';
import Link from 'next/link'
import Cart from '../pages/Cart.js'
import { useSelector } from 'react-redux';

const currency_lang = [
  {
    value: 'English', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' alt='...' />
      <span>English</span>
    </span>
  },
  {
    value: 'French', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg' alt='...' />
      <span>French</span>
    </span>
  },
  {
    value: 'German', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg' alt='...' />
      <span>German</span>
    </span>
  },
  {
    value: 'Spanish', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg' alt='...' />
      <span>Spanish</span>
    </span>
  },
  {
    value: 'Italian', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg' alt='...' />
      <span>Italian</span>
    </span>
  },
  {
    value: 'Japanese', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg' alt='...' />
      <span>Japanese</span>
    </span>
  },
  {
    value: 'Canada', label: <span>
      <img className='flag' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg' alt='...' />
      <span>Canada</span>
    </span>
  },
]

const gifts = [
  {
    label: 'For architects',
    link: '#'
  },
  {
    label: 'For fashion designers',
    link: '#'
  },
  {
    label: 'For product designers',
    link: '#'
  },
  {
    label: "Valentine's day",
    link: '#'
  },
  {
    label: 'X-mas',
    link: '#'
  }
]

const homeware = [
  {
    label: 'dining',
    link: '#'
  },
  {
    label: 'lighting and sound',
    link: '#'
  },
  {
    label: 'living',
    link: '#'
  }
]

const Stationery = [
  {
    label: 'Cards',
    link: '#'
  },
  {
    label: 'Notebooks',
    link: '#'
  },
  {
    label: 'Office & Desktop',
    link: '#'
  },
  {
    label: 'Pens',
    link: '#'
  }
]

const Toy = [
  {
    label: 'Garden',
    link: '#'
  },
  {
    label: 'For boy',
    link: '#'
  },
  {
    label: 'For girl',
    link: '#'
  },
  {
    label: 'For adults',
    link: '#'
  },
  {
    label: 'For baby',
    link: '#'
  }
]

const menus = [
  {
    label: 'new product',
    dropdown: true,
    grid: 3,
    width: '790px',
    list: [
      {
        img: 'https://themes12.anvanto.com/super/themes/birdwings/modules/an_megamenu/views/img/images/m1.jpg',
        subheading: 'gifts',
        submenu: gifts
      },
      {
        img: 'https://themes12.anvanto.com/super/themes/birdwings/modules/an_megamenu/views/img/images/m2.jpg',
        subheading: 'homeware',
        submenu: homeware
      },
      {
        img: 'https://themes12.anvanto.com/super/themes/birdwings/img/cms/m3.jpg',
      }
    ],
  },
  {
    label: 'specials',
    dropdown: true,
    overflow: true,
    width: '200px',
    grid: 1,
    list: [
      {
        subheading: 'gifts',
        submenu: gifts
      },
      {
        subheading: 'homeware',
        submenu: homeware
      }
    ]
  },
  {
    label: 'best sellers',
    dropdown: true,
    width: '200px',
    grid: 1,
    list: [
      {
        subheading: 'Stationery',
        submenu: Stationery
      }
    ]
  },
  {
    label: 'for home',
    dropdown: true,
    grid: 4,
    width: '790px',
    left: '-6cm',
    list: [
      {
        subheading: 'gifts',
        submenu: gifts
      },
      {
        subheading: 'homeware',
        submenu: homeware
      },
      {
        subheading: 'Stationery',
        submenu: Stationery
      },
      {
        subheading: 'Toys',
        submenu: Toy
      }
    ]
  },
  {
    label: 'for mens',
    dropdown: true,
    grid: 5,
    width: '1010px',
    left: '-12cm',
    list: [
      {
        subheading: 'Gifts',
        submenu: gifts
      },
      {
        subheading: 'Homeware',
        submenu: homeware
      },
      {
        subheading: 'Stationery',
        submenu: Stationery
      },
      {
        img: 'https://themes12.anvanto.com/super/themes/birdwings/94-menu_default/hummingbird-printed-t-shirt.jpg',
        submenu: [
          {
            label: 'Playtype notebook',
            link: '#'
          }
        ]
      },
      {
        img: '	https://themes12.anvanto.com/super/themes/birdwings/78-menu_default/mountain-fox-cushion.jpg',
        submenu: [
          {
            label: 'Mini Bird Feeders - set of two',
            link: '#'
          }
        ]
      }
    ]
  },
  {
    label: 'for womens',
    dropdown: true,
    list: [],
    link: false
  },
  {
    label: 'a product',
    dropdown: true,
    list: [],
    link: false
  },
  {
    label: 'b product',
    dropdown: true,
    list: [],
    link: false
  },
  {
    label: 'c product',
    dropdown: true,
    list: [],
    link: false
  }
]

const client = [
  {
    label: 'CLIENT SERVICE',
    list: [
      {
        img: 'phone_in_talk',
        label: 'Our contacts:',
        list: [
          {
            label: 'Mon-Fri: 9:00 am - 6:00 pm'
          },
          {
            label: 'Sat: 9:00 am - 4:00 pm'
          },
          {
            label: 'Sun: 9:00 am - 2:00 pm'
          },
          {
            label: '8-100-9000-300'
          },
          {
            label: 'demo@demo.com'
          },
          {
            label: '27 Oak Street, Tenafly, US, 07670'
          }
        ]
      },
      {
        img: 'package',
        label: 'Delivery:',
        list: [
          {
            label: 'Free delivery all orders of $120 or more of eligible items across any product category qualify'
          }
        ]
      },
      {
        img: 'credit_card',
        label: 'Payments:',
        list: [
          {
            label: 'Credit Card: Visa, MasterCard, Maestro, American Express'
          }
        ]
      },
      {
        img: 'keyboard_return',
        label: 'Return Policy:',
        list: [
          {
            label: 'You can return any item purchased within 16 days of the delivery date'
          }
        ]
      }
    ],
    link: '#'
  },
  {
    label: 'WISHLIST',
    link: '#',
    list: []
  },
  {
    label: 'CONTACT US',
    link: '#',
    list: []
  }
]

const language = [
  {
    label: 'EUR',
    list: [
      { label: 'EUR' },
      { label: 'PLN' },
      { label: 'USD' }
    ]
  },
  {
    label: 'EN',
    list: [
      { label: 'EN' },
      { label: 'FR' },
      { label: 'ES' },
      { label: 'PL' },
      { label: 'IT' },
      { label: 'NL' },
      { label: 'DE' }
    ]
  },
  {
    label: 'Sign in',
    list: [],
    href: '#'
  }
]

const Nav = () => {

  const data = useSelector((data) => data.Add.user.length)

  const [active, setactive] = useState(null);
  const [show, setshow] = useState(false);

  const handelevententer = (e) => {
    setactive(e);
  }

  const handeleventleave = () => {
    setactive(null);
  }

  function StyleProp(ele, prop) {
    return window.getComputedStyle(ele, null).getPropertyValue(prop);
  }

  const toggle = () => {
    const menu = document.getElementById('mobile-menu');
    const checktoggle = StyleProp(menu, "left");

    if (checktoggle == '-10000px') {
      menu.style.left = '0px';
    } else {
      menu.style.left = '-10000px';
    }
    console.log(checktoggle);
  }

  const handleshow = () => setshow(false)

  return (
    <div>
      <header className='head-laptop'>
        <nav className='top'>
          <p className='buy'>Buy here and save up to 30%. Every second product for free!</p>

          <div className='top-detail'>
            <p className='dal'>Phone:8 800 200 100</p>
            <span className='line'></span>
            <p className='dal'>Email:demo@demo.com</p>
            <span className='line'></span>
            <p className='dal'>Client service</p>
            <span className='line'></span>
            <div className='lang'>
              <Select
                defaultValue='English'
                style={{ width: 110 }}
                options={currency_lang}
              />
            </div>
            <span className='line'></span>
            <div className='cash'>
              <Select
                defaultValue='USD'
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'EUR', label: 'EUR' },
                  { value: 'PLN', label: 'PLN' }
                ]}
              />
            </div>
          </div>
        </nav>

        <div className='nav-two'>
          <div className='search'>
            <div className='logo'>Fasho<span className='span-logo'>.COM</span></div>

            <div className='search-panel'>
              <input className='search-text' type='text' placeholder='Search' />
              <span class="material-symbols-outlined search-icon">
                search
              </span>
            </div>

            <div onClick={() => setshow(true)} className='cart-wish-sign'>
              <div className='cart'>
                <span class="material-symbols-outlined icon">
                  add_shopping_cart
                </span>
                <span className='cart-no'>{data}</span>
                <p>Cart</p>
              </div>

              <div className='wishlist'>
                <span class="material-symbols-outlined icon">
                  favorite
                </span>
                <span className='wish-no'>0</span>
                <p>Wishlist</p>
              </div>

              <div className='sign'>
                <span class="material-symbols-outlined icon">
                  person
                </span>
                <p className='name'>Sign in</p>
              </div>
            </div>
          </div>

          <div id='fixeds'>
            <div className='nav-menu'>
              <ul className='nav-ul' onMouseLeave={handeleventleave}>
                {
                  menus.map((menuItems, menuIndex) => {
                    return (
                      <li
                        key={menuIndex}
                        className="nav-li"
                        onMouseEnter={() => handelevententer(menuItems.label)}
                      >
                        <Link href="#" className="nav-link">
                          {menuItems.label}
                        </Link>
                        {
                          menuItems.list.length ? active === menuItems.label &&
                            <div className='nav-card-container'
                              style={{
                                width: menuItems.width,
                                overflowy: menuItems.overflow && 'auto',
                                display: 'grid',
                                gridTemplateColumns: `repeat(${menuItems.grid}, 1fr)`,
                                gap: '30px',
                                padding: menuItems.overflow ? '1.45rem 0.75rem' : '1.25rem',
                                left: menuItems.left
                              }}
                            >
                              {
                                menuItems.list.map((item, index) => {
                                  return (
                                    <div className='nav-card' key={index}>
                                      {
                                        item.img &&
                                        <div>
                                          <img src={item.img} alt="m1" className="w-full" />
                                        </div>
                                      }
                                      {item.subheading && <h1 className="nav-card-heading">{item.subheading}</h1>}
                                      {
                                        item.submenu && <div className="nav-card-item">
                                          {
                                            item.submenu && item.submenu.map((items, index) =>
                                              <Link key={index} href={items.link} className="nav-card-link">{items.label}</Link>
                                            )
                                          }
                                        </div>
                                      }
                                    </div>
                                  )
                                }
                                )
                              }
                            </div> : null
                        }
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* mobile and tab HTML */}

      <header className='head-mobile'>
        <div className='head-mob'>
          <div className='fixed'>
            <div className='top-two'>
              <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={toggle}>
                menu
              </span>

              <div className='logo'>Fasho<span style={{ color: 'black' }}>.COM</span></div>

              <div onClick={() => setshow(true)} className='cart'>
                <span class="material-symbols-outlined icon">
                  add_shopping_cart
                </span>
                <span className='cart-no'>{data}</span>
              </div>
            </div>
          </div>

          <div id='mobile-menu' className='mobile-menu'>
            <span class="material-symbols-outlined mob-close" onClick={toggle}>
              close
            </span>

            <ul className='mob-ul'>
              {
                menus.map((item, ind) => {
                  return (
                    <li key={ind}
                      className='mob-nav-li'
                    >
                      <div className='mob-group'>
                        <Link href='#' className='mob-nav-li'>{item.label}</Link>

                        {item.list.length ? <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
                          chevron_right
                        </span> : null}
                      </div>

                      {
                        active === item.label &&
                        <div className='mob-card-container'
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px',
                            width: '100%',
                            padding: '20px',
                            height: '100vh'
                          }}
                        >
                          <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={handeleventleave}>
                            arrow_back
                          </span>
                          {
                            item.list.map((items, index) => {
                              return (
                                <div className='mob-nav-card' key={index}>
                                  {items.subheading && <h1 className="nav-card-heading">{items.subheading}</h1>}
                                  {
                                    items.submenu && <div className="nav-card-item">
                                      {
                                        items.submenu && items.submenu.map((itemss, indexs) =>
                                          <Link key={indexs} href={itemss.link} className="nav-card-link">{itemss.label}</Link>
                                        )
                                      }
                                    </div>
                                  }
                                </div>
                              )
                            })
                          }
                        </div>
                      }
                    </li>
                  )
                })
              }
            </ul>

            <ul className='mob-ul-client'>
              {
                client.map((item, index) => {
                  return (
                    <li key={index}
                      className='mob-nav-li'
                    >
                      <div className='mob-group'>
                        <Link href='#' className='mob-nav-li-client'>{item.label}</Link>

                        {item.list.length ? <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
                          chevron_right
                        </span> : null}
                      </div>

                      {
                        active === item.label &&
                        <div className='mob-card-container'
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px',
                            width: '100%',
                            padding: '20px',
                            height: '100vh'
                          }}
                        >
                          <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={handeleventleave}>
                            arrow_back
                          </span>
                          {
                            item.list.map((items, index) => {
                              return (
                                <div className='mob-nav-card-client' key={index}>
                                  <div className='mob-nav-img-label'>
                                    {<span class="material-symbols-outlined" style={{ cursor: 'default', fontWeight: 400 }} onClick={handeleventleave}>
                                      {items.img}
                                    </span>}
                                    {<p className='mob-nav-detail-heading'>{items.label}</p>}
                                  </div>

                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                    {
                                      items.list.map((item, index) => {
                                        return (
                                          <p className='mob-nav-detail'>{item.label}</p>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      }
                    </li>
                  )
                })
              }
            </ul>

            <ul className='mob-ul-lang'>
              {
                language.map((item, ind) => {
                  return (
                    <li key={ind} className='mob-lang-li'>
                      <div className='mob-lang-arrow'>
                        <Link style={{ fontWeight: 500 }} className='mob-nav-li-client' href='#'>{item.label}</Link>

                        {item.list.length ? <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
                          chevron_right
                        </span> : null}
                      </div>

                      {
                        active === item.label &&
                        <div className='mob-card-container'
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px',
                            width: '100%',
                            padding: '20px',
                            height: '100vh'
                          }}
                        >
                          <span class="material-symbols-outlined" style={{ cursor: 'default' }} onClick={handeleventleave}>
                            arrow_back
                          </span>
                          {
                            item.list.map((items, index) => {
                              return (
                                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                  <p className='mob-nav-detail'>{items.label}</p>
                                </div>
                              )
                            })
                          }
                        </div>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className='mob-search-panel'>
            <input className='mob-search-text' type='text' placeholder='Search' />
            <span class="material-symbols-outlined search-icon">
              search
            </span>
          </div>

        </div>
      </header>

      {/* Cart  */}
      {show && <Cart handleshow={handleshow} />}
    </div>
  )
}

export default Nav;
