import React, { useEffect, useState } from 'react'

function Cartpage({item , setitem}) {
  const [showitem , setshowitem] = useState(false);
  useEffect(()=>{

    console.log(item)

    if(item.length >=0){
    setshowitem(false)
  }else {
    setshowitem(true)
  }
})
  return (
    <> 
  {
  showitem ? 
  
  <div  className=' pt-12 pb-6 px-8 mx-auto w-1/4'>
      <h1 className=' pt-4 text-3xl font-bold text-slate-950 '>Cart page</h1>
    <h1 className=' font-semibold  text-slate-800 text-2xl py-2'> Your cart is empty</h1>
    <a href="/product-page"><button className=' py-1 hover:bg-transparent ease-in-out duration-500 px-12 border-2 border-slate-700 bg-green-700 rounded-md text-center '>shop now</button></a>
  </div>
     :
  <div className=' py-10'>
    {item.map((prod)=>{
      return (
        <div>
          <h1>{prod.name}</h1>
        </div>
      )
    })}
  </div>
  }
    </>
  )
}

export default Cartpage
