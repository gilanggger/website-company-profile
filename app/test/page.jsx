"use client";

import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState(0);
  const [nilai, setNilai] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 50) {
          clearInterval(interval);
          return 50;
        }
        return prevProgress + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 50) {
        setValue(value + 1);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [value]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nilai < 50) {
        setNilai(nilai + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [nilai]);

  return (
    <div className="py-20 flex flex-col items-center justify-center gap-y-20">
      {/* Slider 1 */}
      <div className="relative w-full max-w-md">
        <div className="h-4 bg-[#d1cfcb] rounded-full">
          <div className="h-4 bg-[#047edb] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-4 w-6 h-6 bg-[#047edb] rounded-full transition-all duration-500"
            style={{ left: `${value}%` }}>
            {/* <CircleIcon className="w-4 h-4 text-black" /> */}
          </div>{" "}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-medium">{progress}%</div>
      </div>

      {/* Slider 2 */}
      <div className="relative w-full max-w-md">
        <div className="h-2 bg-muted rounded-full">
          <div className="h-2 bg-[#047edb] rounded-full transition-all duration-500" style={{ width: `${value}%` }} />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-4 w-6 h-6 bg-[#047edb] rounded-full transition-all duration-500"
            style={{ left: `${value}%` }}>
            {/* <CircleIcon className="w-4 h-4 text-black" /> */}
          </div>
        </div>
      </div>

      {/* Slider 3 */}
      <div className="relative w-full max-w-[400px] h-6 bg-muted rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full -z-20" style={{ width: `${nilai}%` }} />
        <div
          className="absolute inset-y-0 left-0 w-6 h-6 bg-[#047edb] rounded-full shadow-md transform -translate-x-1/2 transition-transform duration-500 z-10"
          style={{ left: `${nilai}%` }}>
          <div className="absolute">
            <svg
              className="w-full h-full text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default TestPage;
