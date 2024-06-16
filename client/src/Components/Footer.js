// import { Typography } from "@material-tailwind/react";
// import photo2 from "../Images/footer.png";
// import {
//   FaWhatsappSquare,
//   FaFacebookSquare,
//   FaInstagramSquare,
// } from "react-icons/fa";

// export function FooterWithSocialLinks() {
//   return (
//     <footer className="w-full bg-blue-800 pt-8">
//       <div className="container mx-auto flex flex-wrap justify-center items-center">
//         <div className="w-full md:w-1/3 flex justify-center items-center">
//           <img src={photo2} alt="logo-ct" className="imageone h-32" />
//         </div>
//         <ul className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end mt-6 md:mt-0">
//           <li className="flex flex-col mx-4 my-2">
//             <Typography
//               as="a"
//               href="#"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               About Us
//             </Typography>
//             <Typography
//               as="a"
//               href="#"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               Contact Us
//             </Typography>
//           </li>
//           <li className="flex flex-col mx-4 my-2">
//             <Typography
//               as="a"
//               href="/contact"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               License
//             </Typography>
//             <Typography
//               as="a"
//               href="/career"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               Careers
//             </Typography>
//           </li>
//           <li className="flex flex-col mx-4 my-2">
//             <Typography
//               as="a"
//               href="/about"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               Our Story
//             </Typography>
//             <Typography
//               as="a"
//               href="/terms"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               Terms of Service
//             </Typography>
//           </li>
//           <li className="flex flex-col mx-4 my-2">
//             <Typography
//               as="a"
//               href="/privacy"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               Privacy Policy
//             </Typography>
//             <Typography
//               as="a"
//               href="/sitemap"
//               color="blue-gray"
//               className="font-bold transition-colors hover:text-white focus:text-white"
//             >
//               Sitemap
//             </Typography>
//           </li>
//         </ul>
//       </div>
//       <div className="container mx-auto flex justify-center mt-8">
//         <Typography
//           variant="small"
//           className="text-center font-bold text-blue-gray-900"
//         >
//           <p>
//             Village Phadgudia, Post Ambari, Azamgarh 223222, UP (India)
//           </p>
//           <p className="text-gray-500 text-xs">
//             info@herapublicschool.com +91-8484929177
//           </p>
//         </Typography>
//       </div>
//       <div className="container mx-auto flex justify-center mt-4">
//         <div className="flex gap-4 text-center items-center">
//           <a target="_blank" href="https://wa.me/8115533838">
//             <FaWhatsappSquare className="text-green-700 bg-blue-100 rounded-full h-10 w-10 p-2 hover:bg-green-700 hover:text-white transition-colors" />
//           </a>
//           <a target="_blank" href="https://facebook.com">
//             <FaFacebookSquare className="text-blue-900 bg-blue-100 rounded-full h-10 w-10 p-2 hover:bg-blue-900 hover:text-white transition-colors" />
//           </a>
//           <a target="_blank" href="https://instagram.com">
//             <FaInstagramSquare className="text-pink-800 bg-blue-100 rounded-full h-10 w-10 p-2 hover:bg-pink-800 hover:text-white transition-colors" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { Typography } from "@material-tailwind/react";
import photo2 from "../Images/footer.png";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export function FooterWithSocialLinks() {
  return (
    <footer className="w-full  sm:bottom-0  bg-blue-800 pt-8">
      <div className="flex flex-wrap bg-blue-800 gap-y-6 gap-x-12 text-center justify-center sm:justify-evenly">
        <Typography className="min-w-28 min-h-26 pt-4 overflow-hidden">
          <img src={photo2} alt="logo-ct" className="imageone" />
        </Typography>
        <ul className="flex flex-wrap text-center justify-center my-4 gap-y-4 p-30 mx-10">
          <li className="mt-4 gap-y-4 p-30 mx-10">
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-bold transition-colors hover:text-white focus:text-white"
            >
              About Us
            </Typography>

            <Typography
              as="a"
              href="/contact"
              color="blue-gray"
              className="font-bold transition-colors hover:text-white focus:text-white"
            >
              Contact Us
            </Typography>
            <Typography
              as="a"
              href="/faculty"
              color="blue-gray"
              className="font-bold transition-colors hover:text-white focus:text-white"
            >
              Our Story
            </Typography>
          </li>

          <li className="mt-4 gap-y-4 p-30 mx-10">
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-bold transition-colors hover:text-white focus:text-white"
            >
              Careers
            </Typography>
            <Typography
              as="a"
              href="/academics"
              color="blue-gray"
              className="font-bold transition-colors hover:text-white focus:text-white"
            >
              Academics
            </Typography>
            <Typography
              as="a"
              href="/lectures"
              color="blue-gray"
              className="font-bold transition-colors hover:text-white focus:text-white"
            >
              Lecture
            </Typography>
          </li>

          <li className="mt-4 gap-y-4 p-30 mx-10">
            <Typography
              variant="small"
              className="mb-4 text-center justify-center w-40 font-bold text-blue-gray-900  "
            >
              <p className="">
                Village Phadgudia, Post Ambari, Azamgarh 223222, UP (India)
              </p>
              <a target="info@hvitalityclassel." href="info@hvitalityclassel.com">
              <p className="text-gray-500 text-xs">
                info@hvitalityclassel.com +91-8484929177
              </p>
              </a>
              <div className="flex gap-4 my-4 text-center items-center justify-center">
                <a target="_blank" href="https://wa.me/8115533838">
                  <FaWhatsappSquare className=" text-green-700  bg-blue-100 rounded-l h-10 w-10   " />
                </a>
                <a target="_blank" href="https://facbook.com">
                  <FaFacebookSquare className=" text-blue-900 h-10 bg-blue-100 rounded-l w-10  " />
                </a>
                <a target="_blank" href="https://instagram.com">
                  <FaInstagramSquare className=" text-pink-800 bg-blue-100 rounded-l h-10 w-10   " />
                </a>
              </div>
            </Typography>
          </li>
        </ul>
      </div>
      <style>{`
        .imageone {
          height: 150px; /* Increased height */
          width: auto; /* Let the width adjust proportionally */
        }
      `}</style>
    </footer>
  );
}
