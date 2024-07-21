
import BlogList from "./BlogList";
import useFetch from "./UseFetch.js"


const Home = () => { 
    const{blogs,isPending,error}=useFetch("https://172.20.0.165:5000/blogs")
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