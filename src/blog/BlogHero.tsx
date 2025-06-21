interface BlogPost{
  id: number;
  title: string;
  description: string;
  category: string;
  // categoryLink: string;
  image?: string;
  buttonLabel: string;
  buttonLink: string;
  buttonBgColor: string;
  slug?: string;
  subTag?: string;
  subTagC?: string;
}

interface BlogHeroProps {
  blog: BlogPost;
  height?: "small" | "medium" | "large"; 
}

const BlogHero = ({ blog, height = "medium" }: BlogHeroProps) => {
   const heightClass = {
    small: "h-[300px]",
    medium: "h-[440px]",
    large: "h-[500px]",
  }[height];
  return (
    <div className="relative shrink-0">
      <img
        src={blog.image}
        alt={blog.title}
        className={`relative w-full bg-[#FFF0D3] rounded-[15px] object-cover justify-center gap-0 shadow-md sm:${heightClass} h-[250px]`}
        id="tag-box"
      />

      <span className="absolute border border-gray-700 rounded-[15px] opacity-50 z-[-1] bottom-[-7px] right-2 sm:bottom-[-14px] sm:right-4 w-full h-full" />
    </div>
  );
};

export default BlogHero;
