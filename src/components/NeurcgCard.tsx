"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CrossIcon, VideoPlayerIcon } from "@/utils/svgIcons";
import Image, { StaticImageData } from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoCardProps {
  url?: string; // Video URL or YouTube link
  title: string;
  thumbnail?: string | StaticImageData; // Optional thumbnail
}

const VideoCard: React.FC<VideoCardProps> = ({ url, title, thumbnail }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    if (url) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="p-1 rounded-lg bg-white cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="player-wrapper relative">
          {thumbnail ? (
            <Image
              src={typeof thumbnail === "string" ? thumbnail : thumbnail.src}
              alt={title}
              className="w-full h-auto rounded-lg"
              width={500} // Adjust this size as needed
              height={300} // Adjust this size as needed
              layout="responsive"
            />
          ) : (
            <div className=" bg-gray-200 flex items-center justify-center rounded-lg">
              <p>Video Available</p>
            </div>
          )}
          <div className="mt-[15px] mb-[11px] flex items-center gap-[10px] px-[14px]">
            <p className="leading-normal"><VideoPlayerIcon /></p>
            <h3 className="text-[#3A2C23] text-sm leading-[normal] ">{title}</h3>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-[70%] h-[90vh] p-10 pt-[50px]  rounded-[20px] overflo-custom overflow-y-auto relative bg-white">
            <button
              className="absolute top-4 right-5"
              onClick={closeModal}
            > <CrossIcon />
            </button>
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
