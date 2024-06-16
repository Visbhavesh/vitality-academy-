import React, { useState } from "react";
import { Modal } from "antd";
import photo1 from "..//Images/1.jpeg";
import photo2 from "..//Images/2.jpeg";
import photo3 from "..//Images/3.jpeg";
import photo4 from "..//Images/4.jpeg";
import photo5 from "..//Images/5.jpeg";
import photo6 from "..//Images/6.jpeg";
import photo7 from "..//Images/7.jpeg";
import photo8 from "..//Images/8.jpeg";
import photo9 from "..//Images/9.jpeg";
import photo10 from "..//Images/10.jpeg";
import photo11 from "..//Images/11.jpeg";
import photo12 from "..//Images/12.jpeg";
import photo13 from "..//Images/13.jpeg";
import photo14 from "..//Images/14.jpeg";
import photo15 from "..//Images/15.jpeg";
import photo16 from "..//Images/16.jpeg";
import photo17 from "..//Images/17.jpeg";
import photo18 from "..//Images/18.jpeg";
import photo19 from "..//Images/19.jpeg";
import photo20 from "..//Images/20.jpeg";
import photo21 from "..//Images/21.jpeg";
import photo22 from "..//Images/22.jpeg";
import photo23 from "..//Images/23.jpeg";
import photo24 from "..//Images/24.jpeg";
import photo25 from "..//Images/25.jpeg";
import photo26 from "..//Images/26.jpeg";
import photo27 from "..//Images/27.jpeg";
import photo28 from "..//Images/28.jpeg";
import photo29 from "..//Images/29.jpeg";
import photo30 from "..//Images/30.jpeg";
import photo31 from "..//Images/31.jpeg";
import photo32 from "..//Images/32.jpeg";
import photo33 from "..//Images/33.jpeg";
import photo34 from "..//Images/34.jpeg";
import photo35 from "..//Images/35.jpeg";
import photo36 from "..//Images/36.jpeg";
import photo37 from "..//Images/37.jpeg";
import photo39 from "..//Images/39.jpeg";
import photo40 from "..//Images/40.jpeg";
import photo41 from "..//Images/41.jpeg";
import photo42 from "..//Images/42.jpeg";
import photo43 from "..//Images/43.jpeg";
import photo44 from "..//Images/44.jpeg";
import photo45 from "..//Images/45.jpeg";
import photo46 from "..//Images/46.jpeg";
import photo47 from "..//Images/47.jpeg";
import photo48 from "..//Images/48.jpeg";
import photo49 from "..//Images/49.jpeg";
import photo50 from "..//Images/50.jpeg";

export function DefaultGallery() {
const [selectedImage, setSelectedImage] =
      useState(null);

      const data = [
    { imageLink: photo1 },
    { imageLink: photo2 },
    { imageLink: photo3 },
    { imageLink: photo4 },
    { imageLink: photo5 },
    { imageLink: photo6 },
    { imageLink: photo7 },
    { imageLink: photo8 },
    { imageLink: photo9 },
    { imageLink: photo10 },
    { imageLink: photo11 },
    { imageLink: photo12 },
    { imageLink: photo13 },
    { imageLink: photo14 },
    { imageLink: photo15 },
    { imageLink: photo16 },
    { imageLink: photo17 },
    { imageLink: photo18 },
    { imageLink: photo19 },
    { imageLink: photo20 },
    { imageLink: photo21 },
    { imageLink: photo22 },
    { imageLink: photo23 },
    { imageLink: photo24 },
    { imageLink: photo25 },
    { imageLink: photo26 },
    { imageLink: photo27 },
    { imageLink: photo28 },
    { imageLink: photo29 },
    { imageLink: photo30 },
    { imageLink: photo31 },
    { imageLink: photo32 },
    { imageLink: photo33 },
    { imageLink: photo34 },
    { imageLink: photo35 },
    { imageLink: photo36 },
    { imageLink: photo37 },
    { imageLink: photo40 },
    { imageLink: photo39 },
    { imageLink: photo40 },
    { imageLink: photo41 },
    { imageLink: photo42 },
    { imageLink: photo43 },
    { imageLink: photo44 },
    { imageLink: photo45 },
    { imageLink: photo46 },
    { imageLink: photo47 },
    { imageLink: photo48 },
    { imageLink: photo49 },
    { imageLink: photo50 },
    { imageLink: photo43 },
  ];

  const handleImageClick = (imageLink) => {
    setSelectedImage(imageLink);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-2 bg-white justify-center text-center">
      <h1 className="text-3xl pt-4">Our Gallery</h1>
      <p className="text-gray-700 text-xs">Discover Our Best Photo Gallery</p>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 border-black-200 w-full">
        {data.map(({ imageLink }, index) => (
          <div key={index} onClick={() => handleImageClick(imageLink)}>
            <img
              className="h-40 w-full max-w-full object-cover object-center cursor-pointer"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>

      <Modal
        visible={selectedImage !== null}
        footer={null}
        onCancel={handleCloseModal}>
        <img src={selectedImage} alt="full-view" style={{ width: "100%" }} />
      </Modal>
    </div>
  );
}
