'use client'
import React from 'react'

const Navbar = () => {
  return (
  <div className='flex justify-between border border-b-gay-200 min-h-20'>
    <span className='m-5 flex justify-center items-center'>
        <img className=' object-contain ' width={'163'} src='https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png'/>
    </span>
    <button className=' border-gray-200 border-2 rounded-md flex justify-center items-center gap-2 p-1 m-5 h-10 '>
    <img className='h-8'  src='https://cdn-icons-png.flaticon.com/512/3607/3607444.png' />
    <p className=' font-bold'>Rahil Siddique</p>
  </button>
  </div>
  )
}

export default Navbar