import React, { useState } from 'react'
import { AiOutlineMenu} from 'react-icons/ai'
import { IoClose, IoCloseSharp } from 'react-icons/io5';
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { LiaShopware } from "react-icons/lia";
import { IoLogOutSharp } from "react-icons/io5";
import AllProductslinks from './AllProductslinks';
import Cartpage from './Cartpage';
import { useAuth0} from '@auth0/auth0-react'

function Navigation() {
  const [showmenu , setshowmenu] = useState(false);
  const [notification , setnotification] = useState(false);
  const [hide , sethide] = useState(false)
  const [showcart , setshowcart] =  useState(false)

  const handleshowmenu = ()=>{
    setshowmenu(true)
  }
  const handlehidemenu = ()=>{
    setshowmenu(false)
  }
  const viewaccountinfo = ()=>{
    sethide(!hide);
  }
  const { logout} = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showlink, setshowlink] = useState(false)
  const handleshow = ()=>{
    setshowlink(true)
  }
  const handlehide = ()=>{
    setshowlink(false)
  }
   const handleshowcart = ()=>{
      setshowcart(!showcart);
   }
   const handlenotification = ()=>{
     setnotification(true)
     setInterval(() => {
      setnotification(false)
     }, 4000);   
   }
  return (
       <>
       
    <div className=' flex justify-between fixed w-screen py-5 px-10 font-bold text-white bg-sky-950 cursor-pointer '>
        {/* left navigation div */}
        
          <div>
            <h1 className=' flex'>Shop0 <LiaShopware size={22}/></h1>
          </div>

        {/* centered div */}
      <div className='w-3/5 max-sm:hidden flex justify-between'>

        <a href="/">
          <h1 onMouseOver={handlehide}>Home</h1>
        </a>
        <a href="/#trends">
          <h1 onMouseOver={handlehide}>New product</h1>
        </a>
        <a href="/all-products">
          <h1 onMouseOver={handleshow}>All products</h1>
        </a>
        <h1 onMouseOver={handlehide}>Store</h1>
      </div>

        {/* right div  */}
        <div className=' hidden max-sm:block'>
          <AiOutlineMenu size={30} onClick={handleshowmenu}/>
        </div>
       {
         showmenu&&
         <div className='hidden max-sm:block px-4 pt-10 fixed h-screen top-0 bg-black text-white w-screen left-0'>
           <h1 className='top-8 absolute right-4' onClick={handlehidemenu}>{<IoClose size={36}/>}</h1>


          <a href="/">
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500 mt-10'>Home</h1>
          </a>
          <a href="#">
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500'>New products</h1>
          </a>
          <a href="/all-products">
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500'>All Products</h1>
          </a>
          <a href="/all-products">
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500'>Store</h1>
          </a>
          <a href="/cart">
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500'>Cart</h1>
          </a>
          <a href="">
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500'>Account</h1>
          </a>
          
            <h1 className=' text-center py-5 border-b-2 border-b-slate-500' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</h1>
          
        </div>
        }
       <div className=' flex max-sm:hidden justify-between w-1/6'>
           <div className=' w-1/3'>
             {isAuthenticated ?
             <img src={user.picture} onClick={viewaccountinfo} alt="no internet connection" width={30} className=' rounded-full' title='View your account information'/>
                            :
             <h1 title='View your account info'>{<FaUserCircle size={23}/>} </h1>
            }
             {isAuthenticated && 
             <>
             {hide &&
             <div className=' fixed bg-blue-500 rounded-lg py-4 pt-6 px-4'>
              <img src={user.picture} alt="no internet connection" className=' rounded-full mx-auto' width={50}/>
            <h1 className=' flex justify-center py-5'>Shop0 <LiaShopware size={22}/></h1>
              <h1 className='mb-2'>{user.email}</h1>
              <h1>{user.address}</h1>
              <h1 className=' py-1 px-4 bg-transparent hover:bg-red-700 border-2 border-white text-center rounded-md ease-in-out duration-300' onClick={handlenotification}>Your Dashbord </h1>
             </div>

             
              }
             </>
             }
             {notification && 
              <div className=' fixed bottom-2 right-5 border-2 border-black px-6 bg-blue-600 rounded-md w-1/4'>
                <h1 className=' font-bold py-4 text-center animate-bounce '>Your cart is empty</h1>
                <h1 className=' border-b-4 border-b-red-600 w-full'></h1>
              </div>
             }
           </div>
           
           {/* <a href="/carting-page"> */}
             <h1 className=' flex' onClick={handlenotification}>{<TiShoppingCart size={23}/>} <span>0</span></h1>
           {/* </a> */}
           <h1 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{<IoLogOutSharp size={23}/>}</h1>
       </div>
    </div>
     
    <div>
      {showlink &&

    <AllProductslinks/>
      
      }
    </div>
       </>
  )
}

export default Navigation
