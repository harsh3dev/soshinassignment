"use client";
import React, { useEffect, useRef } from 'react'
import SideBarComponent from './SideBarComponent'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/lib/utils/SidebarContext'


const MobileSideBar = () => {
    const {isOpen, setIsOpen} = useSidebar();
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    
    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <motion.div
                    ref={sidebarRef}
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn('fixed top-0 left-0 w-fit h-full bg-white z-50 shadow sm:hidden')}
                >
                    <SideBarComponent />
                </motion.div>
            )}
        </>
    )
}

export default MobileSideBar;
