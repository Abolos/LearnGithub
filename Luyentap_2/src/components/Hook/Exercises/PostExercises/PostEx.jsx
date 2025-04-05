import React,{useState, useEffect} from "react";
import '../Templete.css'

const PostEx = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(()=> {
        fetchPosts()
    },[]);

    const fetchPosts = async () => {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    };

    const addPosts = async () => {
       const newPost = {title, body};
       const response = await fetch ('https://jsonplaceholder.typicode.com/posts',{
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newPost),
       } );
       const data = await response.json();
       setPosts([...posts, data]);
       setTitle('');
       setBody('');
    }

    const updatePost = async (id) => {
        const updatedPost = {title, body};
        await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedPost)
        })

        setPosts(posts.map(post => post.id === id ? {...post, ...updatedPost} : post));
        setEditId(null);
        setTitle('');
        setBody('');
    }

    const deletePost = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:'DELETE',
        })
        setPosts(posts.filter(post => post.id !== id));
    }

    const handleEdit = (post) => {
        setTitle(post.title)
        setBody(post.body)
        setEditId(post.id)
    }

    return (
        <div className="app">
            <h1>Posts New</h1>
            <input 
               type="text" 
               placeholder="Title"
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
               className="input"
            />

            <textarea 
               placeholder="Body"
               value={body}
               onChange={(e) => setBody(e.target.value)}
               className="textarea"
            />

            <button onClick={editId ? () => updatePost(editId) : addPosts} className="button" >
                {editId ? 'Update Post' : 'Add Post'}
            </button>

            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <div>
                            <button onClick={() => handleEdit(post)} className="button">Edit</button>
                            <button onClick={() => deletePost(post.id)} className="button">Delete</button>
                        </div>
                    </li>
                ) )}
            </ul>
        </div>
    )

}

export default PostEx;