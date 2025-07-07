import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NormalButton from "../components/NormalButton";
import { PageWrapper } from "../components/PageWrapper";

const Author = () => {
  return (
    <PageWrapper>
      <section className="bg">
        <Navbar />

        <div className="max-w-5xl mx-auto px-8 md:px-0 py-3 md:py-12 flex flex-col md:flex-row items-center gap-7 md:gap-20">
          {/* Left: Author Image with Decorative Circle */}
          <div className="w-full md:w-2/4 flex justify-center md:justify-start">
            <div className="relative w-80 h-80 md:w-full md:h-100">
              <img
                src="../../Images/eleven.webp"
                alt="Author"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Decorative circle */}
              <span className="absolute w-full h-full rounded-full bottom-[-7px] left-[-8px] border border-gray-400 z-[1]" />
            </div>
          </div>

          {/* Right: Author Info */}
          <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
            <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-gray-900">
              Hi, I'm Jonathan Doe 👋
            </h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              I'm a digital nomad on the move. I'm passionate about web development and creating interactive experiences. This is my space, Edger, where I share my adventures and personal thoughts.
            </p>

            <p className="text-gray-700 text-sm sm:text-base">
              Join my newsletter and don’t miss any update:
            </p>

            <div className="bg-white rounded-full px-4  sm:px-5 max-w-[400px] mx-auto md:mx-0 flex items-center gap-4  sm:flex-nowrap">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-full text-sm w-full focus:outline-none"
              />
              <div className="shrink-0">
                <NormalButton
                  label="Get Started"
                  bgColor="#F7C6D0"
                  color="#000"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </PageWrapper>
  );
};

export default Author;
