import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FancyLinkButton from "./Button";

interface CardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  buttonLabel: string;
  buttonLink: string;
  buttonBgColor: string;
  slug: string;
  subTag?: string;
  subTagC?: string;
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
          onMouseEnter={() => !isMobile && setIsHovered(true)}
  onMouseLeave={() => !isMobile && setIsHovered(false)}
  onClick={() => isMobile && setIsHovered((prev) => !prev)}
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
          <Link 
          // to={`/post/${item.slug}`} 
          to={item.category === "Survey" ? "/survey" : `/post/${item.slug}`}
          className="absolute top-0 left-0 w-full h-full">

          

          {/* Category Tag - aligned left center */}
          {/* <div 
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
          </div> */}
          
          {/* =======SECOND TAG========= */}
          {/* <div 
            className={`
        absolute 
        top-90 
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
          </div> */}

           {/* === Tag Stack using Grid with Alignment Fix === */}
<div
  className={`
    absolute 

    ${
      item.category === "Inspiration"
        ? "top-31"
        : item.category === "Article"
        ? "top-28"
        : "top-20"
    }
    top-20 
    left-0 
    -translate-x-[50%] 
    flex 
    
    rotate-90
    gap-4 
    oveflow-hidden
    m-0
    p-0
    items-center 
    justify-items-center 
    pointer-events-auto
  `}
>
  {/* First Tag - Rotated Pill */}
  <div className="w-max">
    <Link
    
      to={`/tag/${item.category}`}
      className="text-sm sm:text-[17px] border z-20 border-black/90 rounded-full 
        px-4 py-1 md:py-1  font-bold no-underline 
        flex justify-center items-center transform rotate-180 origin-center"
      style={{ backgroundColor: item.buttonBgColor }}
    >
      {item.category}
    </Link>
  </div>

  {/* Second Tag - Circle, only for specific categories */}
  {/* {(item.category === "Article" || item.category === "Inspiration") && (
    <div>
      <Link
        to={item.categoryLink}
        className="w-8 h-8 sm:h-10 sm:w-10 border border-black/90 rounded-full 
          flex justify-center items-center rotate-270 text-xs font-bold text-[#444] md:text-sm"
        style={{ backgroundColor: item.buttonBgColor }}
      >
        A|C
      </Link>
    </div>
  )} */}

  {/* Second Tag - Circle with Hoverable Subtag */}
{(item.category === "Article" || item.category === "Inspiration") && (
  <div className="relative group">
    <Link
      to='/'
      className="w-8 h-8 sm:h-10 sm:w-10 border border-black/90 rounded-full 
        flex justify-center items-center rotate-270 text-xs font-bold  md:text-sm"
      style={{ backgroundColor: item.buttonBgColor }}
    >
     {
  item.category === "Inspiration"
    ? item.subTag
    : item.subTag?.charAt(0)
}
      
    </Link>

    {/* Subtag (shown on hover) */}
    <div
    //   className="absolute -left-13 -top-14 -translate-y-0 ml-2 
    //     bg-white border border-gray-200  text-sm font-semibold p-1 px-3 rounded-md rotate-270 
    //     whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
    // >

    className={`
    absolute 
    ${item.category === "Inspiration" ? "-top-19 -left-10" : 
      item.category === "Article" ? "-top-15 -left-7" : "-top-12 -left-8"} 
    -translate-y-0 ml-2 
    bg-white border border-gray-200 text-sm font-semibold p-1 px-3 rounded-md rotate-270 
    whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30
  `}>
    {
      item.category === "Inspiration" ? item.subTagC : item.subTag
    }
    </div>
  </div>
)}




  
</div>



          </Link>
        </motion.div>
      </div>

      {/* Text */}
      <div className="pt-6 ">
        <div className="mb-5">
          <h1 className="text-xl md:text-2xl font-extrabold mb-3 leading-tight">
            {item.title}
          </h1>
          <p className="text-gray-700 line-clamp-3 leading-loose pf  text-xs mb-3">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <FancyLinkButton
              label={item.buttonLabel}
              to={`/post/${item.slug}`}
              bgColor={item.buttonBgColor}
            />

            <div className="flex items-center gap-2">
              <div className="img h-8 w-8 sm:h-10 sm:w-10 overflow-hidden bg-black/30 text-white flex justify-center items-center rounded-full">
                <img
                  src="https://th.bing.com/th/id/OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                  className="object-cover"
                  alt=""
                />
              </div>
              <p className="font-bold">sosioloji</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
