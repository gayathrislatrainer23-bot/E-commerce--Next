'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModel from "./CartModel";

const NavIcons = ()=>{
    const [isProfileOpen,setIsProfileOpen]= useState(false)
    const [isCartOpen,setIsCartOpen]= useState(false)
    const handleProfile =()=>{
setIsProfileOpen(!isProfileOpen)
    }
    return(
        <div className="flex items-center gap-4 relative">
<Image src="/profile.png" alt="profile pic"width={22} height={22} className="cursor-pointer" onClick={handleProfile} />
{isProfileOpen && <div className="absolute p-4  top-10 left-0 text-sm rounded-md  shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)]">
    <Link href='/'>Profile</Link>
    <div className="cursor-pointer">
        Logout
    </div>
</div> }
<Image src="/notification.png" alt="notification pic"width={22} height={22} className="cursor-pointer" />
<div className="relative">

<Image src="/cart.png" alt="cart pic"width={22} height={22} className="cursor-pointer" onClick={()=> setIsCartOpen((prev)=>!prev)} />
<div className="absolute -top-4 -right-4 w-5 h-5 text-xs bg-[rgb(235,9,5)] text-white rounded-full flex justify-center items-center" >1</div>
{
    isCartOpen && 
<CartModel/>
}
</div>
        </div>
    )
}
export default NavIcons;