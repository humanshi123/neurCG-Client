import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/assets/images/logo.png"

const Header = () => {
    return (
        <div className=' px-[30px] py-[23px] '>
           <div className="w-[232px] ">
              <Link href="/">
            <Image src={Logo} alt="" height={100} width={200} className="max-w-[158px] " />
              </Link>
        </div> 
        </div>
    );
}

export default Header;
