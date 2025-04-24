import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const featureDestination = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-10 lg:px-16 bg-slate-50 py-20'>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=> (
            <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  )
}

export default featureDestination
