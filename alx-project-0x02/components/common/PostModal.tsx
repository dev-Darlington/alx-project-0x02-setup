import { useState } from "react";
import { PostModalProps } from "@/interfaces";
// Create a PostModal component in components/common/PostModal.tsx.
// Implement a form inside the modal to accept user input for title and content.
// Pass the data back to the parent component and display the newly added content on the /home page.
// Add a button to open the modal.

const PostModal = ({isOpen, onClose, onSubmit}: PostModalProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    if(isOpen){
        return null;
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        if(title.trim() && content.trim()){
            onSubmit({title, content})
            setTitle("")
            setContent("")
            onClose()
        }

    }
    return (
        <div>
            <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" value={content} onChange={e => setContent(e.target.value)}/>
            </div>
            <button type="submit">Publish Post</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
        </div>
    )
}
export default PostModal