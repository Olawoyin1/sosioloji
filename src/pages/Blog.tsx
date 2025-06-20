import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../blog/blogHero";
import { dataCard } from "../data/cardData";
import { useState } from "react";
import Qoute from "../blog/Qoute";
import ImageGallery from "../blog/ImageGallery";
import Share from "../blog/Share";

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();

  const [openAccordion, setOpenAccordion] = useState(false);

  const blog = dataCard.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <PageWrapper>
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
          <p className="mt-4 text-gray-600">
            We couldn't find a blog post with slug: <strong>{slug}</strong>
          </p>
        </div>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Fixed background image */}
      <div className="bg" />
      <div className="fade-bottom" />

      <section className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto px-2 md:px-12">
            <div className="">
              <BlogHero blog={blog} />

              <h1 className="text-2xl sm:text-4xl text-center font-semibold mt-6">
                {blog.title}
              </h1>
              <div className="flex w-fit mx-auto mt-8 gap-10 items-center justify-center ">
                <p className="text-lg text-gray-600">Apr 26, 2019</p>
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

            {/* Accordion: Table of Content */}
            <div className="mt-6 border-b overflow-hidden">
              <button
                onClick={() => setOpenAccordion(!openAccordion)}
                className="w-full flex justify-between items-center py-3 transition-colors font-medium text-left"
              >
                <span>Table of Contents</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openAccordion ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openAccordion && (
                <ul className="pb-3 space-y-2 text-gray-700 text-sm">
                  <li className="hover:underline cursor-pointer">Section 1</li>
                  <li className="hover:underline cursor-pointer">Section 2</li>
                </ul>
              )}
            </div>

            <div>
              <p className="pf leading-10 font-light my-9">
                Ghost comes with a beautiful default theme called Casper, which
                is designed to be a clean, readable publication layout and can
                be adapted for most purposes. However, Ghost can also be
                completely themed to suit your needs. Rather than just giving
                you a few basic settings which act as a poor proxy for code, we
                just let you write code.
              </p>

              <p className="pf leading-10 font-light">
                Ghost comes with a beautiful default theme called Casper, which
                is designed to be a clean, readable publication layout and can
                be adapted for most purposes. However, Ghost can also be
                completely themed to suit your needs. Rather than just giving
                you a few basic settings which act as a poor proxy for code, we
                just let you write code.
              </p>
            </div>

            <ImageGallery />

            <Qoute />

            <div>
              <p className="pf leading-10 font-light">
                Ghost comes with a beautiful default theme called Casper, which
                is designed to be a clean, readable publication layout and can
                be adapted for most purposes. However, Ghost can also be
                completely themed to suit your needs. Rather than just giving
                you a few basic settings which act as a poor proxy for code, we
                just let you write code. <br />
                <br />
                Ghost comes with a beautiful default theme called Casper, which
                is designed to be a clean, readable publication layout and can
                be adapted for most purposes. However, Ghost can also be
                completely themed to suit your needs. Rather than just giving
                you a few basic settings which act as a poor proxy for code, we
                just let you write code.
              </p>
            </div>

            <div className="pf font-light leading-10 md:p-10">
              <li>default.hbs is the main template file</li>
              <li>default.hbs is the main template file</li>
              <li>default.hbs is the main template file</li>
              <li>default.hbs is the main template file</li>
            </div>

            <Share />
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default Blog;
