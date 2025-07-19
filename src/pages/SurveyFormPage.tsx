
// src/pages/SurveyFormRouter.tsx
import { useParams } from "react-router-dom";
import { surveyList } from "../data/FormsData";
import YouthPoliticsSurvey from "../Forms/YouthPoliticsSurvey";
import EducationExperienceSurvey from "../Forms/EducationExperienceSurvey";

const SurveyFormRouter = () => {
  const { slug } = useParams();
  const survey = surveyList.find((s) => s.slug === slug);

  if (!survey) {
    return <div className="p-10 text-red-600 font-semibold">Survey not found</div>;
  }

  if (slug === "youth-politics") {
    return (
      <YouthPoliticsSurvey
        title={survey.title}
        author={survey.author}
        image={survey.image}
        created_at={survey.created_at}
      />
    );
  }

  if (slug === "education-experience") {
    return (
      <EducationExperienceSurvey
        title={survey.title}
        author={survey.author}
        image={survey.image}
        created_at={survey.created_at}
      />
    );
  }

  return <div className="p-10 text-red-600 font-semibold">Survey not found</div>;
};

export default SurveyFormRouter;
