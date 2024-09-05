"use client"
import Tabs from '@/components/Tabs';
import React from 'react';
import thumbimg1 from "@/assets/images/video1.png"
import thumbimg2 from "@/assets/images/video2.png"
import thumbimg3 from "@/assets/images/video3.png"
import thumbimg4 from "@/assets/images/video4.png"
import NeurcgCard from "@/components/NeurcgCard"
import VideoCards from '@/components/VideoCards';
import { url } from 'inspector';
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoData =[
  {
    id:1,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg1,
    url: "https://www.youtube.com/embed/sscX432bMZo?si=QeHnuJ8RS0ALfqWU"
  },
  {
    id:2,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg2,
  },
  {
    id:3,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg3
  },
  {
    id:4,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg4
  },
]
const ClientVideos =[
   {
    id:1,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg1,
    videoSrc: "/assets/videos/file.mp4"
  },  
  {
    id:2,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg2,
    videoSrc: "/assets/videos/video1.mp4"
  },  
  {
    id:3,
    title: "Lorem Ipsum Dummy Title",
    thumbnail: thumbimg3,
    videoSrc: "/assets/videos/video1.mp4"
  },
]

const Page = () => {
    return (
        <div>
          <h2 className="section-title mb-5">Getting Started</h2>
        <Tabs />
         <section className='mt-[30px] md:mt-[50px]'>
        <h2 className='section-title mb-[10px] md:mb-5'>How to use NeurCG</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {VideoData.map((data) =>(
            <NeurcgCard
            key= {data.id}
            title={data.title}
            thumbnail={data.thumbnail}
            url={data.url}
            />
        ))}
        </div>
         </section>
        <section className='mt-[30px] md:mt-[50px]'>
         <h2 className="section-title mb-[10px] md:mb-5">Recent</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
         {ClientVideos.map((data) =>(
            <VideoCards
            key= {data.id}
            title={data.title}
            thumbnail={data.thumbnail}
            videoSrc={data.videoSrc}
            />
        ))}
         </div>
         </section>
        </div>
    );
}

export default Page;
