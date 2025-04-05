import React, {useState, useEffect, useRef} from "react";

const CommentEX = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const [editId, setEditId] = useState(null);

    const Focust1 = useRef();

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
            
        }
    }
    
    const addComment = async () => {
        if (!name || !email || !body) {
            alert("Please fill in all fields");
            return;
        }else {
            try {
                const newCommnent = { name, email, body };
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(newCommnent),
                })
                const data = await response.json();
                setComments([...comments, data]);
                setName("");
                setEmail("");
                setBody("");
            } catch (error) {
                console.error("Error adding comment:", error);  
            }
        }
    }

    const updateComment = async (id) => {
        try {
            const updatedComment = { name, email, body };
            await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedComment),
            })
            setComments(comments.map(comment => (comment.id === id ? { ...comment, ...updatedComment } : comment)));
            setName("");
            setEmail("");
            setBody("");
            setEditId(null);
        } catch (error) {
            console.error("Error updating comment:", error);
            
        }
    }

    const deleteComment = async (id) => {
        try {
            if (!window.confirm("Are you sure you want to delete this comment?")) {
            return;}else {
                await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
                    method: "DELETE",
                });
                setComments(comments.filter(comment => comment.id !== id));
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    }

    const handleEdit = (comment) => {
        setName(comment.name);
        setEmail(comment.email);
        setBody(comment.body);
        setEditId(comment.id);
        Focust1.current.focus();
    }


    return (
        <div
            style={{
                padding: "40px",
                paddingRight: "40px",
                margin: "40px",
                backgroundColor: "#FFE4B5",
                width: "900px",
                margin:" auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            <h1 style={{color: "#007bff", fontWeight: "bolder", fontSize: "40px", textShadow: "2px 3px 10px white"}}>Comment</h1>
            <div className="form">
                <div>
                   <input
                        style={{
                            padding: "10px",
                            width: "100%",
                            marginBottom: "10px",
                            outline: "none",
                            border: "none",
                            boxSizing: "border-box"
                        }}
                    ref={Focust1} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                   <input 
                        style={{
                            padding: "10px",
                            width: "100%",
                            marginBottom: "10px",
                            outline: "none",
                            border: "none",
                            boxSizing: "border-box"
                        }}
                    type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <textarea  
                        style={{
                            padding: "10px",
                            width: "100%",
                            marginBottom: "10px",
                            outline: "none",
                            height: "100px",
                            border: "none",
                            boxSizing: "border-box"                            
                        }}
                type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
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
                 onClick={editId? ()=> updateComment(editId) : addComment } >{editId? "Update comment" : "Add comment"}</button>
            </div>
            <div
            
            >
                {comments.map((comment) => {
                    return (
                        <div key={comment.id} style={{
                            padding: "20px", backgroundColor:"white", margin:"20px 0"}}>
                            <h2>{comment.name}</h2>
                            <h3>{comment.email}</h3>
                            <p>{comment.body}</p>

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
                                 onClick={()=>handleEdit(comment)}>Edit comment</button>
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
                                onClick={() => deleteComment(comment.id)}>Delete comment</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CommentEX;