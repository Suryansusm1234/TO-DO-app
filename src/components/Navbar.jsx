import React from 'react'
import image from '../assets/Fav icon.svg'
import '../index.css'

function Navbar() {
  return (
    <div className='navback'>
        <div>

        <img className='max-w-20 inline ' src={image} alt="" />
        <span className='p-10 font-semibold'>Helper- A light TO-DO</span>
        </div>
      <nav className=' flex justify-items-center all-center gap-6 p-20 '>
      
        <ul className='list-none flex justify-center gap-6 items-center p-10  '>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'><a href="https://github.com/Suryansusm1234/TO-DO-app.git">Source code</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
