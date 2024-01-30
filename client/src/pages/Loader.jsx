import React from 'react'
import Lottie from 'lottie-react'
import loader from '../animations/loader.json'
function Loader() {
  return (
    <div className=' pt-52'>
      <Lottie animationData={loader} loop={true} className=' max-sm:w-3/4 w-1/4 mx-auto'/>
    </div>
  )
}

export default Loader
