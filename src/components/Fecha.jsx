import React from 'react'
import calendar from '../assets/calendar.svg'

const Fecha = () => {
  return (
    <div>
        <div className='bg-[#EBDED4] h-72 flex flex-col justify-center items-center py-10'>
            <h1 className='mt-5 text-[2rem] font-thin'>¡Nos casamos!</h1>
            <img src={calendar} alt="" className='size-16'/>
            <h2 className='text-[2rem] pt-3 font-light' >Guarda la fecha</h2>
            <h2 className='text-[1.5rem] font-light'>6 de Abril a las 13:00hs.</h2>
            <h3 className='text-[1.5rem] font-light'>Salón Terra Oliva</h3>
        </div>
    </div>
  )
}

export default Fecha
