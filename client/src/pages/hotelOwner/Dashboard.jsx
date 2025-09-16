import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData)
  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard' subtitle='Monitor your room listings, track bookings and analyze revenue-all in one place. stay updated with real time insights to ensure smooth operations.' />

      <div className="flex gap-4 my-8">
        {/* total bookings */}
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
            <img src={assets.totalBookingIcon} alt="total booking icon" className='max-sm:hidden h-10' />
            <div className="flex flex-col sm:ml-4 font-medium">
                <p className='text-blue-500 text-lg'>Total Bookings</p>
                <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
            </div>
        </div>

        {/* total revenue */}
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
            <img src={assets.totalRevenueIcon} alt="total revenue icon" className='max-sm:hidden h-10' />
            <div className="flex flex-col sm:ml-4 font-medium">
                <p className='text-blue-500 text-lg'>Total Revenue</p>
                <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
