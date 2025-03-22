import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';


const Post = () => {
  const [post, setPost] = useState({ title: '', body: '' });
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

  useEffect(() => {
        // Fetch the post details when the component mounts
        const fetchPost = async () => {
            try {
                // console.log(location.pathname.split("/")[2])
                const response = await fetch(`/route/post/${postId}`); // Adjust the endpoint as needed
                const data = await response.json();
                console.log(data)
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error.message);
            }
        };

        fetchPost();
    }, [postId]);  
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Post
