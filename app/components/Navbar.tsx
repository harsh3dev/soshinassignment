"use client"
import React from 'react'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Chat from './Chat'
import Profile from './Profile'
import { AlignJustify, PanelLeftClose } from 'lucide-react'
import { useSidebar } from '@/lib/utils/SidebarContext'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const {expanded, setExpanded, isOpen, setIsOpen} = useSidebar();
    return (
        <header className={cn(' w-full min-h-14 px-8 md:px-10 py-6 md:min-h-20 border-b flex justify-between items-center gap-8 ')}>
            <div className='flex justify-between md:justify-start items-center gap-4 '>
                <button
                    onClick={() => setIsOpen((!isOpen))}
                    className={cn("p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100  inline-block sm:hidden ")}
                >
                    {isOpen ? <AlignJustify /> : <AlignJustify className=" " /> }
                </button>
                <button
                    onClick={() => setExpanded((!expanded))}
                    className={cn("p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 hidden sm:max-md:block ")}
                >
                    {expanded ? <PanelLeftClose /> : <AlignJustify className=" " /> }
                </button>
                <SearchBar/>
            </div>
            <div className=' flex justify-between items-center gap-2 sm:gap-8 min-w-36 sm:min-w-56 md:min-w-80 '>
                <Notification/>
                <Chat/>
                <Profile/>
            </div>
        </header>
    )
}

export default Navbar
