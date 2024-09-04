"use client";
import React, { useState, useRef, useEffect } from "react";
import { VideoCameraIcon } from "@heroicons/react/24/solid"; // Assuming you have this icon or any other

const AddVideo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
        contentRef.current.style.opacity = "1";
      } else {
        contentRef.current.style.maxHeight = "0px";
        contentRef.current.style.opacity = "0";
      }
    }
  }, [isOpen]);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const videoUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewVideo(videoUrl);
    }
  };

  const handleRemoveVideo = () => {
    setPreviewVideo(null);
  };

  return (
    <div className="mt-5 bg-white rounded-lg p-[30px] shadow-[0_0_40px_0_rgba(235,130,60,0.06)]">
      <h2  
        className={`section-title dropdown-title ${isOpen ? 'active' : ''}`}
        onClick={toggleOpen}>
        Video
      </h2>
      <div ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}>
        <div className="mt-5 grid grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-5">
          <div>
            <label htmlFor="" className="grid gap-2">
              Upload Video
            </label>
            <div className="custom relative bg-[#CCE9FA] w-[236px] h-[236px] rounded-[20px] mb-[50px]">
              <input
                className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                type="file"   
                accept="video/*"
                onChange={handleVideoChange}
              />
              {previewVideo ? (
                <div className="relative h-full">
                  <video
                    src={previewVideo}
                    className="rounded-[20px] object-cover h-full w-full"
                    controls
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-[#283C63] text-white px-[6px] rounded-full"
                    onClick={handleRemoveVideo}
                  >
                    X
                  </button>
                </div>
              ) : (
                <div className="grid place-items-center h-full w-full">
                  <div className="text-center">
                    <VideoCameraIcon className="h-10 w-10 text-[#283c63]" />
                    <p className="text-[#283c63] text-sm mt-[20px]">
                      Drag & drop the video of your choice
                    </p>
                    <p className="text-[#283c63] text-sm mt-[10px]">
                      or <span className="text-[#E87223] cursor-pointer">browse file</span> from device
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="" className="grid gap-2 mb-5">
              Text Language
              <select name="textLanguage" id="textLanguage">
                <option value="">Language Select</option>
                <option value="lang1">Language 1</option>
                <option value="lang2">Language 2</option>
              </select>
            </label>
            <label htmlFor="" className="grid gap-2">
              Subtitle Language
              <select name="subtitleLanguage" id="subtitleLanguage">
                <option value="">Language Select</option>
                <option value="lang1">Language 1</option>
                <option value="lang2">Language 2</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Select from "react-select";
// import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
// import { CrownIcon, FemaleIcon, MaleIcon } from "@/utils/svgIcons";
// import { space } from "postcss/lib/list";




// const AddVideo = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [previewImage, setPreviewImage] = useState<string | null>(formData.image || null);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
// };

// useEffect(() => {
//     if (contentRef.current) {
//         if (isOpen) {
//             contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
//             contentRef.current.style.opacity = "1";
//         } else {
//             contentRef.current.style.maxHeight = "0px";
//             contentRef.current.style.opacity = "0";
//         }
//     }
// }, [isOpen]);

// const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const result = e.target?.result as string;
//         setPreviewImage(result);
//         setFormData((prevData) => ({
//           ...prevData,
//           image: result,
//         }));
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const handleRemoveImage = () => {
//     setPreviewImage(null);
//     setFormData((prevData) => ({
//       ...prevData,
//       image: "",
//     }));
//   };

//   return (
//     <div className="mt-5 bg-white rounded-lg p-[30px] shadow-[0_0_40px_0_rgba(235,130,60,0.06)]">
//       <h2  
//       className={`section-title dropdown-title ${isOpen ? 'active' : ''}`}
//       onClick={toggleOpen}>
//         Video</h2>
//     <div ref={contentRef}
//                 className={` overflow-hidden transition-[max-height] duration-500 ease-in-out`}
//                 style={{
//                     maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
//                     opacity: isOpen ? 1 : 0,
//                 }}>
//     <div className="mt-5 text-selecion grid grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-5">
//         <div>
//           <label htmlFor="" className="grid gap-2">
//           Upload Video
//           </label>
//           <div className="custom relative bg-[#CCE9FA] w-[236px] h-[236px] rounded-[20px] mb-[50px] ">
//          <input
//            className='absolute top-0 left-0 h-full w-full opacity-0'
//               type="file"   
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//         {previewImage ? (
//           <div className=" relative h-full ">
//             <Image src={previewImage} alt="Preview" layout="fill" className="rounded-[20px]" />
//             <button
//               type="button"
//               className="absolute top-0 right-0 bg-[#283C63] text-[#fff] px-[6px] rounded-full"
//               onClick={handleRemoveImage}
//             >
//               X
//             </button>
//           </div>
//         ) : (
//           <div className="grid place-items-center h-full w-full">
//            <div>
//          previewImage
//            <p className="text-[#283c63] text-sm mt-[40px] ">Upload Image</p>
//            </div>
//           </div>
//         )}
//         </div>
//         </div>
//         <div>
//           <label htmlFor="" className="grid gap-2 mb-5">
//             Text Language
//             <select name="" id="">
//               <option value="">Language Select</option>
//               <option value="">Language 1</option>
//               <option value="">Language 2</option>
//             </select>
//           </label>

//           <label htmlFor="" className="grid gap-2 ">
//                     Subtitle Language
//                     <select name="" id="">
//                         <option value="">Language Select</option>
//                         <option value="">Language 1</option>
//                         <option value="">Language 2</option>
//                     </select>
//                 </label>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AddVideo;