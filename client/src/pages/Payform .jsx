import React  from 'react'
import {useLocation} from 'react-router-dom'
import paypal from '../images/others/paypal.png'
import { MdOutlineVerified } from "react-icons/md";
function Payform() {
   const location = useLocation();
   const handlesubmit = ()=>{
      alert("Invalid Zip code ") 
      alert("please verify your zip code and retry again")
   }
   console.log(location.item);
    return (
      <form action="" onSubmit={handlesubmit}>

        <div className=' pt-12 px-6 max-sm:px-2 py-6'>
            <div className=' flex max-sm:w-screen w-1/4 mx-auto pt-10'>
                <h1 className=' text-slate-800 font-bold text-xl text-center flex  '><MdOutlineVerified size={28} className=' text-blue-600'/> Step 3 - pay with </h1>
                <img src={paypal} width={80} alt="no internet" className=' ml-2' />
            </div>
             <div>
             

            <div className=' w-1/2 px-7 max-sm:px-0 mx-auto bg-slate-300 rounded-lg max-sm:w-screen'>
            <h1 className='font-bold text-center text-slate-900 text-xl capitalize'>payment form </h1>
                
                <div className='block pt-3 '>
                    <label className='block font-semibold text-slate-800' htmlFor="username">Usernames</label>
                <input required type="text" className=' w-full px-7 py-2 rounded-md border-slate-800 border-2' placeholder=' enter your names '/>
                    </div>
                 

                 <div className='block pt-3 '>
                    <label className='block font-semibold text-slate-800' htmlFor="email">Email Address</label>
                 <input required type="email" id="email" className=' w-full px-7 py-2 rounded-md border-slate-800 border-2' placeholder=' enter your email address'/>
                    </div>

              ing   <div className='block pt-3 '>
                    <label className='block font-semibold text-slate-800' htmlFor="Address">Address</label>
                 <input required type="adddress" className=' w-full px-7 py-2 rounded-md border-slate-800 border-2' placeholder='Location'/>
                    </div>
                 <div className='block pt-3 '>
                    <label className='block font-semibold text-slate-800' htmlFor="zip">Zip Code</label>
                 <input required type="number" id='zip' className=' w-full px-7 py-2 rounded-md border-slate-800 border-2' placeholder='enter your zipcode'/>
                    </div>

                 <div className='block pt-3 '>
                    <label className='block font-semibold text-slate-800' htmlFor="card">Card Number</label>
                 <input required type="number" className=' w-full px-7 py-2 rounded-md border-slate-800 border-2' placeholder=' enter your card number'/>
                    </div>

                 <div className='block pt-3 '>
                    <label className='bloc font-semibold text-slate-800 block' htmlFor="amount">Amount</label>
                 <input required type="text" value={2000} contentEditable={false} className=' px-7 rounded-md border-2 border-slate-800 py-2 w-full select-none outline-none'/>
                    </div>
                    
            <div className=' block pt-3'>
               <button className=' w-full bg-green-800 text-white font-semibold py-2 rounded-md text-center capitalize'>finish payment</button>
            </div>
            </div>
             </div>
        </div>
      </form>
    )
}

export default Payform 
