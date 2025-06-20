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
    <div className="flex flex-col justify-center items-center max-w-[500px] max-h-[590px] md:max-h-[590px]">
      {/* Image */}
      <div
        className="relative w-full  h-[340px] md:h-[440px]"
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
              className={`text-xs border border-black/90 rounded-full 
          px-4  py-2 m text-center  text-[#444] font-semibold no-underline 
          flex justify-center items-center -rotate-90
          ${isMobile ? "-" : "-rotate-90"}
        `}
        style={{ backgroundColor: item.buttonBgColor }}

            >
              {item.category}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="pt-6 ">
        <div className="mb-5">
          <h1 className="text-lg md:text-2xl font-extrabold mb-3 leading-tight">
            {item.title}
          </h1>
          <p className="text-gray-700 line-clamp-3 leading-loose pf  text-xs mb-3">
            {item.description}
          </p>
          <div className="flex items-center justify-between">

          <FancyLinkButton
            label={item.buttonLabel}
            to={item.buttonLink}
            bgColor={item.buttonBgColor}
            />

            <div className="flex items-center gap-2">
              <div className="img h-8 w-8 sm:h-10 sm:w-10 overflow-hidden bg-black/30 text-white flex justify-center items-center rounded-full">
              <img src="https://th.bing.com/th/id/OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" className="object-cover" alt="" /></div>
              <p className="font-bold">sosioloji</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
