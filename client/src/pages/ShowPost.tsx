import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getPost} from "../services/PostService";

export default function ShowPost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getPost(Number(id)).then(response => {
                setTitle(response.data.title);
                setBody(response.data.body);
            }).catch(error => {
                console.error("Error fetching post:", error);
            });
        }
    },[id]);

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Show Post</h1>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Back
        </Link>
      </div>
      <div className="min-w-full bg-white shadow rounded border-2">
        
        <div key={id} className="p-4 border-b last:border-b-0">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{body}</p>
          <Link
            to={`/posts/${id}`}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
