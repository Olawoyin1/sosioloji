// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface FancyButtonProps {
//   label: string;
//   onClick?: () => void;
// }

// const FancyButton: React.FC<FancyButtonProps> = ({ label, onClick }) => {
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = btnRef.current?.getBoundingClientRect();
//     if (!rect) return;

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setCoords({ x, y });
//   };

//   return (
//     <button
//       ref={btnRef}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onMouseMove={handleMouseMove}
//       className="relative px-8 py-4 bg-[#E8D4C3] text-[#333] font-bold rounded-full overflow-hidden"
//     >
//       {/* Hover circle */}
//       <AnimatePresence>
//         {hovered && (
//           <motion.span
//             key="hover-circle"
//             className="absolute w-6 h-6 bg-black/10 rounded-full pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{
//               top: coords.y - 12,
//               left: coords.x - 12,
//               opacity: 1,
//             }}
//             exit={{ opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           />
//         )}
//       </AnimatePresence>

//       {/* Button Text */}
//       <span className="relative z-10">{label}</span>
//     </button>
//   );
// };

// export default FancyButton;




// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// interface FancyLinkButtonProps {
//   label: string;
//   to: string;
// }

// const FancyLinkButton: React.FC<FancyLinkButtonProps> = ({ label, to }) => {
//   const btnRef = useRef<HTMLDivElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = btnRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setCoords({ x, y });
//   };

//   return (
//     <Link to={to}>
//       <div
//         ref={btnRef}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         onMouseMove={handleMouseMove}
//         className="relative inline-flex items-center justify-center px-8 py-4 bg-[#E8D4C3] text-[#333] font-bold rounded-full cursor-pointer overflow-hidden"
//       >
//         {/* Background border that shrinks to mouse point */}
//         <motion.span
//           className="absolute border border-red-900 rounded-full z-90 pointer-events-none"
//           initial={{
//             width: "100%",
//             height: "100%",
//             right: "-6px",
//             bottom: "-6px",
//             opacity: 1,
//           }}
//           animate={
//             hovered
//               ? {
//                   width: 24,
//                   height: 24,
//                   left: coords.x - 12,
//                   top: coords.y - 12,
//                   right: "auto",
//                   bottom: "auto",
//                 }
//               : {
//                   width: "100%",
//                   height: "100%",
//                   right: "-6px",
//                   bottom: "-6px",
//                   left: "auto",
//                   top: "auto",
//                 }
//           }
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />

//         {/* Optional inner circle that follows mouse */}
//         <AnimatePresence>
//           {hovered && (
//             <motion.span
//               key="cursor-circle"
//               className="absolute w-5 h-5 bg-black/10 rounded-full pointer-events-none"
//               animate={{
//                 left: coords.x - 10,
//                 top: coords.y - 10,
//                 opacity: 1,
//               }}
//               exit={{ opacity: 0 }}
//               transition={{ type: "spring", stiffness: 250, damping: 20 }}
//             />
//           )}
//         </AnimatePresence>

//         {/* Button text */}
//         <span className="relative z-10">{label}</span>
//       </div>
//     </Link>
//   );
// };

// export default FancyLinkButton;


import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface FancyLinkButtonProps {
  label: string;
  to: string;
  bgColor?: string;
}

const FancyLinkButton: React.FC<FancyLinkButtonProps> = ({
  label,
  to,
  bgColor = "#E8D4C3",
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <Link to={to}>
      <div
        ref={btnRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative inline-flex items-center justify-center px-8 py-4 text-[#333] font-bold rounded-full cursor-pointer"
        style={{ backgroundColor: bgColor }}
      >
        {/* Decorative shrinking border */}
        <motion.span
          className="absolute border border-black rounded-full z-30 pointer-events-none"
          initial={{
            width: "100%",
            height: "100%",
            transform: "translate(6px, 6px)",
            opacity: 1,
          }}
          animate={
            hovered
              ? {
                  width: 24,
                  height: 24,
                  left: coords.x - 12,
                  top: coords.y - 12,
                  transform: "translate(0, 0)",
                }
              : {
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: 0,
                  transform: "translate(6px, 6px)",
                }
          }
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Fading circle that follows mouse */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              key="cursor-circle"
              className="absolute w-5 h-5 bg-black/10 rounded-full pointer-events-none z-20"
              animate={{
                left: coords.x - 10,
                top: coords.y - 10,
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
          )}
        </AnimatePresence>

        {/* Button Text */}
        <span className="relative z-40">{label}</span>
      </div>
    </Link>
  );
};

export default FancyLinkButton;
