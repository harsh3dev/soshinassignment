import React from 'react'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Chat from './Chat'
import Profile from './Profile'

const Navbar = () => {
    return (
        <header className=' w-full min-h-14 px-8 md:px-14 py-6 md:min-h-20 border-b flex justify-between items-center gap-8 '>
            <SearchBar/>
            <div className=' flex justify-between items-center gap-8 min-w-36 sm:min-w-56 md:min-w-80 '>
                <Notification/>
                <Chat/>
                <Profile/>
            </div>
        </header>
    )
}

export default Navbar
