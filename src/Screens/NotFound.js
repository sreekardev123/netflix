import React from 'react'
import {Link} from "react-router-dom"
import { BiHomeAlt } from "react-icons/bi";

import errorimage from "../assets/errorimage.png"

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img 
      className='w-full h-96 object-contain'
      src={errorimage}
      alt='not found' 
      />

      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The Page you are looking for does not exist . You may have mistyped the URL
      </p>
       <Link 
      to="/"
       className='bg-subMain transition text-white gap-4 flex-rows font-medium py-3 hover:text-main px-6 rounded-md'>
        <BiHomeAlt /> Back Home
      </Link> 
   

    </div>
  )
}

export default NotFound;