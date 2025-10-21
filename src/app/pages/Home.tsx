'use client'
import React, { useState } from 'react'
import './Home.css'
import { Carousel } from 'antd'
import Link from 'next/link'
import { all, women, men, child, mas, valentine } from '../Rest-api'
import { adduser } from '../redux/Slice'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import Wishlisticon from "../pages/wishlisticon"

const banner = [
  {
    img: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-06.jpg',
    label: "Valentine Paul -",
    label2: 'Essential Collection',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius magnam earum placeat culpa modi ex tempora sint vitae soluta.',
    btn: 'Shop collection',
    link: '#'
  },
  {
    img: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-05.jpg',
    label: "Making someone feel",
    label2: 'pretty is an art',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius magnam earum placeat culpa modi ex tempora sint vitae soluta.',
    btn: 'Shop collection',
    link: '#'
  },
  {
    img: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-04.jpg',
    label: "Valentine Paul -",
    label2: 'Essential Collection',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius magnam earum placeat culpa modi ex tempora sint vitae soluta.',
    btn: 'Shop Collection',
    link: '#'
  },
]

export const recommended = [
  {
    id: 37,
    label: 'Heavy Duty Antis',
    img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/1-min-1-253x200-1.png',
    price: '4000',
    listsize: [
      { size: '40x60cm' },
      { size: '60x90cm' }
    ],
    color: '#F39C11',
    stock: true
  },
  {
    id: 38,
    label: 'Heavy Duty Anti',
    img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/05/Untitled-3-1.jpg',
    price: '2000',
    listsize: [
      { size: '60x90cm' },
      { size: '80x120cm' }
    ],
    color: '#5D9CEC',
    stock: true
  },
  {
    id: 39,
    label: 'Zinglo Wheel',
    img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/red_color_chair-1-300x300.png',
    price: '3000',
    listsize: [
      { size: '40x60cm' },
      { size: '60x90cm' }
    ],
    color: '#FFFFFF',
    stock: true
  },
  {
    id: 40,
    label: 'Zinglo Wheels',
    img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/4-min-300x300.png',
    price: '5000',
    listsize: [
      { size: '40x60cm' },
      { size: '60x90cm' }
    ],
    color: '#964B00',
    stock: true
  },
  {
    id: 41,
    label: 'Xpeed Projector',
    img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/3-min.png',
    price: '599',
    listsize: [
      { size: '60x90cm' },
      { size: '80x120cm' }
    ],
    color: '#FFFFFF',
    stock: true
  },
  {
    id: 42,
    label: 'Zux Motered',
    img: 'https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/2-min-300x300.png',
    price: '7000',
    listsize: [
      { size: '60x90cm' },
      { size: '80x120cm' }
    ],
    color: '#AAB2BD',
    stock: true
  }
]

const Home = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const [active, setactive] = useState('all');
  const [Show, setShow] = useState('');
  const [procate, setprocate] = useState(all);

  const popup = (item: String) => {
    Swal.fire({
      icon: 'success',
      title: 'Product added to cart successfully. Pls checkout cart!',
      text: item,
      timer: 3000
    })
  }

  const productShow = (item: any) => {
    router.push(`/Product/${item.id}`);
  }

  return (
    <div>
      <div className='home'>
        <div className='carousel'>
          <Carousel
            autoplay
            dots={true}
            pauseOnDotsHover={true}
            pauseOnHover={true}
            draggable
          >
            {
              banner.map((item, ind) => {
                return (
                  <div key={ind}>
                    <div className='carousel-data'>
                      <h1 className='carousel-heading'>{item.label}<br />{item.label2}</h1>
                      <p className='carousel-para'>{item.para}</p>
                      <Link className='carousel-btn' href={item.link}>{item.btn}</Link>
                    </div>
                    <img src={item.img} className='carousel-img' alt='B1' />
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <section style={{ marginTop: '0.5cm' }}>
          <div className='our-product'>
            <p className='product'>Our Products</p>
            <div className='product-item'>
              <p className={`product-name ${active == 'all' ? 'active' : null}`} onClick={() => { setactive('all'), setprocate(all) }}>All</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'women' ? 'active' : null}`} onClick={() => { setactive('women'), setprocate(women) }}>For women</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'men' ? 'active' : null}`} onClick={() => { setactive('men'), setprocate(men) }}>For men</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'child' ? 'active' : null}`} onClick={() => { setactive('child'), setprocate(child) }}>For children</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'mas' ? 'active' : null}`} onClick={() => { setactive('mas'), setprocate(mas) }}>X-Mas</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'valentine' ? 'active' : null}`} onClick={() => { setactive('valentine'), setprocate(valentine) }}>Valentine's day</p>
            </div>
          </div>

          <div className='homeclient'>
            {
              procate.map((item, ind) => {
                return (
                  <div key={ind} className='product-list relative' onMouseEnter={() => { setShow(item.label) }} onMouseLeave={() => { setShow('') }}>
                    <Wishlisticon items={item}/>
                    <img className='product-img cursor-pointer' onClick={() => productShow(item)} src={item.img} alt='img...' />
                    <h3 className='product-names'>{item.label}</h3>
                    <span className='product-price'>€{item.price}</span>
                    {
                      item.label == Show && <div className='laptop-size-color'>
                        <select className='product-size'>
                          {
                            item.listsize.map((item, ind) => {
                              return <option>{item.size}</option>
                            })
                          }
                        </select>
                        <input className='product-color' type='color' value={item.color} />
                      </div>
                    }
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
                    }
                    } className='stock' type='button' value='ADD TO CART' />
                  </div>
                )
              })
            }
          </div>

          {/* new colloction */}

          <div className='colloction'>
            <div className='colloction-one'>
              <div className='colloction-img'>
                <img className='colloction-imgs' src='https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/feature1-min.jpg' alt='...' />
                <div className='collection-detail'>
                  <p className='new-collection'>New Collection</p>
                  <h5 className='colorful'>Colorful poufs for your Comfort!</h5>
                  <button className='discover'>Discover</button>
                </div>
              </div>
            </div>

            <div className='colloction-two'>
              <img className='colloction-imgs' src='https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/f2-min.jpg' alt='...' />
              <div style={{ marginTop: '10px' }}>
                <h5 style={{ fontSize: '17px', marginBottom: '15px' }}>HUGE SELECTION OF POTS DISCOUNT <span style={{ color: 'orange' }}>$5.00</span></h5>
                <button className='discover'>Discover</button>
              </div>
            </div>
          </div>

          {/* we recommmended */}

          <h1 className='we-recommended'>We Recommended</h1>

          <div className='homeclient'>
            {
              recommended.map((item, ind) => {
                return (
                  <div key={ind} className='product-list relative' onMouseEnter={() => { setShow(item.label) }} onMouseLeave={() => { setShow('') }}>
                    <Wishlisticon items={item}/>
                    <img className='product-img cursor-pointer' onClick={() => productShow(item)} src={item.img} alt='img...' />
                    <h3 className='product-names'>{item.label}</h3>
                    <span className='product-price'>₹{item.price}</span>
                    {
                      item.label == Show && <div className='laptop-size-color'>
                        <select className='product-size'>
                          {
                            item.listsize.map((item, ind) => {
                              return <option>{item.size}</option>
                            })
                          }
                        </select>
                        <input className='product-color' type='color' value={item.color} />
                      </div>
                    }
                    {
                      <div className='mobile-size-color'>
                        <select className='product-size'>
                          {
                            item.listsize.map((item, ind) => {
                              return <option>{item.size}</option>
                            })
                          }
                        </select>
                        <input className='product-color' type='color' value={item.color} />
                      </div>
                    }
                    <input onClick={() => {
                      dispatch(adduser({ img: item.img, name: item.label, color: item.color, price: item.price }))
                      popup(item.label)
                    }} className='stock' type='button' value='ADD TO CART' />
                  </div>
                )
              })
            }
          </div>

          {/* new collection */}

          <div className='colloction'>
            <div className='colloction-one'>
              <div className='colloction-img'>
                <img className='colloction-imgs' src='https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/feature2-min-1.jpg' alt='...' />
              </div>
            </div>

            <div className='colloction-two'>
              <img className='colloction-imgs' src='https://demo.xpeedstudio.com/marketov2/home7/wp-content/uploads/sites/7/2018/04/banner-campaign-3-1.png' alt='...' />
            </div>

            <div className='colloction-two'>
              <img className='colloction-imgs' src='https://demo.xpeedstudio.com/marketov2/jewelry/wp-content/uploads/sites/17/2018/10/feature2-min.jpg' alt='...' />
            </div>
          </div>

          {/* brand name */}

          <div className='brand'>
            <img className='brand-img' src='https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/07/sponsors_1.png' alt='...' />
            <img className='brand-img' src='https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/07/sponsors_2.png' alt='...' />
            <img className='brand-img' src='https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/07/sponsors_3.png' alt='...' />
            <img className='brand-img' src='https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/07/sponsors_4.png' alt='...' />
            <img className='brand-img' src='https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/07/sponsors_5.png' alt='...' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;
