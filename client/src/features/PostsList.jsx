import React, { useEffect, useState } from "react";
// import { API_URL } from "../constants";

function PostsList() {

  const [posts, setPosts] = useState([])
  const [, setLoading] = useState(true)
  const [, setError] = useState(null)


  // fetch posts from the API
  useEffect(() => {
    const apiUrl = process.env.RAILS_API_URL;
    async function loadPosts() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/posts")
        console.log(apiUrl)
        if (response.ok) {
          const json = await response.json();
          setPosts(json)
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred. Awkward ...")
        console.log("An error occurred", e)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])


  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsList;
