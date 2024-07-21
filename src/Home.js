
import BlogList from "./BlogList";
import useFetch from "./UseFetch.js"


const Home = () => { 
    const{blogs,isPending,error}=useFetch("https://cozy-squirrel-b2befd.netlify.app/blogs")
    return ( 
        <div className="home">
          {
          error && <div>{error}</div>
          }
          {isPending && <div>Loading....</div>}
          {blogs && <BlogList blogs={blogs} title="ALL BLOGS!"/>}
         
        </div>
     );

} 
 
export default Home; 