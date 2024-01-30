import React from 'react'

function AllProductslinks() {
  return (
    <div className=' pt-12 cursor-pointer ease-in-out duration-1000'>

    <div className=' w-1/6 left-1/2 px-2 bg-black fixed text-white py-6 rounded-b-lg font-semibold'>
      <div>
        
        <a href="/all-products/#men">
          <h1 className='hover:text-orange-600 cursor-pointer py-3'>Men clothes & shoes</h1>
        </a>
        <a href="/all-products/#women">
          <h1 className='hover:text-orange-600 cursor-pointer py-3'>Women clothes & shoes</h1>
        </a>
        <a href="/all-products/#trends">
          <h1 className='hover:text-orange-600 cursor-pointer py-3'>Fashion wears</h1>
        </a>
        <a href="/all-products/#sport">
          <h1 className='hover:text-orange-600 cursor-pointer py-3'>Sport shoes</h1>
        </a>
        
      </div>
    </div>
    </div>
  )
}

export default AllProductslinks
