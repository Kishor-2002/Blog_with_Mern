import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,useLocation } from 'react-router-dom';

const EditPost = () => {
    const [post, setPost] = useState({ title: '', body: '' });
    const navigate = useNavigate();
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    useEffect(() => {
        // Fetch the post details when the component mounts
        const fetchPost = async () => {
            try {
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

    const handleUpdate = async (event) => {
        event.preventDefault();
            const response = await fetch(`/route/edit-post/${postId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post),
            });
            // Redirect to the post detail page or another page
            if(response.ok)
                navigate(`/dashboard`);
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await fetch(`/route/delete-post/${postId}`, {
                    method: 'DELETE',
                });
                // Redirect to the posts list or another page after deletion
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    return (
        <div>
            <a href="/dashboard">&larr; Back</a>
            <div className="admin-title">
                <h2>View / Edit Post</h2>
                <button onClick={handleDelete} className="btn-delete btn">
                    Delete
                </button>
            </div>

            <form onSubmit={handleUpdate}>
                <label htmlFor="title"><b>Title</b></label>
                <input
                    type="text"
                    placeholder="Post Title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                />

                <label htmlFor="body"><b>Content</b></label>
                <textarea
                    name="body"
                    cols="50"
                    rows="10"
                    value={post.body}
                    onChange={handleChange}
                />

                <input type="submit" value="Update" className="btn" />
            </form>
        </div>
    );
};

export default EditPost;
