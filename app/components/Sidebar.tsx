"use client"
import { useContext, createContext, useState, useEffect } from "react"
import { SidebarContext, useSidebar } from "@/lib/utils/SidebarContext"
import Image from "next/image"
import logo_min from "@/app/assets/Frame 88.svg"
import logo from "@/app/assets/Vasitum Logo (1) 1.svg"
import { cn } from "@/lib/utils"

export default function Sidebar({ children }: any) {
    const {expanded, isOpen, setIsOpen} = useSidebar();
    

    return (
        <aside className="h-screen fixed top-0 left-0 z-50">
            <nav className={cn("h-full  relative flex flex-col bg-white border-r shadow-sm ", expanded && " pr-8 px-4 ")}>
                <div className=" pb-2 flex justify-between items-center p-2 py-8 ">
                    <div
                        className={`overflow-hidden h-16 transition-all grid place-items-center `}
                    >
                        <Image src={logo} alt="logo" className={cn( expanded ?"visible w-full ":"invisible w-0 " ,"  ")} />
                        <Image src={logo_min} alt="logo" className={cn( expanded ?"invisible w-0 ":"visible w-full " ,"  ")} />
                    </div>
                </div>
                    <ul className={cn("flex-1 justify-normal gap-4 px-3", expanded ? " items-start " : "items-center " )}>{children}</ul>
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, active, alert=false }: any) {
    const {expanded} = useSidebar();

    return (
        <li
            className={`
            relative flex items-center py-2 pr-6 my-1 w-fit
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${active
                ? " text-[#FF5151]"
                : "hover:bg-indigo-50 text-gray-600"
            }
            ${expanded ? "w-full" : "pr-0" }
        `}
        >
            {icon}
            <span
                className={` transition-all  ${expanded ? "w-full ml-3" : "w-[0px] invisible opacity-0 " }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
                        }`}
                />
            )}

            {!expanded && (
                <div
                    className={`
                    absolute left-full rounded-md px-2 py-1 ml-6
                    bg-indigo-100 text-indigo-800 text-sm
                    invisible opacity-20 -translate-x-3 transition-all
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                `}
                >
                    {text}
                </div>
            )}
        </li>
    )
}