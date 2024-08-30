import Image from "next/image";
import logo from "@/assets/images/logo.png";
import LoginCard from "@/components/LoginCard";
import loginImg from "@/assets/images/loginimg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 items-center">
        {/* min-h-[100vh]  max-w-[418px] pl-[113px] pr-4 */}
        <div className=" bg-[#F5F7FA] flex flex-col justify-center pl-[113px] pr-4 h-full">
          <div className="max-w-[418px] ">
            <Image src={logo} height={100} width={200}  alt="" />
            <h1 className="main-title mt-[94px] mb-3 ">Enter OTP</h1>
            <p className="login-desc mb-10">Enter 4 digit pin sent to your email address.</p>
        <div className="mb-[24px] otp-inputs flex gap-[11px] items-center">
          <input type="number" name="" id="" />
          <input type="number" name="" id="" />
          <input type="number" name="" id="" />
          <input type="number" name="" id="" />
          </div>
           
      <div><Link href="/newpassword" className="button inline-block text-center leading-7 w-full bg-[#e87223] rounded-[5px] text-white text-base p-[15px]">
      Verify</Link> </div>
      <p className="login-desc text-center mt-[25px] ">Remember Your Password? <Link href="/" className="text-[#E87223]">Login</Link> </p>

          <p className="login-desc mt-[153px] ">Copyright © 2020 - 2025 NeurCG.</p>
          </div>
        </div>
        <div className="waves">
          <div className="py-[125px] px-10 ">
            <LoginCard imgSrc={loginImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
