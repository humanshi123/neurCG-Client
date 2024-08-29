'use client';
import "./style.css";
import "./globals.css";
import { usePathname } from 'next/navigation';
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
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
          {!hideHeader.includes(pathname) && <Header />}
        </div>
        <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
          <div className="flex-none h-[100vh] ">
            {/* <SideNav /> */}
            {!hideSideBar.includes(pathname) && <SideBar /> }
          </div>
          <main className="flex-grow md:overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
