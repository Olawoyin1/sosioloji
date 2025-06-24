// // Blog.tsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { PageWrapper } from "../components/PageWrapper";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import BlogHero from "../blog/BlogHero";
// import parse, { Element } from "html-react-parser";
// import InlineImageViewer from "../utils/InlineImageViewer";
// import Share from "../blog/Share";

// interface BlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   author: string;
//   body: string;
//   category: string;
//   tag: string;
//   subtag?: string;
//   image: string;
//   video?: string;
//   contentImages?: string[];
//   created_at: string;
// }

// const Blog = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [blog, setBlog] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [openAccordion, setOpenAccordion] = useState(false);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await fetch("https://sosoiloji.onrender.com/api/posts/");
//         const data: BlogPost[] = await res.json();
//         const found = data.find((post) => post.slug === slug);
//         setBlog(found || null);
//       } catch (err) {
//         console.error("Failed to fetch blog post:", err);
//         setBlog(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [slug]);

//   if (loading) {
//     return (
//       <PageWrapper>
//         <Navbar />
//         <div className="max-w-4xl mx-auto py-20 px-6 text-center">
//           <h1 className="text-3xl font-bold text-gray-600">Loading...</h1>
//         </div>
//         <Footer />
//       </PageWrapper>
//     );
//   }

//   if (!blog) {
//     return (
//       <PageWrapper>
//         <Navbar />
//         <div className="max-w-4xl mx-auto py-20 px-6 text-center">
//           <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
//           <p className="mt-4 text-gray-600">
//             We couldn't find a blog post with slug: <strong>{slug}</strong>
//           </p>
//         </div>
//         <Footer />
//       </PageWrapper>
//     );
//   }

//   const transformedBody = parse(blog.body, {
//     replace: (node) => {
//       if (node instanceof Element && node.name === "img") {
//         const src = node.attribs.src;
//         const alt = node.attribs.alt || "blog image";
//         return <InlineImageViewer src={src} alt={alt} />;
//       }
//     },
//   });

//   return (
//     <PageWrapper>
//       <div className="bg" />
//       <div className="fade-bottom" />
//       <section className="relative z-10">
//         <Navbar />
//         <div className="max-w-7xl mx-auto px-4 md:px-12">
//           <div className="max-w-3xl mx-auto px-4 md:px-12">
//             <BlogHero
//               blog={{ ...blog, buttonLabel: "Read More", buttonBgColor: "#FFD682" }}
//               height="medium"
//             />

//             <h1 className="text-2xl sm:text-4xl text-center font-semibold mt-6">
//               {blog.title}
//             </h1>

//             <div className="flex w-fit mx-auto mt-8 gap-10 items-center justify-center">
//               <p className="text-lg text-gray-600">
//                 {new Date(blog.created_at).toDateString()}
//               </p>
//               <div className="flex items-center gap-2">
//                 <div className="img h-8 w-8 sm:h-10 sm:w-10 overflow-hidden bg-black/30 text-white flex justify-center items-center rounded-full">
//                   <img
//                     src="https://th.bing.com/th/id/OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
//                     className="object-cover"
//                     alt="Author"
//                   />
//                 </div>
//                 <p className="font-bold">{blog.author}</p>
//               </div>
//             </div>

//             <div className="mt-6 border-b overflow-hidden">
//               <button
//                 onClick={() => setOpenAccordion(!openAccordion)}
//                 className="w-full flex justify-between items-center py-3 transition-colors font-medium text-left"
//               >
//                 <span>Table of Contents</span>
//                 <svg
//                   className={`w-5 h-5 transition-transform duration-300 ${
//                     openAccordion ? "rotate-180" : "rotate-0"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {openAccordion && (
//                 <ul className="pb-3 space-y-2 text-gray-700 text-sm">
//                   <li className="hover:underline cursor-pointer">Section 1</li>
//                   <li className="hover:underline cursor-pointer">Section 2</li>
//                 </ul>
//               )}
//             </div>

//             <div className="space-y-8 mt-8 pf leading-10 fl font-light">
//               {transformedBody}
//             </div>

//             <Share />

            
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </PageWrapper>
//   );
// };

// export default Blog;



// // src/api/blog.ts
// import { BlogPost } from "../data/Types";

// export const fetchAllBlogs = async (): Promise<BlogPost[]> => {
//   const res = await fetch("https://sosoiloji.onrender.com/api/posts/");
//   if (!res.ok) throw new Error("Failed to fetch blog posts");
//   return res.json();
// };

// export const fetchBlogById = async (id: number): Promise<BlogPost> => {
//   const res = await fetch(`https://sosoiloji.onrender.com/api/posts/${id}/`);
//   if (!res.ok) throw new Error("Failed to fetch blog post");
//   return res.json();
// };



// src/api/blog.ts
import { CardItem } from "../data/Types";

export const fetchBlogPosts = async (): Promise<CardItem[]> => {
  const res = await fetch("https://sosoiloji.onrender.com/api/posts/");
  const data = await res.json();

  const cleanText = (html: string): string => {
    const tempEl = document.createElement("div");
    tempEl.innerHTML = html;
    return tempEl.textContent?.replace(/\s+/g, " ").trim() || "";
  };

  const CATEGORY_COLORS: Record<string, string> = {
    Inspiration: "#D5AAFF",
    Qoute: "#FAD9E6",
    Survey: "#FFD682",
    Article: "#E8D4C3",
    Video: "#B8F2E6",
  };

  return data.map((post: any) => {
    const color = CATEGORY_COLORS[post.category] || "#FFE6B4";
    const plainText = cleanText(post.body).slice(0, 180) + "...";

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      author: post.author,
      body: post.body,
      description: plainText,
      category: post.category,
      tag: post.tag,
      subTag: post.subtag,
      subTagC: post.subtag,
      image: post.image || "",
      video: post.video,
      contentImages: post.contentImages || [],
      buttonLabel: "Read More",
      buttonLink: `/post/${post.slug}`,
      buttonBgColor: color,
      created_at: post.created_at,
    };
  });
};
