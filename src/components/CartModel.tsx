'use client'

import Image from "next/image";

const CartModel = ()=>{
    let cartItem= true;
    return(
        <div className="w-max absolute p-4  top-12 right-0 text-sm rounded-md  shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] flex flex-col">
{
    !cartItem ? (
<div className="">Cart is Empty</div>
    ):(
        <div className="flex flex-col gap-4">
            <h2 className="text-xl">Shopping Cart</h2>
            {/* item */}
            <div className="flex  gap-8">
            <Image src="https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg" alt='img' width={72} height={96} className="object-cover"/>
            <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                    {/* title */}
                    <div className="flex gap-12 items-center justify-between ">
                        <h3 className="font-semibold">Product Name</h3>
                        <div className="p-1 b-g-gray-50 rounded-sm">$49</div>
                    </div>
                    {/* disc */}
                    <div className="text-sm text-gray-500">
                        <span>available</span>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty: 2</span>
                    <span className="text-blue-500">Remove</span>
                </div>
            </div>
        </div>
            <div className="flex  gap-8">
            <Image src="https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg" alt='img' width={72} height={96} className="object-cover"/>
            <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                    {/* title */}
                    <div className="flex gap-12 items-center justify-between ">
                        <h3 className="font-semibold">Product Name</h3>
                        <div className="p-1 b-g-gray-50 rounded-sm">$49</div>
                    </div>
                    {/* disc */}
                    <div className="text-sm text-gray-500">
                        <span>available</span>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty: 2</span>
                    <span className="text-blue-500">Remove</span>
                </div>
            </div>
        </div>
        {/*  */}
        <div className="">
            <div className="flex justify-between">

            <span className="font-semibold">Subtotal</span>
               <div className="p-1 b-g-gray-50 rounded-sm">$49</div>
            </div>
            <p className="text-sm mt-2 mb-4">shipping annd taxes calculated at checkout</p>
            <div className="flex justify-between items-center text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">View Cart</button>
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 bg-black text-white">Checkout</button>
    
            </div>
        </div>
          
        </div>
    )
}

        </div>
    )
}
export default CartModel; 