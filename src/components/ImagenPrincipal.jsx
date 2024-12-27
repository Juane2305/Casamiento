import React from 'react'
import arrow from '../assets/white-arrow.svg'

const ImagenPrincipal = () => {
  return (
    <div className='h-screen'>
        <div className='flex md:hidden bg-fondo-save bg-center bg-no-repeat bg-cover bg-fixed'>
            <div className='flex h-screen w-full justify-center items-end'>
                <img src={arrow} alt="" className='size-16 text-white animate-pulse mb-10'/>
            </div>
        </div>
        <div className='hidden md:flex bg-fondo-save-desk bg-center bg-no-repeat bg-cover'>
            <div className='flex h-screen w-full justify-center items-end'>
                <img src={arrow} alt="" className='size-16 text-white animate-pulse mb-5'/>
            </div>
        </div>
    </div>
  )
}

export default ImagenPrincipal
