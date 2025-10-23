'use client'
import React from 'react'
import '../common/Nav.css'
import { useState } from 'react';
import Link from 'next/link'
import Cart from '../pages/Cart.js'
import { useSelector } from 'react-redux';

const currency_lang = [
  {
    value: 'English',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="English flag"
        />
        <span>English</span>
      </span>
    ),
  },
  {
    value: 'French',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          alt="French flag"
        />
        <span>French</span>
      </span>
    ),
  },
  {
    value: 'German',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
          alt="German flag"
        />
        <span>German</span>
      </span>
    ),
  },
  {
    value: 'Spanish',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
          alt="Spanish flag"
        />
        <span>Spanish</span>
      </span>
    ),
  },
  {
    value: 'Italian',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
          alt="Italian flag"
        />
        <span>Italian</span>
      </span>
    ),
  },
  {
    value: 'Japanese',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
          alt="Japanese flag"
        />
        <span>Japanese</span>
      </span>
    ),
  },
  {
    value: 'Canada',
    label: (
      <span className="flex items-center gap-2">
        <img
          className="w-5 h-5 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
          alt="Canadian flag"
        />
        <span>Canada</span>
      </span>
    ),
  },
];

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
        img: 'https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/feature2-min-1.jpg',
        subheading: 'gifts',
        submenu: gifts
      },
      {
        img: 'https://demo.xpeedstudio.com/marketov2/jewelry/wp-content/uploads/sites/17/2018/10/feature2-min.jpg',
        subheading: 'homeware',
        submenu: homeware
      },
      {
        img: 'https://demo.xpeedstudio.com/marketov2/home7/wp-content/uploads/sites/7/2018/04/banner-campaign-3-1.png',
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
        img: 'https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/f2-min.jpg',
        submenu: [
          {
            label: 'Playtype notebook',
            link: '#'
          }
        ]
      },
      {
        img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/feature1-min.jpg',
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
    link: '/Wishlist',
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
    ],
    href: '#'
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
    ],
    href: '#'
  },
  {
    label: 'Sign in',
    list: [],
    href: '/Signin'
  }
]

const Nav = () => {

  const data = useSelector((data) => data.Add.user.length)
  const wishlistData = useSelector((data) => data.wishlist.items.length)

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

    if (checktoggle == '-500px') {
      menu.style.left = '0px';
    } else {
      menu.style.left = '-500px';
    }
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
            <div className='lang' style={{ zIndex: 999 }}>
              <select className="border rounded-lg px-3 py-2 bg-white text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                {
                  currency_lang.map((item, val) => {
                    return (
                      <option key={val} value={item.label}>{item.label}</option>
                    )
                  })
                }
              </select>
            </div>
            <span className='line'></span>
            <div className='cash'>
              <select
                className="border rounded-lg bg-white px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>
              </select>
            </div>
          </div>
        </nav>

        <div className='nav-two'>
          <div className='search'>
            <div className='logo'>Fasho<span className='span-logo'>.COM</span></div>

            <div className='search-panel'>
              <input className='search-text' type='text' placeholder='Search' />
              <span className="material-symbols-outlined search-icon">
                search
              </span>
            </div>

            <div className='cart-wish-sign'>
              <div onClick={() => setshow(true)} className='cart'>
                <span className="material-symbols-outlined icon">
                  add_shopping_cart
                </span>
                <span className='cart-no'>{data}</span>
                <p>Cart</p>
              </div>

              <Link href='/Wishlist' className='wishlist'>
                <span className="material-symbols-outlined icon">
                  favorite
                </span>
                <span className='wish-no'>{wishlistData}</span>
                <p>Wishlist</p>
              </Link>

              <Link href='/Signin' className='sign'>
                <span className="material-symbols-outlined icon">
                  person
                </span>
                <p className='name'>Sign in</p>
              </Link>
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
                <span className="material-symbols-outlined icon">
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

                        {item.list.length ? <span className="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
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
                          <span className="material-symbols-outlined" style={{ cursor: 'default' }} onClick={handeleventleave}>
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
                        <Link onClick={item.label == 'WISHLIST' ? () => toggle() : undefined} href={item.link} className='mob-nav-li-client'>{item.label}</Link>

                        {item.list.length ? <span className="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
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
                          <span className="material-symbols-outlined" style={{ cursor: 'default' }} onClick={handeleventleave}>
                            arrow_back
                          </span>
                          {
                            item.list.map((items, index) => {
                              return (
                                <div className='mob-nav-card-client' key={index}>
                                  <div className='mob-nav-img-label'>
                                    {<span className="material-symbols-outlined" style={{ cursor: 'default', fontWeight: 400 }} onClick={handeleventleave}>
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
                        <Link onClick={item.label == 'Sign in' ? () => toggle() : undefined} style={{ fontWeight: 500 }} className='mob-nav-li-client' href={item.href}>{item.label}</Link>

                        {item.list.length ? <span className="material-symbols-outlined" style={{ cursor: 'default' }} onClick={() => { handelevententer(item.label) }}>
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
                          <span className="material-symbols-outlined" style={{ cursor: 'default' }} onClick={handeleventleave}>
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
            <input className='mob-search-text' type='text' placeholder='Search products...' />
            <span className="material-symbols-outlined search-icon">
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
