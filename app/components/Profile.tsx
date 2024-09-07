import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import image from "../assets/Mask Group.png"

const Profile = () => {
    return (
        <div className="flex min-w-10 min-h-10 items-center space-x-4 bg-white rounded-lg shadow-sm">
            <div className="h-10 w-10">
                <Image className="flex h-full w-full items-center justify-center rounded-full bg-muted" src={image} alt="Admirra John" />
            </div>
            <div className="flex-grow hidden md:inline ">
                <h2 className=" text-sm lg:text-base font-semibold text-nowrap text-[#161E54]">Admirra John</h2>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-6 ml-0 w-6 p-0 space-x-0 ">
                        <ChevronDown className="h-6 w-6 text-[#737898]" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Profile
