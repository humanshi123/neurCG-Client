"use client"
import React, {useState} from "react";

const TextSelection = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setAudioUrl(fileUrl);
    }
  };
  return (
    <div className="mt-5 bg-white rounded-lg p-[30px] shadow-[0_0_40px_0_rgba(235,130,60,0.06)]">
      <h2 className="section-title mb-5">Text</h2>
      <div className="text-selecion grid grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-5">
        <div>
          <label htmlFor="" className="grid gap-2">
            Enter Your Text Here
            <textarea name="" id="" rows={10} className="text-area"></textarea>
          </label>
        </div>
        <div>
          <label htmlFor="" className="grid gap-2 mb-5">
            Text Language
            <select name="" id="">
              <option value="">Language Select</option>
              <option value="">Language 1</option>
              <option value="">Language 2</option>
            </select>
          </label>
          <label htmlFor="" className="grid gap-2 mb-5">
            Preferred Voice
            <select name="" id="">
              <option value="">Select Voice</option>
              <option value="">Voice 1</option>
              <option value="">Voice 2</option>
            </select>
          </label>
          <label htmlFor="" className="grid gap-2 ">
            Use Your Own Voice
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TextSelection;
