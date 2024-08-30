"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Logo from "@/assets/images/logo.png";
import { useState } from "react";
import { NotificationIcon } from "@/utils/svgIcons";
import { usePathname } from 'next/navigation';

interface HeaderProps {
  creditsLeft: number;
  notificationsCount: number;
  userImage: string | StaticImageData;
}

const Header: React.FC<HeaderProps> = ({
  creditsLeft,
  notificationsCount,
  userImage,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const pathname = usePathname();

  const pageNames: { [key: string]: string } = {
    "/home-page": "Home",
    "/my-projects": "My Projects",
    "/profile": "Text & Photo",
    // Add more paths as needed
  };

  const currentPageName = pageNames[pathname] || "Home";

  return (
    <header className="flex justify-between items-center py-[23px] px-[30px] bg-white ">
      <div className="min-w-[232px] ">
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            height={100}
            width={200}
            className="max-w-[158px] "
          />
        </Link>
      </div>
      <div className="flex items-center justify-between w-full ">
        <h1 className="section-title">{currentPageName}</h1>

        <div className="flex items-center space-x-[30px]">
        <h3 className="bg-[#FFEEE2] font-[500] text-xs text-[#3A2C23] border border-[#FFE2CE] px-6 py-[9px] rounded-full">
            Credits left<span className="text-[#E87223] ml-[10px]">{creditsLeft}</span>
          </h3>
          <div className="relative flex">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              <NotificationIcon />
              {notificationsCount > 0 && (
                <span className="absolute top-0 right-[1px] inline-block w-[6px] h-[6px] text-[0] font-bold text-white bg-[#E87223] rounded-full"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1 text-sm text-gray-700">
                  <li className="px-4 py-2 border-b">Re: Support Case (#12221)<br/><span className="text-xs text-gray-500">5h ago</span></li>
                  <li className="px-4 py-2 border-b">Support Case (#12008)<br/><span className="text-xs text-gray-500">Yesterday</span></li>
                  <li className="px-4 py-2">Quam Dapibus Pharetra Bibendum<br/><span className="text-xs text-gray-500">Last week</span></li>
                </ul>
              </div>
            )}
          </div>



          <div className="overflow-hidden">
            <Image src={userImage} alt="User Profile" width={34} height={34} className="rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
