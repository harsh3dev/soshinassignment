"use client";
import React, { useState } from 'react'
import { Bell, MessageSquare, Search, User, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchBar = () => {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded)
  }
    return (
        <div className=' flex justify-center items-center '>
            <div className=' hidden md:block relative w-[300px]  '>
                <Input
                    className=' bg-[#FAFAFA] border border-[#E0E0E0] p-4 rounded-sm w-full focus:outline-none active:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:ring-opacity-50'
                    placeholder='Search'
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B2B2B2] " size={20} />
            </div>
            <div className={`relative md:hidden block w-full md:w-0`}>
                <Input
                    type="search"
                    placeholder={isSearchExpanded ? "Search..." : ""}
                    className={`pl-10 pr-4 py-2 w-full  block transition-all ease-linear  ${isSearchExpanded ? 'opacity-100 w-full md:w-0 ' : 'opacity-0 w-0 md:w-0 '}`}
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute left-0 top-0 h-full ${isSearchExpanded ? 'md:pointer-events-none ' : ''}`}
                    onClick={toggleSearch}
                >
                    <Search className="h-6 w-6" />
                </Button>
                {isSearchExpanded && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full md:hidden"
                        onClick={toggleSearch}
                    >
                        <X className="h-6 w-6" />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default SearchBar
