// src/pages/Blog.tsx
// import React from 'react'
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { PageWrapper } from '../utils/motionWrapper'

const Blog = () => {
  const { slug } = useParams();

  return (
    <PageWrapper>
      {/* Fixed background image */}
      <div className="bg" />

        {/* Gradient fade-out overlay */}
  <div className="fade-bottom" />

      {/* Content section */}
      <section className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="p-6">
            <div className="max-w-5xl mx-auto px-8 md:px-12">
              <h1 className="text-2xl font-semibold">Blog Post: {slug}</h1>
              <p className="mt-4 text-gray-600">
                Full content for blog ID: {slug} goes here...
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </PageWrapper>
  );
};

export default Blog;
