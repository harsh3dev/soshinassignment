import React from 'react'
import Navbar from './Navbar'
import MainDashboard from './MainDashboard'

const Dashboard = () => {
    return (
        <div className=' w-full min-h-screen flex flex-col justify-start items-start '>
            <Navbar/>
            <h1 className=' font-semibold text-left text-2xl w-full text-[#161E54] pl-4 sm:pl-8 mt-5 '> Dashboard </h1>
            <MainDashboard/>
        </div>
    )
}

export default Dashboard
