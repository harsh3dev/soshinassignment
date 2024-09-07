"use client";
import React from 'react'
import Navbar from './Navbar'
import MainDashboard from './MainDashboard'
import { useSidebar } from '@/lib/utils/SidebarContext'
import { cn } from '@/lib/utils'

const Dashboard = () => {
    const {expanded, isOpen} = useSidebar();
    return (
        <div className={cn(' w-full min-h-screen flex flex-col justify-start items-start', "sm:ml-28 md:ml-56", expanded && "sm:ml-56")}>
            <Navbar/>
            <div className=' flex flex-col w-full h-full justify-normal items-start md:pl-4 '>    
                <h1 className=' font-semibold text-left text-2xl w-full text-[#161E54] pl-4 sm:pl-6 mt-5 '> Dashboard </h1>
                <MainDashboard/>
            </div>
        </div>
    )
}

export default Dashboard
