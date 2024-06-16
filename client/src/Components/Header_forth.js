import React from "react";
import photo1 from "..//Images/method.png"
import photo2 from "..//Images/method2.png"
function Header_forth() {
  return (
    <div className="flex flex-col bg-green-800">
      <h1 className="text-3xl  py-5 sm:pt-12 justify-center text-serif text-yellow-800 text-center ">SUCCESS PARAMETER & METHODOLOGY</h1>
      <div
        className="flex  sm:px-36 sm:py-20 grid grid-cols-1 md:grid-cols-2 
   gap-10 ">
        <img
          src={photo1}
          alt="image 3"
          className=" object-cover"
        />
        <img
          src={photo2}
          alt="image 3"
          className=" object-cover"
        />{" "}
      </div>
    </div>
  );
}

export default Header_forth;
