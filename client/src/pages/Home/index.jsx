import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import PostList from '../../components/Home/PostList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
// import SideBar from '../../components/Home/SideBar';

import './styles.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState(posts);
  const [searchKey, setSearchKey] = useState('');
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(process.env.REACT_APP_RAILS_API_URL + "/posts", {
          method: 'GET',
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json'
          }})
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
          setAllPosts(json);
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


  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for post by category
  const handleSearchResults = () => {
    const filteredPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setPosts(filteredPosts);
  };

  // / Clear search and show all posts
  const handleClearSearch = () => {
    setPosts(allPosts);
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
          <div className='col-12 content'>
            {/* Post List & Empty View */}
            {!posts.length ? <EmptyList /> : <PostList posts={posts} />}
          </div>

          {/* <div className='col-2 sidebar shadow-lg'> */}
            {/* Side bar */}
            {/* < SideBar /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
