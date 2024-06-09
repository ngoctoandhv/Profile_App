import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import PostList from '../../components/Home/PostList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { postList } from '../../config/data';
import SideBar from '../../components/Home/SideBar';

import './styles.css';

const Home = () => {
  const [posts, setPosts] = useState(postList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for post by category
  const handleSearchResults = () => {
    const allPosts = postList;
    const filteredPosts = allPosts.filter((post) =>
      post.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setPosts(filteredPosts);
  };

  // Clear search and show all posts
  const handleClearSearch = () => {
    setPosts(postList);
    setSearchKey('');
  };

  

  return (
    <div>
      {/* Page Header */}
      <Header />

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <div className='container'>
        <div className='row'>
          <div className='col-10 content'>
            {/* Post List & Empty View */}
            {!posts.length ? <EmptyList /> : <PostList posts={posts} />}
          </div>

          <div className='col-2 sidebar shadow-lg'>
            {/* Side bar */}
            < SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
