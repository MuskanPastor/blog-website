
/*import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
   setTimeout(()=>{
    fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then(() => {
          console.log("New blog added");
          setIsPending(false);
          setAlertMessage("Blog added successfully!");
          setTimeout(() => {
            setAlertMessage("");
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          console.error("Error adding new blog:", error);
          setIsPending(false);
          setAlertMessage("Failed to add blog. Please try again.");
          setTimeout(() => {
            setAlertMessage("");
          }, 2000);
        });
    },2000)
    };

  

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Add a New Blog</h2>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">Blog Title:</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-pink-600 transition duration-300"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">Blog Body:</label>
              <textarea
                className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-pink-600 transition duration-300"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">Blog Author:</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-pink-600 transition duration-300"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-medium text-lg w-full transition duration-300"
              disabled={isPending}
            >
              {isPending ? "Adding Blog..." : "Add Blog"}
            </button>
          </form>
          {alertMessage && (
            <div className="mt-4 text-center text-gray-800">
              <p className="bg-green-200 text-green-700 py-2 px-4 rounded-lg">{alertMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    let imageUrl = "";

    if (image) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'blog_images'); // Replace with your upload preset

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dfmuz3qow/image/upload', // Replace with your cloud name
          formData
        );
        imageUrl = response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        setAlertMessage("Failed to upload image. Please try again.");
        setTimeout(() => {
          setAlertMessage("");
        }, 2000);
        setIsPending(false);
        return;
      }
    }

    const blog = { title, body, author, imageUrl };

    setTimeout(() => {
      fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then(() => {
          console.log("New blog added");
          setIsPending(false);
          setAlertMessage("Blog added successfully!");
          setTimeout(() => {
            setAlertMessage("");
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          console.error("Error adding new blog:", error);
          setIsPending(false);
          setAlertMessage("Failed to add blog. Please try again.");
          setTimeout(() => {
            setAlertMessage("");
          }, 2000);
        });
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Blog</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Title:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Body:</label>
            <textarea
              className="border border-gray-300 rounded-lg px-4 py-3 w-full h-48 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Author:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Image (optional):</label>
            <input
              type="file"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              onChange={handleImageChange}
            />
          </div>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium text-lg w-full transition duration-300"
            disabled={isPending}
          >
            {isPending ? "Adding Blog..." : "Add Blog"}
          </button>
        </form>
        {alertMessage && (
          <div className="mt-6 text-center">
            <p className="bg-green-200 text-green-700 py-3 px-6 rounded-lg text-lg">{alertMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
