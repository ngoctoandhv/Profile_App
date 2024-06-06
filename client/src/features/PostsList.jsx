import React, { useEffect, useState } from "react";

function PostsList() {

  const [posts, setPosts] = useState([])
  const [, setLoading] = useState(true)
  const [, setError] = useState(null)


  // fetch posts from the API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(process.env.REACT_APP_RAILS_API_URL + "/posts", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }})
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
