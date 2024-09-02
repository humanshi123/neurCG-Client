import React, { useState, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Cropper from 'react-easy-crop';
import avatar1 from "@/assets/images/video1.png";
import avatar2 from "@/assets/images/video2.png";
import avatar3 from "@/assets/images/video3.png";
import avatar4 from "@/assets/images/video4.png";
import { getCroppedImg } from '@/utils/getCroppedImg'; // Implement this function

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar1];

const AvatarSelection: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<StaticImageData | null>(avatars[0]);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [clickAvatar, setClickAvatar] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isCropping, setIsCropping] = useState(false);

  const handleAvatarClick = (avatar: StaticImageData) => {
    setSelectedAvatar(avatar);
    setCustomAvatar(null); // Clear custom avatar when a predefined one is selected
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClickAvatar(reader.result as string);
       // setSelectedAvatar(null); // Clear predefined avatar when a custom one is uploaded
        setIsCropping(true); // Start cropping
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    setIsCameraOpen(true);
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
        });
    }
  };

  const handleTakePicture = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageUrl = canvasRef.current.toDataURL('image/png');
        setClickAvatar(imageUrl);
        setIsCameraOpen(false);
        setIsCropping(true); // Start cropping
        if (videoRef.current.srcObject) {
          (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
        }
      }
    }
  };

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  //For better type safety, you can replace any with more specific types if you know them. For example:
  // import { Area, PixelCrop } from 'react-easy-crop';

  // const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: PixelCrop) => {
  //   setCroppedAreaPixels(croppedAreaPixels);
  // }, []);
    

  const handleCropSave = async () => {
    if (clickAvatar && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(clickAvatar, croppedAreaPixels);
      setClickAvatar(croppedImage);
      setIsCropping(false);
    }
  };

  return ( //shadow-[0_4px_4px_0_rgba(0,0,0,0.08)]
    <div className="bg-white rounded-lg p-[30px] shadow-[0_0_40px_0_rgba(235,130,60,0.06)]">
  
    
      <div className="flex items-center">
        <div className="w-1/2 image-section ">
        <h3 className="text-[#6B6B6B] text-sm mb-2">Choose a pre-made</h3>
<div className='flex gap-[21px]'>
<div className="border border-[#E87223] rounded-[5px] w-[169px]">
            {customAvatar ? (
              <Image
                src={customAvatar}
                alt="Custom Avatar"
                width={128}
                height={128}
                className="h-full w-full object-cover rounded-[5px]"
              />
            ) : (
              <Image
                src={selectedAvatar || ''}
                alt="Selected Avatar"
                width={128}
                height={128}
                className="selected h-full w-full object-cover rounded-[5px]"
              />
            )}
          </div>
          <div className="grid grid-cols-4 gap-[10px]">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`thumbnail cursor-pointer rounded-[5px]  ${
                  selectedAvatar === avatar && 'active'
                }`}
                onClick={() => handleAvatarClick(avatar)}
              >
                <Image
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  width={74}
                  height={68}
                  className="border border-[#FFE2CE] w-[74px] h-[68px] object-cover rounded-[5px]"
                />
              </div>
            ))}
          </div>
</div>
        </div>
        <h3 className=" w-[10%] mx-[20px] 2xl:mx-[45px] flex justify-center items-center text-[#6B6B6B] text-sm italic">—— Or ——</h3>
        <div className="w-[40%] ">
        <h3 className="text-[#6B6B6B] text-sm mb-2">Create Your Own</h3>
          {/* Display the image captured from the camera or uploaded via gallery */}
      <div className='flex items-center gap-[21px]'>
      {clickAvatar ? (
            <Image
              src={clickAvatar}
              alt=""
              width={128}
              height={128}
              className="max-w-[169px] max-h-[158px] h-full w-full object-cover rounded-[5px]"
            />
          ) : (
            <input
              type="image"
              src=""
              alt=""
              className="camera-image border-[#E87223] bg-[#FFF1E8]  "
              style={{ width: 169, height: 158 }}
            />
          )}
          <div className="flex flex-col">
            <button
              className="bg-orange-500 text-white px-4 py-2 mb-2 rounded"
              onClick={handleCameraClick}
            >
              Open Camera
            </button>
            <label className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer text-center">
              Browse Gallery
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
          </div>    
        </div>
      </div>

      {/* Cropping Modal */}
      {isCropping && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded">
            <div className="relative w-full h-64">
              <Cropper
                image={clickAvatar!}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <button
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
              onClick={handleCropSave}
            >
              Save
            </button>
            <button
              className="mt-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setIsCropping(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Camera Modal */}
      {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded">
            <video ref={videoRef} className="w-full h-64 bg-black" autoPlay />
            <canvas ref={canvasRef} className="hidden" width={640} height={480}></canvas>
            <button
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
              onClick={handleTakePicture}
            >
              Take Picture
            </button>
            <button
              className="mt-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setIsCameraOpen(false);
                if (videoRef.current?.srcObject) {
                  (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
                }
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarSelection;
