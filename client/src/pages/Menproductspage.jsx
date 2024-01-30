import React from 'react'
import { FaStar } from "react-icons/fa";
import italianemeet from "../images/men/italianemeet.jpg";
import italianmoon from '../images/men/italianmoon.jpg'
import italinslim from '../images/men/italinslim.jpg'
import giantshirt from '../images/men/giantshirt.jpg'
import menpant from '../images/men/menpant.jpg'
import menclassic from '../images/men/menclassic.jpg'
import bluebelt from '../images/men/bluebelt.jpg'
import chocobelt from '../images/men/chocobelt.jpg'
import italianbelt from '../images/men/italianbelt.jpg'
import coolshirt from '../images/men/coolshirt.jpg'
import gianttshirt from '../images/men/gianttshirt.jpg'
import graychocobelt from '../images/men/graychocobelt.jpg'
import italiancool from '../images/men/italiancool.jpg'
import italianfashion from '../images/men/italianfashion.jpg'
import italianlead from '../images/men/italianlead.jpg'
import italianpres  from '../images/men/italianpres.jpg'
import italianwalk from '../images/men/italianwalk.jpg'
import italianwed from '../images/men/italianwed.jpg'
import itianmaf from '../images/men/itianmaf.jpg'
import menshadowtshirt from '../images/men/menshadowtshirt.jpg'
import menvionpant from '../images/men/menvionpant.jpg'
import pantbelt from '../images/men/pantbelt.jpg'
import presbelt from '../images/men/presbelt.jpg'
import rastabelt from '../images/men/rastabelt.jpg'
import soutbelt from '../images/men/soutbelt.jpg'
import whitebelt from '../images/men/whitebelt.jpg'
import woovenbelt from '../images/men/woovenbelt.jpg'
import { useNavigate } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
function Menproductspage() {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const handleaddtocart = ()=>{
      navigate("/payform");
     }
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
        ,
        ,
        {
          id: 6,
          name: "Jeans",
          image: menpant,
          price:"$40"
        }
        ,
        ,
        {
          id: 7,
          name: "Blue-belts ",
          image: bluebelt,
          price:"$"
        }
        ,
        ,
        {
          id: 8,
          name: "Chocolate belts",
          image: chocobelt,
          price:"$45"
        }
        ,
        ,
        {
          id: 9,
          name: "Best slimbelt",
          image: italianbelt,
          price:"$45"
        }
        ,
        ,
        {
          id: 10,
          name: "Laco-shirt",
          image: coolshirt,
          price:"$35"
        }
        ,
        ,
        {
          id: 11,
          name: "Boss shirts",
          image: gianttshirt,
          price:"$30"
        }
        ,
        ,
        {
          id: 12,
          name: "Gray slim belts",
          image: graychocobelt,
          price:"$50"
        }
        ,
        ,
        {
          id: 13,
          name: "Italian model-1980s",
          image: italiancool,
          price:"$160"
        }
        ,
        ,
        {
          id: 14,
          name: "Fashion kec",
          image: italianfashion,
          price:"$50"
        }
        ,
        ,
        {
          id: 16,
          name: "Italian model-1960s",
          image: italianlead,
          price:"$120"
        }
        ,
        {
          id: 17,
          name: "Italian woodskin",
          image: italianpres,
          price:"$160"
        }
        ,
        {
          id: 18,
          name: "Italin timberland",
          image: italianwalk,
          price:"$120"
        }
        ,
        {
          id: 19,
          name: "Wedding shoes",
          image: italianwed,
          price:"$100"
        }
        ,
        {
          id: 20,
          name: "mafias t-shits",
          image: itianmaf,
          price:"$50"
        }
        ,
        {
          id: 21,
          name: "Best fashion belts",
          image: pantbelt,
          price:"$40"
        }
        ,
        {
          id: 22,
          name: "slim  jeans",
          image: menvionpant,
          price:"$18"
        }
        ,
        {
          id: 23,
          name: "Boss-belts",
          image: presbelt,
          price:"$50"
        }
        ,
        {
          id: 24,
          name: "Italian model-1960s",
          image: italianlead,
          price:"$160"
        }
        ,
        {
          id: 25,
          name: "Suit-belts",
          image: soutbelt,
          price:"$45"
        }
        ,
        {
          id: 26,
          name: "Bingo belts",
          image: rastabelt,
          price:"$40"
        }
        ,
        {
          id: 27,
          name: " White suit belts",
          image: whitebelt,
          price:"$40"
        }
 
    ]
        


  return (
    <div className=' px-7 py-12'>
      
      <h1 className=' text-4xl text-slate-900 capitalize font-bold py-5 pt-3'>Men products page </h1>
      <h1 className=' text-2xl text-slate-800 font-semibold py-3 allwomen relative'>All men products fort this generation</h1>
      
      
      <div className=' grid grid-cols-4 max-sm:grid-cols-1'>
      {men.map((product) => {
          return (
            <div key={product.id} className=" pt-4 shadow-md shadow-slate-700 ml-2 rounded-md max-sm:py-6">
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

export default Menproductspage
