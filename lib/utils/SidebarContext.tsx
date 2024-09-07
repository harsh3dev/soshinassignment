"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from 'react';

interface SidebarContextProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  expanded: false,
  setExpanded: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;
      setExpanded(isLargeScreen);
      const isMobile = window.matchMedia('(max-width: 425px)').matches;
      if (isMobile) {
        setExpanded(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
