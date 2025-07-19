// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import SingleCard from "./SingleCard";
// import FancyLinkButton from "./Button";
// import { CardItem } from "../data/Types"; // Assuming shared type
// import PageHeader from "./PageHeader";

// const ITEMS_PER_PAGE = 6;

// const surveyList: CardItem[] = [
//   {
//     id: 1,
//     title: "Youth Politics and Last Generation Survey",
//     slug: "youth-politics",
//     author: "Sosioloji",
//     body: "<p>Help us understand youth perspectives on political engagement Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria.</p>",
//     description: "Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria.",
//     category: "Survey",
//     image: "https://plus.unsplash.com/premium_photo-1752658399836-07566560b88f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//     buttonLabel: "Fill Out",
//     buttonLink: "/survey/youth-politics",
//     buttonBgColor: "#FFD682",
//     created_at: new Date().toISOString(),
//   },
//   {
//     id: 2,
//     title: "Education Experience with Solutions Survey",
//     slug: "education-experience",
//     author: "Sosioloji",
//     body: "<p>Share your experience with education in your country. Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria</p>",
//     description: "We want to hear your story about education. Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria Understanding youth political engagement in Nigeria",
//     category: "Survey",
//     image: "https://images.unsplash.com/photo-1752859625900-a7fbeee9b8e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
//     buttonLabel: "Start Survey",
//     buttonLink: "/survey/education-experience",
//     buttonBgColor: "#FFD682",
//     created_at: new Date().toISOString(),
//   },
//   // Add more surveys as needed
// ];

// const SurveyList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(surveyList.length / ITEMS_PER_PAGE);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const paginatedSurveys = surveyList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <>
//             <PageHeader
//           title="Survey"
//           count={surveyList.length}
//           type="category"
//         />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-20 md:space-y-0 place-items-center">
//         <AnimatePresence mode="wait">
//           {paginatedSurveys.map((item) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 0 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <SingleCard item={item} />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {surveyList.length > ITEMS_PER_PAGE && (
//         <div className="flex justify-center items-center mt-10 space-x-3">
//           {currentPage > 1 && (
//             <button onClick={() => setCurrentPage((prev) => prev - 1)}>
//               <FancyLinkButton to="#" label="Prev" bgColor="#FFE6B4" />
//             </button>
//           )}
//           {[...Array(totalPages)].map((_, i) => {
//             const page = i + 1;
//             return (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`px-4 py-1 cursor-pointer rounded ${
//                   currentPage === page
//                     ? "bg-[#FFE6B4] text-black"
//                     : "hover:bg-gray-300 bg-[#EEEEEE]"
//                 }`}
//               >
//                 {page}
//               </button>
//             );
//           })}
//           {currentPage < totalPages && (
//             <button onClick={() => setCurrentPage((prev) => prev + 1)}>
//               <FancyLinkButton to="#" label="Next" bgColor="#FFE6B4" />
//             </button>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default SurveyList;



import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SingleCard from "../components/SingleCard";
import FancyLinkButton from "../components/Button";
import PageHeader from "../components/PageHeader";
import { surveyList } from "../data/FormsData";

const ITEMS_PER_PAGE = 6;

const SurveyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(surveyList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSurveys = surveyList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <PageHeader title="Survey" count={surveyList.length} type="category" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-20 md:space-y-0 place-items-center">
        <AnimatePresence mode="wait">
          {paginatedSurveys.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <SingleCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {surveyList.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center mt-10 space-x-3">
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage((prev) => prev - 1)}>
              <FancyLinkButton to="#" label="Prev" bgColor="#FFE6B4" />
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
            <button onClick={() => setCurrentPage((prev) => prev + 1)}>
              <FancyLinkButton to="#" label="Next" bgColor="#FFE6B4" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default SurveyList;
