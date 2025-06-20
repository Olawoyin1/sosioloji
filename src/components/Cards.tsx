
// // import { dataCard } from "../data/dataCard";
// import { dataCard } from "../data/cardData";
// import SingleCard from "./SingleCard"; // create this

// const Card = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-20  md:space-y-0 place-items-center ">
//       {dataCard.map((item) => (
//         <SingleCard key={item.id} item={item} />
//       ))}
//     </div>
//   );
// };

// export default Card;




import { useState } from "react";
import { dataCard } from "../data/cardData";
import SingleCard from "./SingleCard";
import { AnimatePresence, motion } from "framer-motion";
import FancyLinkButton from "./Button";

const ITEMS_PER_PAGE = 6;

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = dataCard.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(dataCard.length / ITEMS_PER_PAGE);

  return (
    <>
      {/* Animated Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-20 md:space-y-0 place-items-center ">
        <AnimatePresence mode="wait">
          {paginatedData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <SingleCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex  justify-center items-center mt-10 space-x-3">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className=""
          ><FancyLinkButton 
              to="/"
              label="Prev"
              bgColor="#FFE6B4"
            />
            
          </button>
        )}

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-1 cursor-pointer rounded ${
                currentPage === page
                  ? "bg-[#FFE6B4] text-black"
                  : "hover:bg-gray-300 bg-[#EEEEEE]"
              }`}
            >
              {page}
            </button>
          );
        })}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className=""
          >
            <FancyLinkButton 
              to="/"
              label="Next"
              bgColor="#FFE6B4"
            />
            
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
