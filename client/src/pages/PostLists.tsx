import { useEffect, useState } from "react"
import type { Post } from "../types/Post";
import { getPosts, deletePost } from "../services/PostService";
import { Link } from "react-router-dom";

export default function PostLists() {
    const [posts, setPosts] = useState<Post[]>([]);
    const handleDelete = (id: number) => {
      if (confirm("Are you sure you want to delete this post?")) {
        deletePost(id).then(() => {
          setPosts(posts.filter(post => post.id !== id));
          // alert("Post deleted successfully.");
        }).catch(error => {
          console.error("Error deleting post:", error);
          // alert("Failed to delete post.");
        });
      }
    }
    useEffect(() => {
      getPosts().then(response => {
        setPosts(response.data);
      }).catch(error => {
        console.error("Error fetching posts:", error);
      });
    }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Posts</h1>
          <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Create Post
          </Link>
        </div>
        <table className="min-w-full bg-white shadow rounded border-2">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Title</th>
              <th className="py-2 px-4 border-b text-left">Body</th>
              <th className="py-2 px-4 border-b text-left flex justify-center">Actions</th>
            </tr>
          </thead>
          <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-4 px-6 text-center">No posts available</td>
            </tr>
          ) : (
            posts.map((post: Post) => (
              <tr key={post.id}>
                <td className="py-2 px-4 border-b">{post.id}</td>
                <td className="py-2 px-4 border-b">{post.title}</td>
                <td className="py-2 px-4 border-b">{post.body}</td>
                <td className="py-2 px-4 border-b space-x-2 flex justify-center">
                  <Link to={`/show/${post.id}`} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">Show</Link>
                  <Link to={`/edit/${post.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Edit</Link>
                  <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
                </td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
    </>
  )
}
