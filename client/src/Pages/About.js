import React from "react";
import Facultysection from "./Faculty";
import Photo from "../Images/About.jpg";
import photo41 from "../Images/41.jpeg";
import photo42 from "../Images/42.jpeg";
import photo43 from "../Images/28.jpeg";

export default function Section() {
  return (
    <div className="bg-gray-250 mt-20 min-h-screen">
      <div className="relative mb-5">
        <img
          src={Photo}
          alt="About Us"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          About Us
        </div>
      </div>
      <div className="grid grid-cols-1 p-10 md:grid-cols-2">
        <div className="w-full text-center flex flex-col px-10">
          <h2 className="text-3xl text-center font-medium text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600  mb-4">
            Welcome to Vitality Academy, where our commitment to educational excellence is at the heart of everything we do. Established with a vision to empower and uplift through quality education, we believe in the transformative power of learning.
          </p>
          <p className="text-gray-600 text-center mb-4">
            Our mission is to provide accessible education that not only imparts knowledge but also fosters personal growth and societal development. At Vitality Academy, we strive to create a nurturing environment where every student can thrive academically and morally.
          </p>
          <p className="text-gray-600 text-center mb-4">
            Our dedication extends beyond the classroom, reaching out to the community with initiatives aimed at uplifting society. We believe in the values of compassion, integrity, and social responsibility, and we aim to instill these in our students, preparing them to make meaningful contributions to the world.
          </p>
        </div>
        <img
          src={photo41}
          alt="Our Campus"
          className="w-full object-cover h-90"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
        <img
          src={photo42}
          alt="Student Life"
          className="w-full object-cover h-96"
        />
        <div className="w-full text-center flex flex-col px-10">
          <h2 className="text-3xl text-center font-medium text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 text-center mb-4">
            At Vitality Academy, we envision a world where education is the cornerstone of societal progress. Our goal is to inspire and equip students with the skills, knowledge, and values necessary to navigate and excel in a rapidly changing world.
          </p>
          <p className="text-gray-600 text-center mb-4">
            We believe in fostering an environment of innovation, critical thinking, and ethical leadership. Our programs are designed to challenge students academically while encouraging creativity and self-expression.
          </p>
          <p className="text-gray-600 text-center mb-4">
            By nurturing a love for lifelong learning, we aim to cultivate future leaders who are not only successful in their careers but also committed to making a positive impact on society.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
        <img
          src={photo43}
          alt="Academic Excellence"
          className="w-full object-cover h-96"
        />
        <div className="w-full text-center flex flex-col px-10">
          <h2 className="text-3xl text-center font-medium text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Our mission at Vitality Academy is to provide a holistic educational experience that prepares students for the challenges of the future. We are committed to academic excellence, ethical integrity, and the personal development of each student.
          </p>
          <p className="text-gray-600 text-center mb-4">
            Through our diverse programs and dedicated faculty, we aim to inspire a passion for learning and a commitment to positive change. We believe in the power of education to transform lives and communities.
          </p>
          <p className="text-gray-600 text-center mb-4">
            Our mission extends beyond academic achievement to include the cultivation of empathy, resilience, and a sense of global citizenship. Join us at Vitality Academy, where we are shaping the leaders of tomorrow, today.
          </p>
        </div>
      </div>
      <Facultysection />
    </div>
  );
}
