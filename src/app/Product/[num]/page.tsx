'use client';
import React from "react";
import { useParams } from "next/navigation";
import { allProduct } from "../../Rest-api";
import { recommended } from "../../pages/Home";
import { adduser } from '../../redux/Slice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import Link from "next/link";

const ProductPage = () => {
  const { num } = useParams();
  const dispatch = useDispatch();

  const popup = (item: String) => {
    Swal.fire({
      icon: 'success',
      title: 'Product added to cart successfully. Pls checkout cart!',
      text: item,
      timer: 3000
    })
  }

  let product = [...allProduct, ...recommended]
  product = product.find((item) => item.id == num);

  if (!product)
    return <div style={{ textAlign: "center", margin: "2cm 0cm" }}>Product not found 🧐</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-[0.5cm] lg:mx-[5cm] sm:items-center justify-center min-h-screen bg-gray-50 sm:gap-8 sm:p-6 p-3">
      {/* Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-[80%] sm:w-[100%] h-[90%] md:h-auto rounded-2xl shadow-lg object-cover mx-auto"
      />

      {/* Product Details */}
      <div className="max-w-md">
        <p>⭐⭐⭐⭐</p>
        <h1 className="text-lg sm:text-2xl font-bold text-gray-800 sm:mb-2">{product.label}</h1>
        <p className="text-lg sm:text-2xl font-semibold text-orange-600"> ₹{product.price}</p>
        <p className="mb-2 sm:mb-4 text-sm sm:text-md"><span className="text-gray-500">Reference: </span>demo_10</p>
        <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ullam ad, voluptatibus fugiat officiis temporibus placeat nesciunt ea culpa molestias pariatur harum eligendi nihil expedita, et quisquam deserunt maiores libero repellendus voluptatum soluta! Aspernatur eligendi rerum a officia aut fugiat quaerat perspiciatis saepe vero veritatis cumque, dicta blanditiis, accusamus quasi.</p>

        <p className="text-gray-600 mb-1 text-sm sm:text-md">Size Guide:</p>
        <select className="w-[4cm] h-[1cm] text-sm text-gray-600 mb-4 sm:mb-8">
          <option>{product.listsize[0].size}</option>
          <option>{product.listsize[1].size}</option>
        </select>

        <div className="flex gap-4">
          <button
            onClick={() => {
              dispatch(adduser(product))
              popup(product.label)
            }}
          className="hover:bg-[#FF6701] hover:border-[#FF6701] hover:text-white text-gray-500 px-6 px-2 rounded-lg text-md transition-all border-2 border-gray-400"
          >
          Add to Cart
        </button>
        <Link href={`/payment/${product.price}`} className="hover:bg-[#08CB00] hover:border-[#08CB00] hover:text-white text-gray-500 px-6 py-2 rounded-lg text-md transition-all border-2 border-gray-400">
          Order Now
        </Link>
      </div>
    </div>
    </div >

  );
};

export default ProductPage;
