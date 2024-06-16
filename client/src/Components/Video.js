import React from 'react';
import myVideo from "../Images/video.mp4";

export default function Videosection() {
  return (
    <div className="flex flex-col items-center bg-gray-300 justify-center px-10">
      <h1 className="text-3xl  mt-4 p-1">Featuring Video</h1>
      <p className="text-gray-700 text-xs pb-4">Please Have A Look & Enjoy The Moment</p>
    
      <div className="relative w-full sm:w-3/4 lg:w-2/3 pb-10  ">
         <video className="relative w-full h-full " controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
