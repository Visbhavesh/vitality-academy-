import React from "react";

export default function Messagesection() {
  return (
    <div className="flex flex-col mt-10 sm:w-full text-l">
      <h1 className="text-3xl font-bold justify-center text-center">Our Vision</h1>
      <p className="text-gray-600 text-center text-xs">Important views of ours</p>
      <div className="flex flex-wrap mt-10">
        <div className="w-full text-center md:w-1/2 flex flex-col p-0 sm:w-full">
          <h2 className="text-4xl leading-10  sm:px-20 text-align font-bold text-gray-800 mb-4">
            عشق کي گرمي سے ہے معرکہء کائنات
            علم مقام صفات، عشق تماشائے ذات
            عشق سکون و ثبات، عشق حيات و ممات
            ! علم ہے پيدا سوال، عشق ہے پنہاں جواب
            ! علم ہے ابن الکتاب، عشق ہے ام الکتاب
          </h2>
        </div>
        <div className="w-full text-center md:w-1/2 flex flex-col p-0 sm:w-full">
          <h2 className="text-4xl leading-10 py-4 sm:px-20 text-align font-bold text-gray-800 mb-4">
            इश्क की गर्मी से है मारका ए कायनात
            इल्म मक़ामे सिफात, इश्क तमाशा ए ज़ात
            इश्क सुकूनो सबात, इश्क हायातो ममात
            इल्म है पैदा सवाल, इश्क है पिन्हा जवाब
            इल्म है इब्नुल किताब, इश्क है उम्मुल किताब
          </h2>
        </div>
      </div>
      <p className="text-lg text-center sm:px-20 text-align text-gray-800 mb-4">
        Passion and love are the warmth fuelling the dynamism in God's creation.
        Knowledge is capable only to reach the attributes of God but to enjoy
        the vision, love is the only path. Love endows tranquility and
        stability in life as well as death. Knowledge is nothing but more
        questions, while love hides the answers. The knowledge is born of the
        book, while passion is the mother of the book.
      </p>
   
     <style jsx>{`
    @media (max-width: 768px) {
      .Messagesection .flex-wrap .div {
        padding: 0px; /* Add padding for mobile screens */
         font-size: 10px;
      }
    }
    `}</style>
    </div>
    
  );
}
