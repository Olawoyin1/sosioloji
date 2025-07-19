// src/pages/SurveyFormPage.tsx
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SurveyFormPage = () => {
  const { slug } = useParams();

  return (
    <PageWrapper>
        <section>
            <Navbar />

    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Survey: {slug?.replace("-", " ")}</h1>
      {/* Placeholder for dynamic Formik form */}
      <p className="text-gray-600">Survey form for "{slug}" will be loaded here.</p>
    </div>
    <Footer />
        </section>
    </PageWrapper>
  );
};

export default SurveyFormPage;