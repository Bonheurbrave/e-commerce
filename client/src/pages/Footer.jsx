import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { LiaShopware } from 'react-icons/lia'
function Footer() {
  return (
    <>

      <div className=' pt-6 py-12 bg-sky-950 px-8'>
        <div className='py-3'>
          <h1 className=' flex text-white font-bold text-2xl'>Shop0 <LiaShopware size={30} /></h1>
        </div>

        <div className=' flex justify-between max-sm:grid max-sm:grid-cols-2'>
          <div className=' max-sm:w-screen w-1/5 text-slate-400'>
            <h1 className=' font-bold mb-3 text-slate-200 text-xl'>Quick links</h1>

            <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Home</h1>
            <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>New products</h1>
            <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>All products</h1>
            <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Store </h1>
          </div>
          <div className='  max-sm:w-screen w-1/5 '>
            <h1 className=' font-bold mb-3 text-white text-xl'>Contact us </h1>
            <h1 className=' flex text-slate-300 mb-1'>{<MdOutlineMailOutline size={25}/>} info : shop0@gmail.com</h1>
            <h1 className=' flex text-slate-300 mb-1'>{<FaXTwitter size={25}/>} @shop0_250</h1>
            <h1 className=' flex text-slate-300 mb-1'>{<FaFacebookF size={25}/>}@Official shop0</h1>
            <h1 className=' flex text-slate-300 mb-1'>{<FaInstagram size={25}/>}@Shop0_250</h1>
          </div>
          <div className=' w1/5 text-slate-400'>
          <h1 className=' text-xl font-bold mb-3 text-white'>Account</h1>
          <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Cart</h1>
          <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Favourites</h1>
          <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Shopping page</h1>
          <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Logout</h1>
          </div>
          <div className='  max-sm:w-screen w-1/5 text-slate-400'>
            <h1 className=' text-white text-xl font-bold mb-3'>FAQ</h1>
            <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>Support </h1>
            <h1 className=' hover:text-cyan-500 mb-1 cursor-pointer'>How to use ?</h1>
            <h1 className=' hover: text-cyan-500 cursor-pointer'>Get more products</h1>
          </div>
          <div className=' w-1/4 pt-7 max-sm:w-screen'>
            <h1 className=' font-bold text-white text-xl mb-4'>Subscribe for updates</h1>
            <input type="text" placeholder='enter your email address' className=' py-1 border-2 border-white w-2/3 outline-none rounded-l-md px-2' />
            <button className=' text-white bg-blue-600 border-2 border-white py-1 rounded-r-md px-2'>subscribe </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
