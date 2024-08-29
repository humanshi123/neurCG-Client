"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import Logo from "@/assets/images/logo.png"
import Link from "next/link";
import { AudioIcon, HomeIcon, ProfileIcon, ProjectsIcon, ReferIcon, TextIcon, VideoIcon } from "@/utils/svgIcons";
import Image from "next/image";

const SideBar = () => {

  const pathname = usePathname(); 

  const isActive = (path: string) => pathname === path ? 'active' : '';

  return (
    <div className="w-[262px] overflo-custom h-[100%] overflow-y-scroll flex flex-col justify-between">
      <div className="pl-[30px] pt-[38px] ">
        <ul className="navList">
          <li className={isActive('/home-page')}>
            <Link href="/home-page">
             <HomeIcon/>
             <span>Home</span>
            </Link>
          </li>
          <li className={isActive('/my-projects')}>
          <Link href="/my-projects">
              <ProjectsIcon />
              <span>My Projects</span>
            </Link>
          </li>
          <p className="text-[#818999] text-[10px] font-medium mt-5 mb-[2px] pl-5">SERVICES</p>
          <li className={isActive('/payment-request')}>
            <Link href="/payment-request">
              <TextIcon />
          <span>Text & Photo</span>
            </Link>
          </li>
          <li className={isActive('/payment-history')}>
            <Link href="/payment-history">
          <AudioIcon />
              <span>Audio & Photo</span>
            </Link>
          </li>
          <li className={isActive('/profile')}>
            <Link href="/profile">
            <VideoIcon />
              <span>Video Translation</span>
            </Link>
          </li>
          <p className="text-[#818999] text-[10px] font-medium mt-5 mb-[2px] pl-5">Other</p>
          <li className={isActive('/view-task')}>
            <Link href="/view-task">
            <ReferIcon />
             <span>Refer</span>
            </Link>
          </li>
          <li className={isActive('/view-task')}>
            <Link href="/view-task">
            <ProfileIcon />
             <span>My Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-[50px] mx-[30px]">
       <button className="w-full px-5 h-[50px] py-[10px] text-[#e87223] text-base font-medium bg-white rounded-lg border border-[#e87223]">UPGRADE</button>
      </div>
    </div>
  );
};

export default SideBar;
