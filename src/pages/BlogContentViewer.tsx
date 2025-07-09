// ...imports remain unchanged
import React, { useState, useEffect, useRef } from "react";
import { CardItem } from "../data/Types";
import BlogHero from "../blog/BlogHero";
import Share from "../blog/Share";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { BiSolidQuoteAltRight } from "react-icons/bi";

type BlogContentViewerProps = CardItem;

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

const parseSectionsFromHtml = (html: string, headingTag = "h1") => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headings = Array.from(doc.querySelectorAll(headingTag));
  if (headings.length === 0) {
    return [{ id: "full-content", title: "Content", content: html }];
  }

  const sections = headings.map((heading, i) => {
    const id = heading.id || slugify(heading.textContent || `section-${i + 1}`);
    heading.id = id;
    const sectionContentNodes = [];
    let sibling = heading.nextSibling;
    while (sibling && sibling.nodeName.toLowerCase() !== headingTag.toLowerCase()) {
      sectionContentNodes.push(sibling);
      sibling = sibling.nextSibling;
    }

    const container = document.createElement("div");
    sectionContentNodes.forEach((node) => container.appendChild(node.cloneNode(true)));

    return {
      id,
      title: heading.textContent || `Section ${i + 1}`,
      content: container.innerHTML,
    };
  });

  return sections;
};

const getFirstParagraph = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const p = doc.querySelector("p");
  return p ? p.outerHTML : "";
};

const removeFirstParagraph = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const p = doc.querySelector("p");
  if (p) p.remove();
  return doc.body.innerHTML;
};

// ✅ NEW — process rest content: wrap images + insert blogContentVideo after 4th <p>
const processContent = (html: string, blogContentVideo?: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("img").forEach((img) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex justify-center my-4";
    img.classList.add("max-w-full", "h-auto", "shadow", "rounded");
    img.parentNode?.insertBefore(wrapper, img);
    wrapper.appendChild(img);
  });

  const paragraphs = doc.querySelectorAll("p");
  if (blogContentVideo && paragraphs.length >= 4) {
    const videoWrapper = document.createElement("div");
    videoWrapper.innerHTML = `
      <video controls class="w-full rounded-lg shadow mt-6 mb-6" preload="metadata">
        <source src="${blogContentVideo}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
    const fourthParagraph = paragraphs[3];
    fourthParagraph?.parentNode?.insertBefore(videoWrapper, fourthParagraph.nextSibling);
  }

  return doc.body.innerHTML;
};

const BlogContentViewer: React.FC<BlogContentViewerProps> = ({
  id,
  title,
  author,
  created_at,
  image,
  body,
  quote,
  video,
  contentImages = [],
  blogContentVideo,
  slug,
  description,
  category,
  tag,
  subTag,
  subTagC,
  buttonLabel = "Read More",
  buttonLink = "#",
  buttonBgColor = "#FFD682",
}) => {
  const [sections, setSections] = useState<{ id: string; title: string; content: string }[]>([]);
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parsed = parseSectionsFromHtml(body);
    setSections(parsed);
    setActiveSectionId(parsed[0]?.id || "");
  }, [body]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setTocOpen(false);
      }
    };
    if (tocOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [tocOpen]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const blog = {
    id, title, author, created_at, image, slug, body, description, category, tag, subTag, subTagC,
    buttonLabel, buttonLink, buttonBgColor,
  };

  const activeSection = sections.find((s) => s.id === activeSectionId);
  const firstParagraph = activeSection ? getFirstParagraph(activeSection.content) : "";
  const restContent = activeSection
    ? processContent(removeFirstParagraph(activeSection.content), blogContentVideo)
    : "";

  return (
    <article className="prose prose-lg max-w-3xl mx-auto px-8 sm:px-6">
      <BlogHero blog={blog} height="medium" />

      <h1 className="text-2xl sm:text-4xl text-center font-semibold mt-6">{title}</h1>

      <div className="flex w-fit mx-auto mt-6 gap-8 items-center mb-10 justify-center">
        <p className="text-base text-gray-600">{new Date(created_at).toDateString()}</p>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden bg-black/30 rounded-full">
            <img
              src="https://th.bing.com/th/id/OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa?w=210"
              alt="Author"
              className="object-cover"
            />
          </div>
          <p className="font-bold">{author}</p>
        </div>
      </div>

      {/* TOC Accordion */}
      <div className="mb-6 w-full border-b border-gray-300" ref={tocRef}>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-full py-2 text-left flex justify-between items-center"
        >
          <span className="text-gray-800 font-medium">Table of Contents</span>
          <svg
            className={`w-5 h-5 ml-2 transition-transform duration-300 ${tocOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {tocOpen && (
            <motion.ul
              key="toc-accordion"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {sections.map(({ id, title }) => (
                <li
                  key={id}
                  className={`px-4 py-2 text-sm cursor-pointer ${
                    activeSectionId === id ? "font-semibold" : ""
                  }`}
                  onClick={() => {
                    setActiveSectionId(id);
                    setTocOpen(false);
                  }}
                >
                  {title}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Section Content */}
      <AnimatePresence>
        {activeSection && (
          <motion.section
            key={activeSection.id}
            id={activeSection.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="prose max-w-none  mb-10"
            tabIndex={0}
          >
            <h2 className="mb-3 text-2xl font-bold">{activeSection.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: firstParagraph }} className="bf" />
            {quote?.trim() && (
        <blockquote className="relative min-h-50 flex items-center justify-center text-sm md:text-[17px] leading-8 p-10  rounded text-gray-700 my-8">
          {quote.trim()}
          <BiSolidQuoteAltRight className="absolute text-gray-300  text-7xl bottom-4 z-[-1] right-4" />
        </blockquote>
      )}
            <div dangerouslySetInnerHTML={{ __html: restContent }} className="bf"/>
          </motion.section>
        )}
      </AnimatePresence>

      {video && (
        <video controls className="w-full rounded-lg shadow mt-7 mb-6" preload="metadata">
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Image gallery with lightbox */}
      {contentImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {contentImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <div
          className="fixed overflow-hidden inset-0 bg-[#FFF6E6] z-50 flex p-1 items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex flex-col items-end"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === 0 ? contentImages.length - 1 : lightboxIndex - 1
                )
              }
              className="fixed left-0 top-0 bottom-0 flex items-center justify-center w-18 font-bold text-xl md:text-4xl z-50"
            >
              <FaArrowLeftLong />
            </button>

            <motion.img
              key={contentImages[lightboxIndex]}
              src={contentImages[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
              className="max-h-[90vh] w-[600px] object-contain shadow"
            />

            <div className="mt-3 text-lg px-3 py-1">{lightboxIndex + 1} of {contentImages.length}</div>

            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === contentImages.length - 1 ? 0 : lightboxIndex + 1
                )
              }
              className="fixed right-0 top-0 bottom-0 flex items-center justify-center w-16 text-xl md:text-4xl z-50"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      )}

      <Share />
    </article>
  );
};

export default BlogContentViewer;
