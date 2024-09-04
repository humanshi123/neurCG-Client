"use client";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; 
import Logo from "@/assets/images/logo.png"
import Link from "next/link";
import { AudioIcon, HomeIcon, ProfileIcon, ProjectsIcon, ReferIcon, TextIcon, VideoIcon, MenuIcon, ToggleClose} from "@/utils/svgIcons"; // Import Hamburger and Close icons
import Image from "next/image";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
  const pathname = usePathname(); 

  const isActive = (path: string) => pathname === path ? 'active' : '';

  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar open/close

  const handleLinkClick = (path: string) => {
    // setActiveLink(path);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden'); // Prevent scrolling when sidebar is open
    } else {
      document.body.classList.remove('overflow-hidden'); // Re-enable scrolling when sidebar is closed
    }

    // Clean up the effect when the component unmounts or isOpen changes
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);


  return (
    <div className="side-bar z-20 relative overflo-custom h-[100%] overflow-y-scroll flex md:flex-col justify-between">
      {/* Hamburger Menu */}
      <div className="md:hidden">
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
      <button 
        className="block md:hidden" 
        onClick={toggleSidebar}
      >
        {isOpen ? <ToggleClose /> : <MenuIcon />} {/* Show Close icon when open, Hamburger when closed */}
      </button>

      {/* Sidebar */}
      <div className={`fixed  lg:relative top-0 left-0 w-[262px] h-full bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="pl-[30px] pt-[74px] md:pt-[38px] ">
          <ul className="navList">
            <li className={isActive('/home-page')}>
              <Link href="/home-page"
                onClick={() => handleLinkClick("/home-page")}
               >
                <HomeIcon/>
                <span>Home</span>
              </Link>
            </li>
            <li className={isActive('/my-projects')}>
              <Link href="/my-projects"  onClick={() => handleLinkClick("/my-projects")}>
                <ProjectsIcon />
                <span>My Projects</span>
              </Link>
            </li>
            <p className="text-[#818999] text-[10px] font-medium mt-5 mb-[2px] pl-5">SERVICES</p>
            <li className={isActive('/text-photo')}>
              <Link href="/text-photo"  onClick={() => handleLinkClick("/text-photo")}>
                <TextIcon />
                <span>Text & Photo</span>
              </Link>
            </li>
            <li className={isActive('/audio-photo')}>
              <Link href="/audio-photo"  onClick={() => handleLinkClick("/audio-photo")}>
                <AudioIcon />
                <span>Audio & Photo</span>
              </Link>
            </li>
            <li className={isActive('/video-translation')}>
              <Link href="/video-translation"  onClick={() => handleLinkClick("/video-translation")}>
                <VideoIcon />
                <span>Video Translation</span>
              </Link>
            </li>
            <p className="text-[#818999] text-[10px] font-medium mt-5 mb-[2px] pl-5">Other</p>
            <li className={isActive('/refer')}>
              <Link href="/refer"  onClick={() => handleLinkClick("/refer")}>
                <ReferIcon />
                <span>Refer</span>
              </Link>
            </li>
            <li className={isActive('/my-profile')}>
              <Link href="/my-profile" onClick={() => handleLinkClick("/my-profile")}>
                <ProfileIcon />
                <span>My Profile</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-[50px] mx-[30px]">
          <button className="w-full px-5 h-[50px] py-[10px] text-[#e87223] text-base font-medium bg-white rounded-lg border border-[#e87223]">
            UPGRADE PLAN
          </button>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1] bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
        
      )}
    </div>
  );
};

export default SideBar;
