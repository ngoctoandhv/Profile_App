import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const PostItem = ({
  post: {
    content,
    title,
    createdAt,
    authorName,
    authorAvatar,
    image_url,
    category,
    id,
  },
}) => {
  const defaultImage = '/assets/images/make-it-personal.jpg';
  const defaultAvatar = '/assets/images/author.jpg';

  return (
    <div className='postItem-wrap'>
      <Link to={`/post/${id}`}>
        <img className='postItem-cover' src={image_url || defaultImage} alt='image_blog' />
      </Link>
      <Chip label={category} />
      <Link to={`/post/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p className='postItem-desc'>{content}</p>
      <footer>
        <div className='postItem-author'>
          <img src={authorAvatar || defaultAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='postItem-link' to={`/post/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default PostItem;
