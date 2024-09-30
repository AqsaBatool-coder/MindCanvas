"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown((prev) => !prev);
    };


    return (
      <header className="flex w-full items-center justify-between lg:px-[100px] md:px-[40px] px-[16px] bg-primary-light h-[80px] sticky top-0 z-[10]">
        <Link href='/'><p className="md:text-2xl text-xl text-black text-primary font-bold text-nowrap">Mind Canvas</p></Link>
        <div className="relative">
            <Image  onClick={toggleDropdown} src='/images/user-avatar-icon.png' alt='user' height={40} width={40} className=" rounded-full border-[2px] border-primary" />
            {showDropdown && (
            <div className="absolute flex flex-col items-center right-[-4px] mt-2 w-[200px] bg-white shadow-lg rounded-md p-4">
              <p className="text-sm px-4 py-2">Username: <small className="font-bold">Aqsa</small></p>
              <p className="text-sm">Email: <small className="font-bold">aqsa@gmail.com</small></p>
              <button
                className="mt-[20px] lg:px-[20px] px-[15px] md:h-[35px] h-[30px] flex items-center bg-primary text-sm text-white rounded font-bold box-shadow-md text-nowrap"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
  