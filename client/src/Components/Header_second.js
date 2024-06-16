import React from "react";
import photo1 from "..//Images/view2.png";
function Header() {
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="  text-3xl font-bold text-white ">MISSION </h1>
      <p className="text-gray-700 text-xs">Our Mission To Acheive Best </p>

      <div className="flex flex-wrap sm:px-16">
        <div className="w-full md:w-1/2 px-4  flex flex-col pt-14 sm:w-full ">
          <h2 className="text-3xl font-italic text-center   text-gray-800 mb-6">
            {" "}
            <strong>Vision: </strong>To Revive the Concept of Excellent
            Community
          </h2>
          <p className="text-align text-center  text-xl">
            To build a community at the very grass root (village) level, where
            educational excellence, Material welfare and moral up-rightness of
            the individual is firmly rooted in and reflected in the unity,
            social cohesion and harmony of the community.
          </p>
        </div>

        <img
          src={photo1}
          alt="image 3"
          className=" w-full object-cover sm:p-14 rounded-2 md:w-1/2 sm:w-full"
        />
      </div>
    </div>
  );
}

export default Header;
