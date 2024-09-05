import { Button } from '@/components/ui/button'
import React from 'react'
import ActivityDashboard from './ActivityDashboard'
import img1 from '@/app/assets/2.svg'
import img2 from '@/app/assets/5.svg'
import Image from 'next/image'
import AnnouncementComponent from './AnnouncementComponent'

const ColoredCardData = [
    {
        title: 'Available Position',
        value: '24',
        bgColor: '#FFEFE7',
        alertColor: '#FF5151',
        textColor: '#161E54',
        alert: '4 Urgently needed'
    },
    {
        title: 'Job Open',
        value: '10',
        bgColor: '#E8F0FB',
        alertColor: '#3786F1',
        textColor: '#161E54',
        alert: '4 Active hiring'
    },
    {
        title: 'New Employees',
        value: '24',
        bgColor: '#FDEBF9',
        alertColor: '#EE61CF',
        textColor: '#161E54',
        alert: '4 Department'
    },
]

const ChartCardsData = [
    {
        title: 'Total Employees',
        value: '216',
        change: '+2% Past month',
        men: '120 Men',
        women: '96 Women',
        image: img1,
    },
    {
        title: 'Talent Request',
        value: '16',
        change: '+5% Past month',
        men: '6 Men',
        women: '10 Women',
        image: img2,
    },
]


const MainDashboard = () => {
    return (
        <div className=' w-full min-h-screen grid grid-cols-1 md:grid-cols-3 p-4 sm:pl-5 sm:px-8 sm:py-5 sm:mr-5 gap-4 ' >
            <div className=' md:col-span-2 h-full '>
                <div className=' mx-auto w-full h-full flex flex-col justify-start items-start gap-5 '>
                    <div className=' w-full grid sm:grid-cols-3 md:grid-cols-3 gap-4 '>
                        {
                            ColoredCardData.map((card, index) => (
                                <ColoredCard key={index} {...card} />
                            ))
                        }
                    </div>
                    <div className=' w-full grid sm:grid-cols-2 md:grid-cols-2 gap-4 '>
                        {
                            ChartCardsData.map((card, index) => (
                                <ChartCards key={index} {...card} />
                            ))
                        }
                    </div>
                    <AnnouncementComponent/>
                </div>
            </div>
            <div className=' md:col-span-1 h-full '>
            <div className=' mx-auto w-full h-full place-content-start grid sm:max-md:grid-cols-2 gap-5 '>
                <RecentActivityCard/>
                <ActivityDashboard/>
            </div>
            </div>
        </div>
    )
}

export default MainDashboard

function ChartCards ({title, value, change, men, women, image} : {title: string, value: string, change:string, men:string, women:string, image: any}) {
    return (
        <div className=' w-full h-fit p-4 gap-5 text-left flex justify-around items-center border border-[#E0E0E0] rounded-lg '>
            <div className=' h-full flex flex-col justify-between items-start gap-6 '>
                <h1 className=' text-xl font-semibold text-[#161E54]   ' >
                    {title}
                </h1>
                <h2 className=' text-5xl font-medium text-[#161E54]   ' >
                    {value}
                </h2>
                <div className=' w-full flex flex-col justify-start items-start gap-1 text-xs font-normal text-[#686868] '>
                    <span>{men}</span>
                    <span>{women}</span>
                </div>
            </div>
            <div className=' h-full flex flex-col justify-center items-center gap-4 '>
                <Image src={image} alt='chart' />
                <span className=' px-2 py-1 rounded-md bg-[#FFEFE7] text-center text-[#303030] text-xs font-normal '>
                    {change}
                </span>
            </div>
        </div>
    )
}


interface ColoredCardProps {
    title: string;
    value: string;
    bgColor: string;
    alertColor: string;
    textColor: string;
    alert: string;
}

const ColoredCard = ({title, value, alert, bgColor, alertColor, textColor} : ColoredCardProps) : React.JSX.Element => {
    return (
        <div className={` min-h-36 w-full rounded-lg text-left px-6 py-4 flex flex-col justify-between items-start gap-4 `}
        style={{backgroundColor: bgColor}}
        >
            <span className={` font-semibold text-lg md:text-xl   `}
            style={{color: textColor}}
            >
                {title}
            </span>
            <span className={` font-semibold text-3xl md:text-4xl  `}
            style={{color: textColor}}
            >
                {value}
            </span>
            <span className={` font-medium text-base  `}
            style={{color: alertColor}}
            >
                {alert}
            </span>

        </div>
    )
}

const RecentActivityCard = () => {
    return (
        <div className="bg-[#161E54] text-white rounded-lg w-full max-md:max-h-[320px] sm:h-fit ">
            <h2 className="text-xl font-medium w-full p-4 pl-6 bg-[#1B204A] rounded-t-lg  ">Recently Activity</h2>

            <div className=' w-full flex flex-col justify-between items-start gap-4 p-6 -mt-2 '>
                <div className=' w-full flex flex-col justify-normal items-start  '>
                    <p className="text-xs text-gray-400 mb-2">10:45 AM, 15 Sept 2023</p>
                    <h3 className="text-lg font-semibold mb-2">You Posted a New Job</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Kindly check the requirements and terms of work and make sure everything is right.
                    </p>
                </div>
                <div className="flex justify-between items-center w-full mb-2 ">
                    <p className="text-sm">Today you makes 12 Activity</p>
                    <Button className="bg-[#ff5a5f] hover:bg-[#ff7b7f] text-white text-xs py-1 px-3 rounded">
                        See All Activity
                    </Button>
            </div>

            </div>
        </div>
        )
}