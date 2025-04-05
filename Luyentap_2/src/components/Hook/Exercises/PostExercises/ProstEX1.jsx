import React, { useState, useEffect, useRef } from 'react'

const ProstEX1 = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editId, setEditId] = useState(null);

    const Focust1 = useRef();

    useEffect(()=> {
        fetchPosts();
    },[])

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);

        }catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    const addPost = async () => {
        if (title.trim() === '' || body.trim() === '') {
            alert('Please fill in all fields');
            return;
        }else{
            try {
                const newPost = {title, body};
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(newPost),
                });
                const data = await response.json();
                setPosts([...posts, data]);
                setTitle('');
                setBody(''); 
            } catch (error) {
                console.error('Error adding post:', error);   
            }
        }
    }

    const updatePost = async (id) => {
        try {
            const updatedPost = {title, body};
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedPost),
            });
            setPosts(posts.map(post => (post.id === id ? {...post, ...updatedPost} : post)));
            setTitle('');
            setBody('');
            setEditId(null);
        } catch (error) {
            console.error('Error updating post:', error);
            
        }
    }

    const handleEdit = (post) => {
        setTitle(post.title);
        setBody(post.body);
        setEditId(post.id);
        Focust1.current.focus();
    }

    const deletePost = async (id) => {
        try {
            alert('Are you sure you want to delete this post?');
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
            
        }
    }


    return (
        <div style={{
            padding: "40px",
            paddingRight: "60px",
            margin: "40px",
            backgroundColor: "#FFE4B5",
            width: "500px",
            margin:" auto",
        }}
        >
            <h1>Posts</h1>
            <div>
            <input
                ref={Focust1}
                type="text" 
                value={title} 
                placeholder='Enter title' 
                onChange={(e)=> setTitle(e.target.value)}

                style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "10px",
                    outline: "none",
                    border: "none"
                }}
             />
            </div>

             <div>
             <textarea 
                value={body}
                placeholder='Enter body'
                onChange= {(e)=> setBody(e.target.value)}
                style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "10px",
                    outline: "none",
                    height: "100px",
                    border: "none",

                }}
             >
             </textarea>
             </div>
             <div>
                <button 
                style={{
                    padding: "10px",
                    marginBottom: "10px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "#007bff",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "white",
                }}
                onClick={editId ? ()=> updatePost(editId): addPost}>{editId ? 'Update' : 'Add'}</button>
             </div>
             
             <div>
                {posts.map((post)=>{
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <div>
                                <button 
                                    style={{
                                        padding: "10px",
                                        marginBottom: "10px",
                                        outline: "none",
                                        border: "none",
                                        backgroundColor: "green",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        color: "white",
                                        marginRight: "20px",
                                    }}
                                onClick={()=>handleEdit(post) }>Edit post</button>
                                <button
                                     style={{
                                        padding: "10px",
                                        marginBottom: "10px",
                                        outline: "none",
                                        border: "none",
                                        backgroundColor: "red",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                 onClick={()=>deletePost(post.id)}>Delete post</button>
                            </div>
                        </div>
                    )
                })}
             </div>
        </div>
    )
}

export default ProstEX1;