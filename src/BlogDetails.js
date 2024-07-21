
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useNavigate } from 'react-router-dom';
import LikeButton from './Likebutton';

const BlogDetails = () => {
 

    const { id } = useParams();
    const navigate = useNavigate();
    const { blogs: blog, isPending, error } = useFetch("https://cozy-squirrel-b2befd.netlify.app/blogs/" + id);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            fetch("https://cozy-squirrel-b2befd.netlify.app/blogs/" + blog.id, {
                method: 'DELETE'
            })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error deleting blog:", error);
                alert("Failed to delete blog. Please try again.");
            });
        }
    }

    return (
        <div className="blog-details p-4 max-w-4xl mx-auto">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className="border border-gray-200 p-6 rounded-lg bg-white shadow-md">
                {blog.imageUrl && (
            <img
              src={blog.imageUrl} alt="img"
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
          )}
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-start mt-5">{blog.title}</h2>
                    <p className="text-lg text-gray-700 mb-2 italic text-start">Written by {blog.author}</p>
                    <div className="blog-body text-gray-800 leading-relaxed mt-4 space-y-4 text-justify">
                        {blog.body.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <button 
                        onClick={handleDelete} 
                        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-medium text-lg mt-6"
                    >
                        Delete
                    </button>
                    <LikeButton blogId={blog.id} />
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
