// // src/pages/SurveysPage.tsx
// import React from "react";
// import SingleCard from "../components/SingleCard";
// import { CardItem } from "../data/Types";

// const surveyList: CardItem[] = [
//   {
//     id: 1,
//     title: "Youth & Politics Survey",
//     slug: "youth-politics",
//     author: "Sosioloji",
//     body: "<p>Help us understand youth perspectives on political engagement.</p>",
//     description: "Understanding youth political engagement in Nigeria.",
//     category: "Survey",
//     image: "https://source.unsplash.com/random/400x300?youth",
//     buttonLabel: "Fill Out",
//     buttonLink: "/survey/youth-politics",
//     buttonBgColor: "#B8F2E6",
//     created_at: new Date().toISOString(),
//   },
//   {
//     id: 2,
//     title: "Education Experience Survey",
//     slug: "education-experience",
//     author: "Sosioloji",
//     body: "<p>Share your experience with education in your country.</p>",
//     description: "We want to hear your story about education.",
//     category: "Survey",
//     image: "https://source.unsplash.com/random/400x300?education",
//     buttonLabel: "Start Survey",
//     buttonLink: "/survey/education-experience",
//     buttonBgColor: "#FFE6B4",
//     created_at: new Date().toISOString(),
//   },
// ];

// const SurveysPage = () => {
//   return (
//     <div className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {surveyList.map((item) => (
//         <SingleCard key={item.id} item={{ ...item, buttonLink: item.category === "Survey" ? `/survey/${item.slug}` : `/post/${item.slug}` }} />
//       ))}
//     </div>
//   );
// };

// export default SurveysPage;



import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PageWrapper } from "../components/PageWrapper";
import SurveyList from "../components/SurveyList";

const SurveyPage = () => {
  return (
    <PageWrapper>

    <div className="max-w-7xl mx-auto px-8 md:px-12">
      <Navbar />
      
      <SurveyList />
      <Footer />
    </div>
    </PageWrapper>
  );
};

export default SurveyPage;
