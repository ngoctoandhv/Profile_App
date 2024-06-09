import './App.css';
import React from 'react'
import Home from "./pages/Home";
import Post from './pages/Post';
import { Route, Switch } from 'react-router-dom';

import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/bootstrap-icons/bootstrap-icons.css'

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={Post} />
      </Switch>
    </div>
  );
}

export default App;
