"use client";
import React, { useState } from 'react'
import { Bell, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Notification = () => {
    const [notifications, setNotifications] = useState<string[]>([
        'This is a new notification',
        'Another notification',
        'More notifications',
        'Yet another notification',
      ]);
      const removeNotification = (index: number) => {
        setNotifications(notifications.filter((_, i) => i !== index));
      };
    
      const clearAllNotifications = () => {
        setNotifications([]);
      };
  return (
    <div>
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className='relative'>
              <Bell className="h-6 w-6 text-[#B2B2B2] " fill='#B2B2B2' />
              {
                notifications.length > 0 ? <span className=' absolute top-[3px] right-[8px] w-3 h-3 bg-[#FF5151] rounded-full  border-2 border-white '></span> : null
              }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[300px] rounded-md " align="end">
            <div className=' w-full min-h-80 p-4 border rounded-sm flex flex-col justify-between items-center bg-[#f0f0f0] '>
                <div className=' w-full h-full flex flex-col justify-start items-center gap-2 '>
                    {
                        !notifications.length && <span className=' text-base text-center '>
                            No notifications
                        </span>
                    }
                { notifications && notifications.map((notification, index) => (
                <NotificationCapsule
                  key={index}
                  text={notification}
                  onClose={() => removeNotification(index)}
                />
              ))}
                </div>
                <div className=' w-full rounded-b-sm rounded-t-none border border-t pt-4 flex justify-center items-center gap-4 '>
                    <Button variant='default' className=' w-full h-full bg-[#FF5151] '>
                        View All
                    </Button>
                    <Button variant='secondary' className=' w-full h-full ' onClick={clearAllNotifications} >
                        Clear All
                    </Button>
                </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Notification

interface NotificationCapsuleProps {
    text: string;
    onClose: () => void;
}
function NotificationCapsule({ text, onClose }: NotificationCapsuleProps): React.JSX.Element {
    return (
        <div className=' w-full h-full rounded-md border border-gray-800 bg-gray-200 px-2 py-1 text-base flex justify-between items-center'>
            <div className=' flex justify-center items-center gap-2'>
                <div className=' w-3 h-3 rounded-full bg-[#FF5151] '></div>
                <span className='text-sm'>{text}</span>
            </div>
            <Button variant='ghost' className=' bg-transparent text-black '  onClick={onClose} >
            <X className=' w-4 h-4 ' />
            </Button>
        </div>
    )
}