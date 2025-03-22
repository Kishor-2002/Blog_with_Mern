import React, { useState, useEffect } from "react";
import { Routes,Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const Dashboard = ({loggedIn,setLoggedIn}) => {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts from the API or other source
    const fetchPosts = async () => {
      if(loggedIn){
        try {
          const response = await fetch("/route"); // Adjust the endpoint as needed
          if(!response.ok){
            setLoggedIn(false)
          }
          const data = await response.json();
          console.log(data)
          setPosts(data);
        } catch (error) {
          console.error("Error fetching posts:"+error.message);
        }
      }
    };
    fetchPosts();
  }, []);



  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await fetch(`/route/delete-post/${postId}`, {
          method: "DELETE",
        });
        // Remove the deleted post from the state
        setPosts(posts.filter((post) => post._id !== postId));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div>
      {/* Index.js cpode start */}
        <div className="author">
            <h1 className="author__heading">Hi, I am Kishor.</h1>
            <p className="author__body">Web developer and content creator.</p>
        </div>

        <img src="" alt="person looking out through window" className="hero-image" width="981" height="528" />
      <div className="admin-title">
        <h2>Posts</h2>
          <a href="/add-post" className="button">
            + Add New
          </a>
      </div>

      <ul className="admin-posts">
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/post/${post._id}`} dangerouslySetInnerHTML={{ __html: `${post.title} &nearr;` }}></a>
            <div className="admin-post-controls">
              <a href={`/edit-post/${post._id}`} className="btn">
                Edit
              </a>
              <button
                onClick={() => handleDelete(post._id)}
                className="btn-delete btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
