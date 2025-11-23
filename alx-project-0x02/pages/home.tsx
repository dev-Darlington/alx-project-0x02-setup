import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import { PostData } from "@/interfaces"
import { useState } from "react"

interface Post extends PostData {
  id: number
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [posts, setPosts] = useState<Post[]>([
    {id: 1, title: "Welcome Post", content: "Welcome Note"}
  ])
  const handleNewPost = (newPostData: PostData) => {
    const newPost: Post = {
      ...newPostData,
      id: Date.now()
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div>
      <Card title="NextJS Practice" content="Some dummy text"/>
      <button 
        className="p-5 bg-amber-200 rounded-xl"
        onClick={()=> setIsModalOpen(true)}>
          ➕ Create New Post
      </button>
      <PostModal 
        isOpen={isModalOpen} 
        onClose={()=> setIsModalOpen(false)} 
        onSubmit={handleNewPost}
      />
      <h2>Recent Posts</h2>
      {posts.map((post)=>(
        <article key={post.id} className="border p-5 my-5 mx-0">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  )
}
export default Home