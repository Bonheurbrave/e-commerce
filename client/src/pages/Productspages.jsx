import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import youthpant from "../images/men/youthpant.jpg";
import graychocobelt from "../images/men/graychocobelt.jpg";
import italianemeet from "../images/men/italianemeet.jpg";
import womwed from "../images/women/womwed.jpg";
import nikephantom from "../images/football/nikephantom.jpg";
import jordankf0 from "../images/men/jordankf0.jpg";
import jordan13 from "../images/men/jordan13.jpg"
import italianmoon from '../images/men/italianmoon.jpg'
import italinslim from '../images/men/italinslim.jpg'
import giantshirt from '../images/men/giantshirt.jpg'
import menpant from '../images/men/menpant.jpg'
import menclassic from '../images/men/menclassic.jpg'
import womairmax from '../images/women/womairmax.jpg'
import womconference from '../images/women/womconference.jpg'
import womtarro from '../images/women/womtarro.jpg'
import wombar from '../images/women/wombar.jpg'
import womsimplekad from '../images/women/womsimplekad.jpg'
import { useNavigate } from 'react-router-dom';
import adidas from '../images/football/adidas.jpg'
import adidascut from '../images/football/adidascut.jpg'
import umbro from '../images/football/umbro.jpg'
import { IoMdHeartEmpty } from "react-icons/io";
import {useAuth0} from '@auth0/auth0-react'
// import  from '../images/women/womengrand'
function Productspages({item, setitem}) {
  const navigate = useNavigate();
 const handleaddtocartfunc = (product)=>{
  setitem(product);
  console.log(item);
 }

  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const trendings = [

    {
      id: 1,
      name: 'gentle clothes',
      image: youthpant,
      price:"$23"
    }
    ,
    {
      id: 2,
      name: "Best slim belts",
      image: graychocobelt,
      price:"$17.89"
    }
    ,
    {
      id: 3,
      name: "Best italian shoes",
      image: italianemeet,
      price:"$213"
    }
    ,
    {
      id: 4,
      name: "Modern women clothes",
      image: womwed,
      price:"$55"
    }
    ,
    {
      id: 5,
      name: "Best sport kits",
      image: jordan13,
      price:"$76"
    }

  ]

  const men = [

    {
      id: 1,
      name: 'Men classic suit',
      image: menclassic,
      price:"$90"
    }
    ,
    {
      id: 2,
      name: "Best climatic shirts",
      image: giantshirt,
      price:"$25"
    }
    ,
    {
      id: 3,
      name: "Italian prefect shoes",
      image: italianemeet,
      price:"$150"
    }
    ,
    {
      id: 4,
      name: "Conference shoes",
      image: italinslim,
      price:"$200"
    }
    ,
    {
      id: 5,
      name: "Best wedding shoes",
      image: italianmoon,
      price:"$92"
    }

  ]
  const women = [

    {
      id: 1,
      name: 'Women air max',
      image: womairmax,
      price:"$25"
    }
    ,
    {
      id: 2,
      name: "Tarro mirror fk0",
      image: womconference,
      price:"$65"
    }
    ,
    {
      id: 3,
      name: " women hoodskin ",
      image: womtarro,
      price:"$65"
    }
    ,
    {
      id: 4,
      name: "Ofk skinny traditional",
      image: wombar,
      price:"$55"
    }
    ,
    {
      id: 5,
      name: "open-closed slim shoes",
      image: womsimplekad,
      price:"$37"
    }

  ]
  const sports = [

    {
      id: 1,
      name: 'Jordan 13 for basket',
      image: jordan13,
      price:"$76"
    }
    ,
    {
      id: 2,
      name: "Umbro Footballer pro",
      image: umbro,
      price:"$55"
    }
    ,
    {
      id: 3,
      name: " Adidas high-jump ",
      image: adidas,
      price:"$28"
    }
    ,
    {
      id: 4,
      name: "Nike phantom pro-2024",
      image: nikephantom,
      price:"$75"
    }
    ,
    {
      id: 5,
      name: "jordan 33-Kf0",
      image: jordankf0,
      price:"$80"
    }
  ]
  const allproducts =  [];
   const handleaddtocart = ()=>{
    navigate("/payform" , item);
   }
  return (
    <div className=' pt-12 px-3 py-10'>
      <div className=' pt-10 px-5 flex'>
        <div>

          <h1 className='font-semibold text-3xl mb-2'>All Products page</h1>
          <h1 className=' font-semibold text-2xl text-slate-700'>choose your product now and then add to cart</h1>
        </div>
        <div className=' w-1/2 px-10  max-sm:hidden'>
          <input type="search" placeholder='search products..' className=' py-3 rounded-md border-2 text-slate-500 border-slate-600 outline-none font-semibold px-10 w-2/3 hover:w-full ease-in-out duration-700' />
        </div>
      </div>

      {/* trending */}

      <div className=" py-7 px-6" id="trends">
        <button className=" py-1 px-8 bg-red-500 text-white font-semibold rounded-md">Trending products</button>
      </div>
      <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:pt-4">
        {trendings.map((product) => {
          return (
            <div key={product.id} className=" shadow-md shadow-slate-700 ml-2 rounded-md max-sm:py-3">
              <img src={product.image} alt="no internet connection" className=" w-2/3 mx-auto h-2/3" />
              <h1 className=" text-center font-semibold">{product.name}</h1>
               <h1 className=' text-slate-700 font-semibold text-center'>Price : {product.price}.00</h1>
              <div className=" flex w-1/2 justify-between mx-auto py-0">
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-slate-500" />
                {/* < FaStar className=" text-yellow-500"/> */}
              </div>
                 {
                          isAuthenticated ?
                          <a href="/payform">
                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1">Add to Cart</button>
                            
                          </a> 
                                    :

                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1" onClick={()=>loginWithRedirect()}>Add to Cart</button>
                 }
                
            </div>
          )
        })}
      </div>
      {/* for men */}


      <div className=" py-7 px-6" id="men">
        <a href="/men-products"><button className=" py-1 px-8 bg-red-500 text-white font-semibold rounded-md">Get all products For Men</button></a>
      </div>
      <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:pt-4">
        {men.map((product) => {
          return (
            <div key={product.id} className=" shadow-md shadow-slate-700 ml-2 rounded-md py-6">
              <img src={product.image} alt="no internet connection" className=" w-2/3 mx-auto h-2/3" />
              <h1 className=" text-center font-semibold">{product.name}</h1>
              <h1 className=' text-slate-700 font-semibold text-center'>Price : {product.price}.00</h1>


              <div className=" flex w-1/2 justify-between mx-auto py-1">
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-slate-500" />
                {/* < FaStar className=" text-yellow-500"/> */}
              </div>
              {
                          isAuthenticated ?
                          <a href="/payform">
                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1">Add to Cart</button>
                            
                          </a> 
                       :

                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1" onClick={()=>loginWithRedirect()}>Add to Cart</button>
                 }
                
            </div>
          )
        })}

      </div>
      {/* for women */}

      <div className=" py-7 px-6" id='women'>
        <a href="/women-products"><button className=" py-0 px-8 bg-red-500 text-white font-semibold rounded-md">Get all products For Women</button></a>
      </div>
      <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:pt-4">
        {women.map((product) => {
          return (
            <div key={product.id} className=" shadow-md shadow-slate-700 ml-2 rounded-md pb-4 max-sm:py-4">
              <img src={product.image} alt="no internet connection" className=" w-2/3 mx-auto h-2/3" />
              <h1 className=" text-center font-semibold">{product.name}</h1>
              <h1 className=' text-slate-700 font-semibold text-center'>Price : {product.price}.00</h1>

              <div className=" flex w-1/2 justify-between mx-auto">
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-slate-500" />
                {/* < FaStar className=" text-yellow-500"/> */}
              </div>
              {
                          isAuthenticated ?
                          <a href="/payform">
                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1">Add to Cart</button>
                            
                          </a> 
                       :

                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1" onClick={()=>loginWithRedirect()}>Add to Cart</button>
                 }
                
            </div>
          )
        })}
      </div>
      {/* for sport */}

      <div className=" py-7 px-6" id='sport'>
        <button className=" py-1 px-8 bg-red-500 text-white font-semibold rounded-md">GEt all products Sports kit</button>
      </div>
      <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:pt-4">
        {sports.map((product) => {
          return (
            <div key={product.id} className=" shadow-md shadow-slate-700 ml-2 rounded-md pb-4 max-sm:py-8">
              <img src={product.image} alt="no internet connection" className=" w-2/3 mx-auto h-2/3" />
              <h1 className=" text-center font-semibold">{product.name}</h1>
              <h1 className=' text-slate-700 font-semibold text-center'>Price : {product.price}.00</h1>

              <div className=" flex w-1/2 justify-between mx-auto">
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-yellow-500" />
                < FaStar size={26} className=" text-slate-500" />
                {/* < FaStar className=" text-yellow-500"/> */}
              </div>
              {
                          isAuthenticated ?
                          // <a href="/payform">

                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1" onClick={handleaddtocart}>Add to Cart</button>
                            
                          // </a> 
                       :

                <button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1" onClick={()=>loginWithRedirect()}>Add to Cart</button>
                 }
                
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Productspages
