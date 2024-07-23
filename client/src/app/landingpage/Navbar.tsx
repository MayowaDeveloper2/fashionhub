'use client';

import { useState } from "react";
import Image from "next/image";
import fashionhubnavlogo from "../images/fashion hub new logo.png";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { CloseRounded } from "@mui/icons-material";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="w-full fixed bg-white  h-[50px] z-50 justify-between items-center flex lg:pt-[0px] px-10">
                <div className="flex cursor-pointer">
                    <Image className="w-[120px] h-[40px]" src={fashionhubnavlogo} alt="fashion" />
                </div>
                <div className="hidden md:hidden lg:flex">
                    <ul className="flex text-black cursor-pointer gap-3">
                        <li>About</li>
                        <li>Community Guidelines</li>
                        <li>Support</li>
                        <li>Download</li>
                    </ul>
                </div>
                <div className="hidden md:hidden lg:flex items-center gap-3">
                    <div className="text-black">Sign up</div>
                    <button className="border-2 text-customBlue font-bold cursor-pointer rounded-3xl border-customBlue px-3 py-1">Log in</button>
                </div>
                <div className="lg:hidden" onClick={handleToggle}>
                    {isOpen ? <CloseRounded className="text-customPurple" /> : <DragHandleIcon className="text-customPurple" />}
                </div>
            </nav>
            {isOpen && (
                <div className="lg:hidden fixed top-12 bg-white w-full h-[screen] z-40 flex flex-col ">
                    <ul className="flex flex-col text-black gap-3 p-3 cursor-pointer ml-6">
                        <li onClick={handleToggle}>About</li>
                        <li onClick={handleToggle}>Community Guidelines</li>
                        <li onClick={handleToggle}>Support</li>
                        <li onClick={handleToggle}>Download</li>
                    </ul>
                    <div className="flex flex-row p-3 gap-3 ml-6">
                        <button onClick={handleToggle} className="border-2 text-customBlue font-bold cursor-pointer rounded-3xl border-customBlue px-3 py-1">Sign up</button>
                        <button onClick={handleToggle} className="border-2 text-customBlue font-bold cursor-pointer rounded-3xl border-customBlue px-3 py-1">Log in</button>
                    </div>
                </div>
            )}
        </>
    );
}
