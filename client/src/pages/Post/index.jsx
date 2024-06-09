import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { postList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let post = postList.find((post) => post.id === parseInt(id));
    if (post) {
      setPost(post);
    }
  }, []);

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
          <img src={post.cover} alt='cover' />
          <p className='post-desc'>{post.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Post;
