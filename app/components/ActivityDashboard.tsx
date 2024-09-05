"use client"
import { useState } from 'react'
import { MoreHorizontal, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const scheduleData = {
    yesterday: [
        { title: "Review previous applications", time: "14:00 PM", priority: true },
        { title: "Team retrospective", time: "16:30 PM", priority: false },
    ],
    today: [
        { title: "Review candidate applications", time: "11:30 AM", priority: true },
        { title: "Interview with candidates", time: "10:30 AM", priority: false },
        { title: "Short meeting with product designer from IT Departement", time: "09:15 AM", priority: false },
    ],
    tomorrow: [
        { title: "Prepare interview feedback", time: "09:00 AM", priority: true },
        { title: "Project kickoff meeting", time: "11:00 AM", priority: false },
    ],
}

export default function ActivityDashboard() {
    const [selectedDate, setSelectedDate] = useState('today')

    const formatDate = (date: number | Date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' } as const;
        return new Date(date).toLocaleDateString('en-GB', options);
    }
    

    const getDateString = () => {
        const today = new Date()
        switch (selectedDate) {
        case 'yesterday':
            return `Yesterday, ${formatDate(today.setDate(today.getDate() - 1))}`
        case 'today':
            return `Today, ${formatDate(today)}`
        case 'tomorrow':
            return `Tomorrow, ${formatDate(today.setDate(today.getDate() + 1))}`
        }
    }

    return (
        <div className=" relative rounded-lg p-6 max-md:h-[320px] overflow-hidden border w-full border-[#E0E0E0] sm:max-w-md">
        <div className="flex justify-between w-full items-center mb-4">
            <h2 className=" text-base sm:text-lg font-medium w-full text-nowrap text-[#1c1f37]">Upcoming Schedule</h2>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="border border-[#EFEFEF] text-[#686868]  text-sm">
                {getDateString()} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedDate('yesterday')}>Yesterday</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedDate('today')}>Today</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedDate('tomorrow')}>Tomorrow</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <div className="space-y-4">
            {scheduleData[selectedDate as keyof typeof scheduleData].some(item => item.priority) && (
            <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Priority</h3>
                {scheduleData[selectedDate as keyof typeof scheduleData]
                .filter(item => item.priority)
                .map((item, index) => (
                    <ScheduleItem key={index} title={item.title} time={item.time} priority />
                ))
                }
            </div>
            )}

            <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Other</h3>
            {scheduleData[selectedDate as keyof typeof scheduleData]
                .filter(item => !item.priority)
                .map((item, index) => (
                <ScheduleItem key={index} title={item.title} time={item.time} />
                ))
            }
            </div>
        </div>

        <button className="w-full mt-4 bg-white text-[#ff5a5f] absolute bottom-0 left-0 text-base py-3 border-t border-[#E0E0E0] rounded-b-lg">
            Creat a New Schedule
        </button>
        </div>
    )
    }

    function ScheduleItem({ title, time, priority = false } : { title: string, time: string, priority?: boolean }) {
    return (
        <div className={`flex items-start p-4 border border-[#E0E0E0] bg-[#FAFAFA] rounded-lg mb-2`}>
        <div className="flex-grow">
            <h3 className="text-base font-medium text-[#1c1f37]">{title}</h3>
            <p className="text-sm text-gray-500">{time}</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
    )
    }