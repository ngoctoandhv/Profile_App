import './App.css';
import React from 'react'
import Home from "./pages/Home";
import Blog from './pages/Blog';
import { Route, Switch } from 'react-router-dom';


// import PostsList from "./features/PostsList"
// import Header from "./components/Layout/Hearder";
// import Footer from './components/Layout/Footer';
// import './vendor/bootstrap/css/bootstrap.min.css'
// import './vendor/bootstrap-icons/bootstrap-icons.css'
// import './vendor/aos/aos.css'
// import './vendor/glightbox/css/glightbox.min.css'
// import './vendor/swiper/swiper-bundle.min.css'

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog/:id' component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
