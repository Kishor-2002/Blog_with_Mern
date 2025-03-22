import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    // Define state for form fields
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();
    
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Optionally, you can send a POST request here
        const response = await fetch('/route/add-post', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body }),
            })
        if(response.ok)
            // window.('Post Added')
            alert("Post Added");
            navigate(`/dashboard`);
    };

    return (
        <div>
            <a href="/dashboard">&larr; Back</a>
            <div className="admin-title">
                <h2>Add New Post</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title"><b>Title</b></label>
                <input type="text" placeholder="Post Title" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}
                />

                <label htmlFor="body"><b>Content</b></label>
                <textarea name="body" cols="50" rows="10" value={body} onChange={(e)=> setBody(e.target.value)}
                        />
                <a href="/dashboard">
                    <input type="submit" value="Add" className="btn" />
                </a>
            </form>
        </div>
    );
};

export default AddPost;
