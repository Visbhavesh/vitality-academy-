import React from "react";
import photo1 from "..//Images/view4.jpg";
function Header_third() {
  return (
    <>
      <h2 className="text-3xl text-center  font-bold text-gray-100">
        EPISTEMOLOGICAL BASIS OF HOLISTIC APPROACH
      </h2>
      <p className="text-gray-700 text-center text-xs">Our  Mission To Acheive Best </p>
     

      <div className="grid grid-cols-1 md:grid-cols-2 sm:px-16 item-center ">
        <div className="w-full  sm:pt-16 flex flex-col p-8   ">
          
        <ul className="gap-4 text-xl font-light ">
  <li>
    1. Humans are inherently spiritual, social, and rational beings.
  </li>
  <li className="mb-1"> 2. Man-made systems must acknowledge these dimensions for alignment with human nature (Fitrah).
  </li>
  <li className="mb-1"> 3. Holistic education begins with establishing a spiritual connection, fostering God consciousness.
  </li>
  <li className="mb-1"> 4. It emphasizes grounding students in desirable social and ethical behavior.
  </li>
  <li className="mb-1"> 5. The approach includes rational exploration of the natural/material world.
  </li>
</ul>
        </div>

        <img
          src={photo1}
          alt="image 3"
          className=" w-full  p-16  object-cover"
        />
      </div>
    </>
  );
}

export default Header_third;
