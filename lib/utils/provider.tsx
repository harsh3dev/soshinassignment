import React from 'react'
import { SidebarProvider } from "@/lib/utils/SidebarContext";

const Provider = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default Provider
