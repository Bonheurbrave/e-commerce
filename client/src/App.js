import React, { useEffect, useState } from 'react'
import Loader from './pages/Loader'
import {Routes, Route } from 'react-router-dom'
import Navigation from './pages/Navigation'
import AllProductslinks from './pages/AllProductslinks'
import HomePage from './pages/HomePage'
import Productspages from './pages/Productspages'
import Footer from './pages/Footer'
import Payform from './pages/Payform '
import WomenProducts from './pages/WomenProducts'
import Cartpage from './pages/Cartpage'
import Menproductspage from './pages/Menproductspage'
function App() {
  const [item , setitem ] = useState([]);
  const [loader , setloader] =  useState(true);
  useEffect(()=>{

    const fetchfakedata = ()=>{
      setTimeout(() => {
        setloader(false)
      }, 1500);
    } 
    fetchfakedata();
  } ,[])

  return (
    <>
    {
      loader ? <Loader />:
      <div className=' select-none ease-in-out duration-1000 scroll-smooth'>
      <Navigation />
      <Routes >
        <Route path='/' element={<HomePage />}/>
        <Route path='/carting-page' element={<Cartpage item={item} setitem={setitem}/>}/>
        <Route path='/women-products' element={<WomenProducts />}/>
        <Route path='/payform' element={<Payform  item={item} setitem={setitem}/>}/>
        <Route path='/all-products' element={<Productspages item={item} setitem={setitem}/>}/>
        <Route path='/men-products' element={<Menproductspage />} />
      </Routes>
      <Footer />
    </div>
    }
    </>
  )
}

export default App
