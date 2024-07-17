'use client'
import React, { useState } from 'react'
import './Home.css'
import { Carousel } from 'antd'
import Link from 'next/link'
import { all, women, men, child, mas, valentine} from '../Rest-api'
import { adduser } from '../redux/Slice'
import { useDispatch } from 'react-redux'

const banner = [
  {
    img: 'https://themes12.anvanto.com/super/themes/birdwings/modules/an_homeslider/img/a943a7a903d8106fdf0fc03b443cf064_1.jpg',
    label: 'Hanging',
    label2: 'Chairs',
    para: 'lorem ipsum dolor sit amet consectetur',
    btn: 'SHOP NOW',
    link: '#'
  },
  {
    img: 'https://themes12.anvanto.com/super/themes/birdwings/modules/an_homeslider/img/9bfbcf844c962980e1476d22e5c7a1b1_1.jpg',
    label: 'Hanging',
    label2: 'Chairs',
    para: 'lorem ipsum dolor sit amet consectetur',
    btn: 'SHOP NOW',
    link: '#'
  },
  {
    img: 'https://themes12.anvanto.com/super/themes/birdwings/modules/an_homeslider/img/7779d97876d0544fa6821156f45197a9_1.jpg',
    label: 'Hanging',
    label2: 'Chairs',
    para: 'lorem ipsum dolor sit amet consectetur',
    btn: 'SHOP NOW',
    link: '#'
  }
]

const recommended = [
  {
    label: 'Playtype notebook',
    img: 'https://themes12.anvanto.com/super/themes/birdwings/94-home_default/hummingbird-printed-t-shirt.jpg',
    price: '15.54',
    listsize: [
      { size: '40x60cm' },
      { size: '60x90cm' }
    ],
    color: '#F39C11',
    stock: true
  },
  {
    label: 'Bethan Laura Wood for...',
    img: 'https://themes12.anvanto.com/super/themes/birdwings/90-home_default/brown-bear-printed-sweater.jpg',
    price: '23.65',
    listsize: [
      { size: '60x90cm' },
      { size: '80x120cm' }
    ],
    color: '#5D9CEC',
    stock: true
  },
  {
    label: 'Art blocks - Play',
    img: 'https://themes12.anvanto.com/super/themes/birdwings/88-home_default/the-best-is-yet-to-come-framed-poster.jpg',
    price: '24.50',
    listsize: [
      { size: '40x60cm' },
      { size: '60x90cm' }
    ],
    color: '#FFFFFF',
    stock: true
  },
  {
    label: 'Alphabat blocks',
    img: 'https://themes12.anvanto.com/super/themes/birdwings/87-home_default/the-adventure-begins-framed-poster.jpg',
    price: '24.50',
    listsize: [
      { size: '40x60cm' },
      { size: '60x90cm' }
    ],
    color: '#964B00',
    stock: true
  },
  {
    label: 'Sky planter',
    img: 'https://themes12.anvanto.com/super/themes/birdwings/86-home_default/today-is-a-good-day-framed-poster.jpg',
    price: '24.50',
    listsize: [
      { size: '60x90cm' },
      { size: '80x120cm' }
    ],
    color: '#FFFFFF',
    stock: true
  },
  {
    label: 'Alessi 9093 hob kettle',
    img: 'https://themes12.anvanto.com/super/themes/birdwings/84-home_default/mug-the-best-is-yet-to-come.jpg',
    price: '92.92',
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

  const [active, setactive] = useState('all');
  const [Show, setShow] = useState(null);
  const [procate, setprocate] = useState(all)

  const handelactive = (e) => {
    setactive(e);
  }

  const mystyle = {
    pointerEvent: 'none',
    cursor: 'not-allowed'
  }

  const order = ({img, name, color, price}) => {
    dispatch(adduser({img, name, color, price}))
    alert('your product order succesfully.')
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
                  <div>
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

        <section style={{ marginTop: '1.5cm' }}>
          <div className='our-product'>
            <p className='product'>Our Products</p>
            <div className='product-item'>
              <p className={`product-name ${active == 'all' ? 'active' : null}`} onClick={() => {handelactive('all'), setprocate(all)}}>All</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'women' ? 'active' : null}`} onClick={() => {handelactive('women'), setprocate(women)}}>For women</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'men' ? 'active' : null}`} onClick={() => {handelactive('men'), setprocate(men)}}>For men</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'child' ? 'active' : null}`} onClick={() => {handelactive('child'), setprocate(child)}}>For children</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'mas' ? 'active' : null}`} onClick={() => {handelactive('mas'), setprocate(mas)}}>X-Mas</p>
              <hr className='lines' />
              <p className={`product-name ${active == 'valentine' ? 'active' : null}`} onClick={() => {handelactive('valentine'), setprocate(valentine)}}>Valentine's day</p>
            </div>
          </div>

          <div className='homeclient'>
            {
              procate.map((item, ind) => {
                return (
                  <div key={ind} className='product-list' onMouseEnter={() => { setShow(item.label) }} onMouseLeave={() => { setShow(null) }}>
                    <img className='product-img' src={item.img} alt='img...' />
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
                              return <option>{item.size}</option>
                            })
                          }
                        </select>
                        <input className='product-color' type='color' value={item.color} />
                      </div>
                    }
                    <input onClick={() => order({img: item.img, name: item.label, color: item.color, price: item.price})} className='stock' type='button' value={item.stock ? 'ADD TO CART' : 'OUT OF STOCK'} style={item.stock ? null : mystyle} />
                  </div>
                )
              })
            }
          </div>

          {/* new colloction */}

          <div className='colloction'>
            <div className='colloction-one'>
              <div className='colloction-img'>
                <img className='colloction-imgs' src='https://themes12.anvanto.com/super/themes/birdwings/modules/an_homeproducts/img/217a0c3c474d30fb5ab010575f29c119_1.jpg' alt='...' />
              </div>
              <div className='colloction-detail'>
                <p style={{ color: '#000', fontSize: '14px' }}>New Colloction</p>
                <p className='colorful'>Colorful poufs for your comfort!</p>
                <span className='discover'>DISCOVER</span>
              </div>
            </div>

            <div className='colloction-two'>
              <div>
                <img className='colloction-imgs' src='https://themes12.anvanto.com/super/themes/birdwings/modules/an_homeproducts/img/bfdaf9b8ce2683c1ac5550fd6fb8765d_1.jpg' alt='...' />
              </div>
              <div className='colloction-details'>
                <p>HUGE SELECTION OF POTS</p>
                <p>DISCOUNT <span style={{color: 'orange'}}>$5.00</span></p>
              </div>
            </div>
          </div>

          {/* we recommmended */}

          <h1 className='we-recommended'>We Recommended</h1>

          <div className='homeclient'>
            {
              recommended.map((item, ind) => {
                return (
                  <div key={ind} className='product-list' onMouseEnter={() => { setShow(item.label) }} onMouseLeave={() => { setShow(null) }}>
                    <img className='product-img' src={item.img} alt='img...' />
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
                              return <option>{item.size}</option>
                            })
                          }
                        </select>
                        <input className='product-color' type='color' value={item.color} />
                      </div>
                    }
                    <input onClick={() => order({img: item.img, name: item.label, color: item.color, price: item.price})} className='stock' type='button' value={item.stock ? 'ADD TO CART' : 'OUT OF STOCK'} style={item.stock ? null : mystyle} />
                  </div>
                )
              })
            }
          </div>

          {/* brand name */}

          <div className='brand'>
            <img className='brand-img' src='https://themes12.anvanto.com/super/themes/birdwings/img/m/7-brand_small.jpg' alt='...' />
            <img className='brand-img' src='https://themes12.anvanto.com/super/themes/birdwings/img/m/6-brand_small.jpg' alt='...' />
            <img className='brand-img' src="https://themes12.anvanto.com/super/themes/birdwings/img/m/5-brand_small.jpg" alt="..." />
            <img className='brand-img' src="https://themes12.anvanto.com/super/themes/birdwings/img/m/4-brand_small.jpg" alt="..." />
            <img className='brand-img' src="https://themes12.anvanto.com/super/themes/birdwings/img/m/3-brand_small.jpg" alt="..." />
            <img className='brand-img' src="https://themes12.anvanto.com/super/themes/birdwings/img/m/2-brand_small.jpg" alt="...." />
            <img className='brand-img' src="https://themes12.anvanto.com/super/themes/birdwings/img/m/1-brand_small.jpg" alt="..." />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;
