/*import { Link } from "react-router-dom";
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
  
    return ( 
      <div className="blog-list bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white bg-pink-600 py-2 px-4 mb-8 rounded-lg text-center lg:w-fit lg:mx-auto md:w-fit md:mx-auto sm:w-fit sm:mx-auto">{title}</h1>
        
        {blogs.map((blog) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 " key={blog.id}>
            <div className="p-6">
            <Link to={`/blogs/${blog.id}`}>
            {blog.imageUrl && ( <div className="mr-4">
                  <img src={blog.imageUrl} className="w-24 h-24 rounded-full" />
                </div>
            )}
              <div>
           
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-start mt-5 ">{blog.title}</h2>
              <p className="text-lg text-gray-700 mb-4 text-start italic">Written by {blog.author}</p>
              </div>
            </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;*/
  import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  return ( 
    <div className="blog-list bg-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white bg-pink-600 py-2 px-4 mb-8 rounded-lg text-center w-fit mx-auto ">{title}</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-7">
        {blogs.map((blog) => (
          <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden mb-6" key={blog.id}>
            <div className="p-6">
              <Link to={`/blogs/${blog.id}`}>
                {blog.imageUrl && (
                  <div className="mr-4">
                    <img src={blog.imageUrl} alt={blog.title} className="w-24 h-24 rounded-full" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 text-start mt-5">{blog.title}</h2>
                  <p className="text-lg text-gray-700 mb-4 text-start italic">Written by {blog.author}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

  