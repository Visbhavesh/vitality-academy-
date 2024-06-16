import { Carousel } from "@material-tailwind/react";
import photo1 from "..//Images/crousel5.jpeg";
import photo2 from "..//Images/crousel4.jpeg";
import photo3 from "..//Images/crousel3.jpeg";
import photo4 from "..//Images/crousel2.jpeg";
import photo5 from "..//Images/crousel1.jpeg";
import { useState } from "react";

export function CarouselTransition() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const handleTransitionEnd = () => {
   if (currentIndex === 8) { 
    setCurrentIndex(0);
    }

  };

  return (
    <div className="relative mt-20">
      <Carousel
        transition={{ duration: 0.5 } }
        className="carousel  h-auto w-full sm:h-[40rem] overflow-hidden rounded-lg shadow-md"
        autoplay={true}
        pauseOnHover={true}
        controls={true}
        indicators={true}
        loop={true}
        currentIndex={currentIndex} // Pass currentIndex as a prop
        onTransitionEnd={handleTransitionEnd} // Add onTransitionEnd event handler
      >
        <img
          src={photo5}
          alt="image 1"
          className="h-full w-full object-cover fade-in"
        />
        <img
          src={photo1}
          alt="image 1"
          className="h-full w-full object-cover fade-in"
        />
        <img
          src={photo2}
          alt="image 2"
          className="h-full w-full object-cover fade-in"
        />
        <img
          src={photo3}
          alt="image 1"
          className="h-full w-full object-cover fade-in"
        />
        <img
          src={photo4}
          alt="image 1"
          className="h-full w-full object-cover fade-in"
        />
        <img
          src={photo5}
          alt="image 1"
          className="h-full w-full object-cover fade-in"
        />
        <img
          src={photo2}
          alt="image 2"
          className="h-full w-full object-cover fade-in"
        />
      </Carousel>
    </div>
  );
}
