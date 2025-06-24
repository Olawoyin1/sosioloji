import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "../api/Blog";
import { PageWrapper } from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../blog/BlogHero";
import parse, { Element } from "html-react-parser";
import InlineImageViewer from "../utils/InlineImageViewer";
import Share from "../blog/Share";
import { CardItem } from "../data/Types";

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery<CardItem[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    // staleTime: 1000 * 60 * 5,
    staleTime: 1.5 * 60 * 60 * 1000, // 1 hour 30 minutes in milliseconds

  });

  const blog = posts.find((post) => post.slug.toString() === slug);

  if (isLoading) {
    return (
      <PageWrapper>
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          {/* <h1 className="text-3xl font-bold text-gray-600">Loading...</h1> */}
        </div>
        <Footer />
      </PageWrapper>
    );
  }

  if (isError || !blog) {
    return (
      <PageWrapper>
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
          <p className="mt-4 text-gray-600">SLUG: <strong>{slug}</strong></p>
        </div>
        <Footer />
      </PageWrapper>
    );
  }

  const transformedBody = parse(blog.body, {
    replace: (node) => {
      if (node instanceof Element && node.name === "img") {
        const src = node.attribs.src;
        const alt = node.attribs.alt || "blog image";
        return <InlineImageViewer src={src} alt={alt} />;
      }
    },
  });

  return (
    <PageWrapper>
      <Navbar />
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto px-4 md:px-12">
            <BlogHero
              blog={{ ...blog, buttonLabel: "Read More", buttonBgColor: "#FFD682" }}
              height="medium"
            />
            <h1 className="text-2xl sm:text-4xl text-center font-semibold mt-6">
              {blog.title}
            </h1>
            <div className="flex w-fit mx-auto mt-8 gap-10 items-center justify-center">
              <p className="text-lg text-gray-600">
                {new Date(blog.created_at).toDateString()}
              </p>
              <div className="flex items-center gap-2">
                <div className="img h-8 w-8 sm:h-10 sm:w-10 overflow-hidden bg-black/30 rounded-full">
                  <img
                    src="https://th.bing.com/th/id/OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa?w=210"
                    alt="Author"
                    className="object-cover"
                  />
                </div>
                <p className="font-bold">{blog.author}</p>
              </div>
            </div>
            <div className="space-y-8 mt-8 pf leading-10 fl font-light">
              {transformedBody}
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
