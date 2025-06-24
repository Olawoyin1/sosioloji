// DashboardPostList.tsx (Integrated into DashboardPage)
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { CardItem } from "../data/Types";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";

const fetchPosts = async () => {
  const res = await axios.get("https://sosoiloji.onrender.com/api/posts/");
  return res.data;
};

const deletePost = async (id: number) => {
  await axios.delete(`https://sosoiloji.onrender.com/api/posts/${id}/`);
};

const DashboardPostList = () => {
  const queryClient = useQueryClient();
  const [deleting, setDeleting] = useState<number | null>(null);

  const { data: posts, isLoading, error } = useQuery<CardItem[]>({
    queryKey: ["all-posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 90, // 1hr 30min
  });

  const handleDelete = async (id: number) => {
  if (!confirm("Are you sure you want to delete this post?")) return;
  setDeleting(id);
  try {
    await deletePost(id);
    queryClient.invalidateQueries({ queryKey: ["all-posts"] }); // ✅ fix here
  } catch (err) {
    console.error(err);
    alert("Failed to delete post");
  } finally {
    setDeleting(null);
  }
};


  if (isLoading) return <p className="text-center py-10">Loading dashboard...</p>;
  if (error || !posts) return <p className="text-red-500 text-center">Failed to load dashboard</p>;

  const videoPosts = posts.filter((post) => post.category === "Video");
  const quotePosts = posts.filter((post) => post.category === "Quotes");
  const uniqueAuthors = Array.from(new Set(posts.map((post) => post.author)));

  const summary = [
    {
      label: "Total Posts",
      value: posts.length,
      to: "/dashboard/posts",
    },
    {
      label: "Video Posts",
      value: videoPosts.length,
      to: "/dashboard/posts?category=Video",
    },
    {
      label: "Quote Posts",
      value: quotePosts.length,
      to: "/dashboard/posts?category=Quotes",
    },
    {
      label: "Authors",
      value: uniqueAuthors.length,
      to: "/dashboard/authors",
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summary.map((item) => (
          <Link
            to={item.to}
            key={item.label}
            className="bg-white rounded-2xl shadow-md p-6 hover:bg-gray-100 transition border border-gray-200"
          >
            <p className="text-gray-600 text-sm mb-1">{item.label}</p>
            <p className="text-3xl font-bold text-black">{item.value}</p>
          </Link>
        ))}
      </div>

      <Link
        to="/create"
        className="inline-block mb-6 bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
      >
        ➕ Create New Post
      </Link>

      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 border-b">Title</th>
              <th className="text-left p-2 border-b hidden sm:table-cell">Author</th>
              <th className="text-left p-2 border-b hidden md:table-cell">Category</th>
              <th className="text-left p-2 border-b hidden md:table-cell">Tag</th>
              <th className="text-left p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="p-2 max-w-xs truncate">{post.title}</td>
                <td className="p-2 hidden sm:table-cell">{post.author}</td>
                <td className="p-2 hidden md:table-cell">{post.category}</td>
                <td className="p-2 hidden md:table-cell">{post.tag}</td>
                <td className="p-2 flex gap-4 items-center text-sm">
                  <Link
                    to={`/edit/${post.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deleting === post.id}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    {deleting === post.id ? "..." : <IoTrashOutline size={18} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPostList;
