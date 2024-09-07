"use client";
import React from 'react'
import Sidebar, { SidebarItem } from "./Sidebar";
import Image from "next/image";
import {CalendarIcon2, DashboardIcon, EmployeeIcon, DepartmentIcon, RecruitmentIcon, SettingIcon, SupportIcon} from "@/app/assets"
import { cn } from "@/lib/utils";
import { useSidebar } from "@/lib/utils/SidebarContext";
const sidebarMenu = [
	{
		category: "Main Menu", 
		items: [
			{
				icon: <Image src={DashboardIcon} alt="Dashboard Icon" />, // Placeholder for Dashboard icon
				text: "Dashboard",
				active: true,
				alert: false,
			},
			{
				icon: <Image src={RecruitmentIcon} alt="Recruitment Icon" />, // Placeholder for Recruitment icon
				text: "Recruitment",
				active: false,
				alert: false,
			},
			{
				icon: <Image src={CalendarIcon2} alt="Schedule Icon" />, // Placeholder for Schedule icon
				text: "Schedule",
				active: false,
				alert: false,
			},
			{
				icon: <Image src={EmployeeIcon} alt="Employee Icon" />, // Placeholder for Employee icon
				text: "Employee",
				active: false,
				alert: false,
			},
			{
				icon: <Image src={DepartmentIcon} alt="Department Icon" />, // Placeholder for Department icon
				text: "Department",
				active: false,
				alert: false,
			},
		],
	},
	{
		category: "Other",
		items: [
			{
				icon: <Image src={SupportIcon} alt="Support Icon" />, // Placeholder for Support icon
				text: "Support",
				active: false,
				alert: false,
			},
			{
				icon: <Image src={SettingIcon} alt="Settings Icon" />, // Placeholder for Settings icon
				text: "Settings",
				active: false,
				alert: false,
			},
		],
	},
] as const ;

const SideBarComponent = () => {
	const {expanded} = useSidebar();
	return (
		<Sidebar>
		{
			sidebarMenu.map((category, index) => (
			<div key={index} className={cn("flex flex-col justify-start items-start mt-5 gap-2", !expanded && "items-center px-2 ")}>
				<h1 className="text-[#686868] font-medium text-xs text-left  uppercase text-nowrap pt-2 mt-5 ">{category.category}</h1>
				{
				category.items.map((item, index) => (
					<SidebarItem key={`listitem_${index}`} {...item} />
				))
				}
			</div>
			))
		}
		</Sidebar>
	)
}
export default SideBarComponent