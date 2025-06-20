interface BlogPost{
  id: number;
  title: string;
  description: string;
  category: string;
  categoryLink: string;
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
}

const BlogHero = ({ blog }: BlogHeroProps) => {
  return (
    <div className="relative">
      <img
        src={blog.image}
        alt={blog.title}
        className="relative w-full bg-[#FFF0D3] rounded-[15px] object-cover justify-center gap-0 shadow-md md:h-[440px] h-auto"
        id="tag-box"
      />

      <span className="absolute border border-gray-700 rounded-[15px] opacity-50 z-[-1] bottom-[-14px] right-4 w-full h-full" />
    </div>
  );
};

export default BlogHero;
