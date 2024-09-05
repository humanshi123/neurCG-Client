'use client';
import "./style.css";
import "./globals.css";
import { usePathname } from 'next/navigation';
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import dp from "@/assets/images/profilepic.png"

//import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "The Black Therapy Network",
//   description: "",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideSideBar = ['/', '/signup', '/forgotpassword', '/otp', '/newpassword'];
  const hideHeader = ['/', '/signup', '/forgotpassword', '/otp', '/newpassword'];
  return (
    <html lang="en">
      <body className="{inter.className}">
        <div>
          {!hideHeader.includes(pathname) && 
          <Header 
          creditsLeft={148} 
          notificationsCount={3} 
          userImage= {dp}
        />
          }
        </div>
        <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
          <div className="flex-none ">  {/*md:h-[100vh]  */}
            {/* <SideNav /> */}
            {!hideSideBar.includes(pathname) && <SideBar /> }
          </div>
          <main className="flex-grow md:overflow-y-auto overflo-custom bg-[#F5F7FA] p-5 md:px-[35px] md:py-[40px] ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
