// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import { useState } from "react";
// // import FancyLinkButton from "./Button";

// // interface CardItem {
// //   id: number;
// //   title: string;
// //   description: string;
// //   category: string;
// //   categoryLink: string;
// //   image: string;
// //   buttonLabel: string;
// //   buttonLink: string;
// //   buttonBgColor: string;
// // }

// // const SingleCard = ({ item }: { item: CardItem }) => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   return (
// //     <div className="flex flex-col justify-center items-center max-w-[500px] h-[500px] ">
// //       {/* Main image area that triggers hover */}
// //       <div
// //         className="relative w-full h-[400px]"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         {/* Static Background Image */}
// //         <div
// //           className="w-full h-full bg-cover bg-center border border-gray-300 rounded-xl"
// //           style={{
// //             backgroundImage: `url(${item.image})`,
// //           }}
// //         ></div>

// //         {/* Floating Overlay that animates on hover */}
// //         <motion.div
// //           animate={isHovered ? { x: 0, y: 0 } : { x: -20, y: 20 }}
// //           transition={{ type: "spring", stiffness: 200, damping: 20 }}
// //           className="absolute top-0 left-0 w-full h-full border border-black rounded-xl pointer-events-none"
// //         >
// //           {/* Rotated Category Tag on the left */}
// //           <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[61px] flex flex-col gap-3 pointer-events-auto">
// //             <div className="w-[120px] h-[30px] bg-[#E8D4C3] border border-black rounded-full flex justify-center items-center transform -rotate-90">
// //               <Link
// //                 to={item.categoryLink}
// //                 className="text-[#444] font-semibold text-sm no-underline"
// //               >
// //                 {item.category}
// //               </Link>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Text Content */}
// //       <div className="pt-[24px] h-[200px]">
// //         <div className="mb-5">
// //           <h1 className="text-2xl font-extrabold mb-2 leading-tight">
// //             {item.title}
// //           </h1>
// //           <p className="text-base text-gray-700">{item.description}</p>
// //           <FancyLinkButton
// //             label={item.buttonLabel}
// //             to={item.buttonLink}
// //             bgColor={item.buttonBgColor}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SingleCard;



// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import FancyLinkButton from "./Button";

// interface CardItem {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   categoryLink: string;
//   image: string;
//   buttonLabel: string;
//   buttonLink: string;
//   buttonBgColor: string;
// }

// const SingleCard = ({ item }: { item: CardItem }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center max-w-[500px] max-h-[500px]">
//       {/* Main image area */}
//       <div
//         className="relative w-full h-[400px]"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Background Image */}
//         <div
//           className="w-full h-full bg-cover bg-center border border-gray-300 rounded-xl"
//           style={{
//             backgroundImage: `url(${item.image})`,
//           }}
//         />

//         {/* Floating Overlay - floats only on desktop */}
//         <motion.div
//           animate={
//             isHovered
//               ? { x: 0, y: 0 }
//               : isMobile
//               ? { x: 0, y: 0 }
//               : { x: -20, y: 20 }
//           }
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           className="absolute top-0 left-0 w-full h-full border border-black rounded-xl cursor-pointer"
//         >
//           {/* Rotated Category Tag - only rotates on desktop */}
//           <div className={`absolute   top-23 left-0 -translate-y-1/2 ${isMobile ? "translate-x-[-61px]" : "-translate-x-[61px]"} flex flex-col gap-3 pointer-events-auto`}>
//             <div className={`px-3 py-[2px] bg-[#E8D4C3] border border-black rounded-full flex justify-center items-center ${isMobile ? "-rotate-90" : "-rotate-90"}`}>
//               <Link
//                 to={item.categoryLink}
//                 className="text-[#444] font-semibold text-sm no-underline"
//               >
//                 {item.category}
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Text Content */}
//       <div className="pt-[24px] h-[200px]">
//         <div className="mb-5">
//           <h1 className="text-2xl font-extrabold mb-2 leading-tight">
//             {item.title}
//           </h1>
//           <p className="text-gray-700 leading-loose font-semibold text-xs  pf mb-1">{item.description}</p>
//           <FancyLinkButton
//             label={item.buttonLabel}
//             to={item.buttonLink}
//             bgColor={item.buttonBgColor}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCard;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FancyLinkButton from "./Button";

interface CardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryLink: string;
  image: string;
  buttonLabel: string;
  buttonLink: string;
  buttonBgColor: string;
}

const SingleCard = ({ item }: { item: CardItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] max-h-[470px]">
      {/* Image */}
      <div
  className="relative w-full h-[400px]"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Image Background */}
  <div
    className="w-full h-full bg-cover bg-center border border-gray-300 rounded-xl"
    style={{ backgroundImage: `url(${item.image})` }}
  />

  {/* Overlay Frame */}
  <motion.div
    animate={
      isHovered
        ? { x: 0, y: 0 }
        : isMobile
        ? { x: 0, y: 0 }
        : { x: -20, y: 20 }
    }
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="absolute top-0 left-0 w-full h-full border border-black rounded-xl cursor-pointer"
  >
    {/* Category Tag - aligned left center */}
    <div
      className={`
        absolute 
        top-20 
        left-0 
        -translate-y-1/2 
        ${isMobile ? "-translate-x-[50%]" : "-translate-x-[50%]"}
        pointer-events-auto
      `}
    >
      <Link
        to={item.categoryLink}
        className={`
          bg-[#FAD9E6] text-xs border border-black/90 rounded-full 
          px-3 py-[2px] text-[#444] font-semibold no-underline 
          flex justify-center items-center -rotate-90
          ${isMobile ? "-" : "-rotate-90"}
        `}
      >
        {item.category}
      </Link>
    </div>
  </motion.div>
</div>


      {/* Text */}
      <div className="pt-6 h-[200px]">
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold mb-2 leading-tight">{item.title}</h1>
          <p className="text-gray-700 leading-loose pf  text-xs mb-2">{item.description}</p>
          <FancyLinkButton
            label={item.buttonLabel}
            to={item.buttonLink}
            bgColor={item.buttonBgColor}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
