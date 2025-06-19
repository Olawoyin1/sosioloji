import Cards from "../components/Cards";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import { PageWrapper } from "../components/PageWrapper";

const Home = () => {
    return (
    <PageWrapper disableEntryAnimation>
      {/* Fixed background image */}
      <div className="bg" />


      {/* Content section */}
      <section className="relative z-10">
        <Navbar />
        <div className="container">
          <div className="mb-20">

          <ImageSlider />
          </div>
          <div className="">
            <Cards />
          </div>
        </div>
      </section>

      {/* Bottom padding */}
      {/* <div className="min-h-[900px]" /> */}
    </PageWrapper>
  );
};

      export default Home;