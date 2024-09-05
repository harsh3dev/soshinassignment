"use client"
import { useState } from 'react'
import { ChevronDown, MoreHorizontal, Pin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const initialAnnouncementData = {
  today: [
    { id: 1, title: "Outing schedule for every departement", time: "5 Minutes ago", pinned: true },
    { id: 2, title: "Meeting HR Department", time: "Yesterday, 12:30 PM", pinned: false },
    { id: 3, title: "IT Department need two more talents for UX/UI Designer position", time: "Yesterday, 09:15 AM", pinned: false },
    { id: 4, title: "New project kickoff meeting", time: "1 Hour ago", pinned: true },
    { id: 5, title: "Lunch and Learn session on AI", time: "2 Hours ago", pinned: false },
    { id: 6, title: "Reminder: Submit weekly reports", time: "3 Hours ago", pinned: false },
    { id: 7, title: "Office maintenance scheduled for weekend", time: "4 Hours ago", pinned: false },
  ],
  yesterday: [
    { id: 8, title: "Company-wide meeting", time: "1 day ago", pinned: true },
    { id: 9, title: "New project kickoff", time: "1 day ago", pinned: false },
    { id: 10, title: "Team building event planning", time: "1 day ago", pinned: false },
    { id: 11, title: "Quarterly performance reviews start", time: "1 day ago", pinned: true },
    { id: 12, title: "New coffee machine in break room", time: "1 day ago", pinned: false },
  ],
  lastWeek: [
    { id: 13, title: "Quarterly review", time: "5 days ago", pinned: true },
    { id: 14, title: "Team building event", time: "6 days ago", pinned: false },
    { id: 15, title: "New client onboarding", time: "6 days ago", pinned: true },
    { id: 16, title: "Software update required", time: "7 days ago", pinned: false },
    { id: 17, title: "Holiday schedule announced", time: "7 days ago", pinned: true },
  ],
}

export default function AnnouncementComponent() {
  const [selectedDate, setSelectedDate] = useState('today')
  const [expanded, setExpanded] = useState(false)
  const [announcementData, setAnnouncementData] = useState(initialAnnouncementData)

  const formatDate = (date : Date | number ) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' } as const
    return new Date(date).toLocaleDateString('en-US', options)
  }

  const getDateString = () => {
    const today = new Date()
    switch (selectedDate) {
      case 'today':
        return `Today, ${formatDate(today)}`
      case 'yesterday':
        return `Yesterday, ${formatDate(today.setDate(today.getDate() - 1))}`
      case 'lastWeek':
        return `Last Week, ${formatDate(today.setDate(today.getDate() - 7))}`
    }
  }

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const togglePin = (id:number) => {
    setAnnouncementData(prevData => {
      const newData = { ...prevData }
      const category = Object.keys(newData).find(key => 
        newData[key as keyof typeof newData].some(item => item.id === id)
      )
      
      if (category) {
        const itemIndex = newData[category as keyof typeof newData].findIndex(item => item.id === id)
        const updatedItem = { ...newData[category as keyof typeof newData][itemIndex], pinned: !newData[category as keyof typeof newData][itemIndex].pinned }
        
        newData[category as keyof typeof newData] = [
          ...newData[category as keyof typeof newData].filter(item => item.id !== id),
        ]

        if (updatedItem.pinned) {
          newData[category as keyof typeof newData].unshift(updatedItem)
        } else {
          const insertIndex = newData[category as keyof typeof newData].findIndex(item => !item.pinned)
          if (insertIndex === -1) {
            newData[category as keyof typeof newData].push(updatedItem)
          } else {
            newData[category as keyof typeof newData].splice(insertIndex, 0, updatedItem)
          }
        }
      }
      
      return newData
    })
  }

  const displayedAnnouncements = expanded
    ? announcementData[selectedDate as keyof typeof announcementData]
    : announcementData[selectedDate as keyof typeof announcementData].slice(0, 3)

  return (
    <div className=" w-full rounded-lg shadow-sm border border-[#E0E0E0] ">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold text-[#161E54]">Announcement</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-[#686868] border border-[#EFEFEF] text-sm">
              {getDateString()} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=' text-xs font-normal '>
            <DropdownMenuItem onClick={() => setSelectedDate('today')}>Today</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedDate('yesterday')}>Yesterday</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedDate('lastWeek')}>Last Week</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="divide-y w-full flex flex-col justify-normal gap-2 p-2 px-4 ">
        {displayedAnnouncements.map((announcement) => (
          <div key={announcement.id} className="flex items-center justify-between p-4 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg ">
            <div className="flex-grow">
              <h3 className="text-base font-medium text-[#303030]">{announcement.title}</h3>
              <p className="text-sm text-[#686868]">{announcement.time}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={announcement.pinned ? "text-[#686868]" : "text-[#B2B2B2]"}
                onClick={() => togglePin(announcement.id)}
              >
                <Pin className="h-5 w-5" fill={`${announcement.pinned ? "#686868" : "#B2B2B2"}`} />
                <span className="sr-only">{announcement.pinned ? "Unpin" : "Pin"} announcement</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-[#B2B2B2]">
                <MoreHorizontal className="h-5 w-5" />
                <span className="sr-only">More options</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full text-[#ff5a5f] hover:text-[#ff5a5f] hover:bg-transparent"
          onClick={toggleExpand}
        >
          {expanded ? "Minimize" : "See All Announcement"}
        </Button>
      </div>
    </div>
  )
}