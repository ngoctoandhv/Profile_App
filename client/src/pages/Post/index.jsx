import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { postList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const [, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_RAILS_API_URL + `posts/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json)
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred. Awkward ...")
        console.log("An error occurred", e)
      }
    }

    fetchCurrentPost();
  }, [id])



  return (
    <>
      <Link className='post-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {post ? (
        <div className='post-wrap'>
          <header>
            <p className='post-date'>Published {post.createdAt}</p>
            <h1>{post.title}</h1>
            <div className='post-subCategory'>
              {post.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={post.image_url} alt='image_blog' />
          <p className='post-desc'>{post.content}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Post;
