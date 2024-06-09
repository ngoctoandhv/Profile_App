import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const PostItem = ({
  post: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='postItem-wrap'>
      <Link to={`/post/${id}`}>
        <img className='postItem-cover' src={cover} alt='cover' />
      </Link>
      <Chip label={category} />
      <Link to={`/post/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p className='postItem-desc'>{description}</p>
      <footer>
        <div className='postItem-author'>
          <img src={authorAvatar} alt='avatar' />
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
