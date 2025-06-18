// import { Link } from "react-router-dom";

// const Card = () => {
//   return (
//     <div className="flex flex-col justify-center items-stretch w-full max-w-[300px] h-[700px]">
//       <Link
//         to="/post-details/2/grow-your-newsletter-with-quality-leads"
//         className="relative h-[400px] w-full"
//       >
//         {/* Background Image */}
//         <div
//           className="w-full h-full bg-cover bg-center border border-gray-300 rounded-2xl transition duration-300"
//           style={{
//             backgroundImage:
//               "url('https://source.unsplash.com/random/400x400?newsletter')",
//           }}
//         ></div>

//         {/* Floating Vertical Icons */}
//         <div className="absolute  top-[30px] right-[20px] hover:top-0 hover:right-0 h-full w-full flex justify-center items-center border border-black rounded-2xl pointer-events-none bg-blue-800">
//           <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[61px] flex flex-col gap-3 pointer-events-auto">
//             {/* Category */}
//             <div className="w-[120px] h-[38px] bg-[#E8D4C3] border border-black rounded-full flex justify-center items-center transform -rotate-90">
//               <Link
//                 to="/articles"
//                 className="text-[#444] font-semibold text-sm no-underline"
//               >
//                 Articles
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Link>

//       {/* Text Content */}
//       <div className="pt-[50px] h-[200px]">
//         <div className="mb-5">
//           <h1 className="text-3xl font-extrabold mb-2 leading-tight">
//             Grow your newsletter with quality leads
//           </h1>
//           <p className="text-base text-gray-700">
//             Techniques for converting your traffic into subscribers using
//             attractive articles and landing pages.
//           </p>
//         </div>

//         {/* Read More Button */}
        // <div>
        //   <Link to="/post-details/2/grow-your-newsletter-with-quality-leads">
        //     <button className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#E8D4C3] text-[#333] font-extrabold rounded-full border-none cursor-pointer">
        //       <span className="absolute top-[3px] right-[-4px] w-full h-[55.5px] border border-black rounded-full pointer-events-none transition-transform duration-400 opacity-100"></span>
        //       Read More
        //       <span className="absolute top-[55px] left-[37.59px] w-[25px] h-[25px] bg-white/40 border border-gray-800 rounded-full opacity-0 pointer-events-none transition-opacity duration-300"></span>
        //     </button>
        //   </Link>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import FancyLinkButton from "./Button";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[300px] h-[700px]">
      {/* Main image area that triggers hover */}
      <div
        className="relative w-full h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Static Background Image */}
        <div
          className="w-full h-full bg-cover bg-center border border-gray-300 rounded-2xl"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1749735100764-c6d8aab144af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')",
          }}
        ></div>

        {/* Floating Overlay that animates on hover */}
        <motion.div
          animate={isHovered ? { x: 0, y: 0 } : { x: -20, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute top-0 left-0 w-full h-full border border-black rounded-2xl pointer-events-none"
        >
          {/* Rotated Category Tag on the left */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[61px] flex flex-col gap-3 pointer-events-auto">
            <div className="w-[120px] h-[38px] bg-[#E8D4C3] border border-black rounded-full flex justify-center items-center transform -rotate-90">
              <Link
                to="/articles"
                className="text-[#444] font-semibold text-sm no-underline"
              >
                Articles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="pt-[50px] h-[200px]">
        <div className="mb-5">
          <h1 className="text-3xl font-extrabold mb-2 leading-tight">
            Grow your newsletter with quality leads
          </h1>
          <p className="text-base text-gra00">
            Techniques for converting your traffic into subscribers using
            attractive articles and landing pages.
          </p>
            <FancyLinkButton label="Explore Topics" to="/topics" />
            {/* <FancyLinkButton label="Contact Us" to="/contact" bgColor="#FAD9E6" /> */}
        </div>

        
        
      </div>
    </div>
  );
};

export default Card;
