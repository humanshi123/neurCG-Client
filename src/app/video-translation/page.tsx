"use client";
import AddVideo from "@/components/AddVideo";
import AddVoice from "@/components/AddVoice";
import Subtitles from "@/components/Subtitles";
import React from "react";

const Page = () => {
  return (
    <div>
      <AddVideo />
      <AddVoice />
      <Subtitles />
    </div>
  );
};

export default Page;
