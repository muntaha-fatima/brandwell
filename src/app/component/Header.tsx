"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Left Side: Mobile Menu + Logo */}
      <div className="flex items-center space-x-3">
        {/* Mobile Menu Trigger - left aligned */}
        <div className="md:hidden mr-2">
         <Sheet>
  <SheetTrigger asChild>
    <button className="p-2">
      <Menu className="w-6 h-6 text-blue-500 " />
    </button>
  </SheetTrigger>
  
  {/* 👇 Add side="left" here */}
  <SheetContent side="left">
    <ul className="mt-6 space-y-4 text-black-300 font-medium">
      <li><Link href="/" className="hover:text-orange-500">HOME</Link></li>
      <li><Link href="/Categories" className="hover:text-orange-500">CATEGORIES</Link></li>
      <li><Link href="/stores" className="hover:text-orange-500">STORES</Link></li>
    </ul>
  </SheetContent>
</Sheet>
        </div>

        {/* Logo + Brand Name */}
        <Image
          src="/image/Logo-ATT.png"
          alt="logo"
          width={100}
          height={50}
          className="h-auto w-24"
        />
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
          BRANDWELL
        </h1>
      </div>

   <div className="hidden md:flex flex-1 justify-center">
  <nav className="flex items-center gap-6 text-sm font-light text-gray-700">
    <Link href="/" className="hover:text-orange-500">HOME</Link>
    <Link href="/Categories" className="hover:text-orange-500">CATEGORIES</Link>
    <Link href="/stores" className="hover:text-orange-500">STORES</Link>
  </nav>
</div>


      {/* Right Side: Search Input */}
      <div className="flex items-center mt-3 md:mt-0 w-full md:w-auto justify-between">
        <input
          type="text"
          placeholder="🔍  Find coupons, stores or deals..."
          className="w-full md:w-[450px] h-full md:h-[44px] px-4 py-2 bg-gray-100 border border-gray-100 rounded-lg text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
      </div>
    </header>
  );
}
