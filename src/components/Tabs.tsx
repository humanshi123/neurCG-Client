"use client"
import { DesignIcon, RingIcon } from "@/utils/svgIcons";
import { useState } from "react";

interface TabContent {
  title: string;
  content: string;
}

const tabsData: TabContent[] = [
  {
    title: "We’re excited you’re here!",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type!",
  },
  {
    title: "Create your digital twin",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type!",
  },
  {
    title: "Create your first video",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type!",
  },
  {
    title: "Translate a video",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type!",
  },
];

const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    if (currentTab < tabsData.length - 1) {
      setCurrentTab(currentTab + 1);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <div className="flex items-center rounded-lg p-[7px] bg-white relative ">
          {/* Sidebar */}
          <div className="w-1/3 py-[5px] px-[10px] bg-[#F5F7FA] rounded-[4px]  ">
            <ul className="space-y-2 custom-tabs">
              {tabsData.map((tab, index) => (
                <li
                  key={index}
                  className={`flex font-inter text-sm items-center text-[#828282] gap-[10px] cursor-pointer py-[13px] px-5 rounded-lg ${
                    index === currentTab ? "shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] !text-[#292929] active" : ""
                  }`}
                  onClick={() => setCurrentTab(index)}
                >
               <p><RingIcon /> </p>
                <h3>{tab.title}</h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-2/3 pl-[50px] flex justify-between items-center">
            <div className="max-w-[546px] w-full">
            <h2 className="section-title !text-[28px]">{tabsData[currentTab].title}</h2>
            <p className="mb-5 mt-[10px] text-[#828282] text-sm leading-6 ">{tabsData[currentTab].content}</p>
            <button
              className="button"
              onClick={handleNext}
            >
              {currentTab < tabsData.length - 1 ? "Next Step" : "Finish"}
            </button>
            </div>
            <div className="text-[80px] text-center min-w-[168px] ">
            👋
            </div>
          </div>
          <div className="absolute right-0 bottom-0 ">
            <DesignIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
