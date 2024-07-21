import { useState, useEffect } from "react"

const useFetch=(url)=>{
    const [blogs,setBlogs]=useState(null)
    const [isPending, setIsPending]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
         if(!res.ok){
             throw Error("could not fetch data")
         }
         return res.json();
        })
        .then((data)=>{  
         setBlogs(data)
         setIsPending(false)
         setError(null)
        })
        .catch((err)=>{
         setIsPending(false)
         setError(err.message)
        })
     },[url]);
     return {blogs,isPending,error}
}
export default useFetch