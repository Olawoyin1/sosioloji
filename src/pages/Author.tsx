import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PageWrapper } from "../components/PageWrapper";

const Author = () => {
  return (
    <PageWrapper>

    <section className="bg">

        <Navbar />

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white p-6 rounded-xl shadow-md border border-gray-200">
      {/* Left: Author Image */}
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Olawoyin Gbolahan"
          className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 shadow"
          />
      </div>

      {/* Right: Author Info */}
      <div className="md:col-span-2 space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Olawoyin Gbolahan</h2>
        <p className="text-gray-700 text-sm">
          Gbolahan is a writer and software developer exploring the intersection
          of sociology, culture, and modern technology. He writes with purpose
          and curiosity.
        </p>
      </div>
    </div>

    <Footer />
    </section>
    </PageWrapper>
  );
};

export default Author;
