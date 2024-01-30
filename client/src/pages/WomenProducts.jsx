import React from 'react'
import { FaStar } from "react-icons/fa";
import womairmax from '../images/women/womairmax.jpg'
import womconference from '../images/women/womconference.jpg'
import womtarro from '../images/women/womtarro.jpg'
import wombar from '../images/women/wombar.jpg'
import womsimplekad from '../images/women/womsimplekad.jpg'
import womblacktrouser from '../images/women/womblacktrouser.jpg'
import womclassictrouser from '../images/women/womclassictrouser.jpg'
import womeneasy from '../images/women/womeneasy.jpg'
import womgrandopen from '../images/women/womgrandopen.jpg'
import womhightree from '../images/women/womhightree.jpg'
import womjacket from '../images/women/womjacket.jpg'
import womkadash from '../images/women/womkadash.jpg'
import wommirro from '../images/women/wommirro.jpg'
import womprestree from '../images/women/womprestree.jpg'
import womtree from '../images/women/womtree.jpg'
import womwed from '../images/women/womwed.jpg'
// import woomensimple from '../images/women/woomensimple.jpg'
import {useAuth0} from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

function WomenProducts() {
  const navigate = useNavigate();
  const handleaddtocart = ()=>{
    navigate("/payform");
   }
  
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
 
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
    ,

    
    {
      id: 6,
      name: "Trouser v-20",
      image: womblacktrouser,
      price:"$30"
    }
    ,
    
    {
      id: 7,
      name: "classic trouser",
      image: womclassictrouser,
      price:"$35"
    }
    ,
    
    {
      id: 8,
      name: "women easy slipper",
      image: womeneasy,
      price:"$30"
    }
    ,
    
    {
      id: 9,
      name: "Grand-ma Opens",
      image: womgrandopen,
      price:"$37"
    }
    ,
    
    {
      id: 10,
      name: "High-tree slim",
      image: womhightree,
      price:"$80"
    }
    ,
    
    {
      id: 11,
      name: "hum-jacket vision",
      image: womjacket,
      price:"$35"
    }
    ,
    
    {
      id: 12,
      name: "kadashian vision",
      image: womkadash,
      price:"$37"
    }
    ,
    
    {
      id: 13,
      name: "wedding mirror",
      image: wommirro,
      price:"$50"
    }
    ,

    {
      id: 14,
      name: "Pres-shoes",
      image: womprestree,
      price:"$70"
    }
    ,
    
    {
      id: 15,
      name: "wedding shoes",
      image: womwed,
      price:"$37"
    }
    ,
    
    {
      id: 16,
      name: "high-tree",
      image: womtree,
      price:"$37"
    }
    
  ]
  return (

    <div className=' py-12 px-7'>
      
      <h1 className=' text-4xl text-slate-900 capitalize font-bold py-5 pt-3'>women products page </h1>
      <h1 className=' text-2xl text-slate-800 font-semibold py-3 allwomen relative'>All women products fort this generation</h1>

      <div className=' grid grid-cols-4 max-sm:grid-cols-1'>
      {women.map((product) => {
          return (
            <div key={product.id} className=" pt-4 shadow-md shadow-slate-700 ml-2 rounded-md py-4">
              <img src={product.image} alt="no internet connection" className=" w-2/3 mx-auto h-2/3" width={500}/>
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

export default WomenProducts
