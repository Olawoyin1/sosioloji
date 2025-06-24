// AuthorPage.tsx
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import SingleCard from "../components/SingleCard";
import SkeletonCard from "../components/SkeletonCard";
import { CardItem } from "../data/Types";

const fetchPosts = async (): Promise<CardItem[]> => {
  const res = await axios.get("https://sosoiloji.onrender.com/api/posts/");
  return res.data;
};

const AuthorPage = () => {
  const { author } = useParams<{ author: string }>();
  const queryClient = useQueryClient();

  const cachedPosts = queryClient.getQueryData<CardItem[]>(["all-posts"]);

  const {
    data: fetchedPosts,
    isLoading,
    isFetching,
  } = useQuery<CardItem[]>({
    queryKey: ["all-posts"],
    queryFn: fetchPosts,
    enabled: !cachedPosts,
    staleTime: 90 * 60 * 1000, // 1 hour 30 minutes
  });

  const posts: CardItem[] | undefined = cachedPosts ?? fetchedPosts;

  const filteredPosts = posts?.filter(
    (post) => post.author?.toLowerCase() === author?.toLowerCase()
  ) ?? [];

  if (isLoading || isFetching) {
    return (
      <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!posts || filteredPosts.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No posts found by {author}.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Posts by {author}</h2>

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <SingleCard
              key={post.id}
              item={{
                ...post,
                description: post.body.slice(0, 150) + "...",
                buttonLabel: "Read More",
                buttonLink: `/post/${post.id}`,
                buttonBgColor: "#E8D4C3",
                subTag: post.tag,
                subTagC: post.subTag,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;