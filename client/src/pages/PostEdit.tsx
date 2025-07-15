import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { updatePost, getPost} from "../services/PostService";

export default function PostEdit() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();
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

    const SubmitEvent = (e: React.FormEvent) => {
        e.preventDefault();
        updatePost( Number(id), {
            title: title, 
            body: body, 
            created_at: new Date().toISOString(), 
            updated_at: new Date().toISOString()
        }).then(() => navigate("/"));
    }
  return (
    <>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
            <form onSubmit={SubmitEvent} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter post title"
                    />
                </div>
                <div>
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                        Body
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        rows={4}
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter post body"
                    ></textarea>
                </div>
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                    <Link to="/"
                        type="button"
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
}
