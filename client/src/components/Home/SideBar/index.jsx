import React from 'react';
import './styles.css';

const SideBar = () => (
  <div className='site-bar mx-4 my-4'>
    <img src='/assets/images/author.jpg' className="img-fluid mb-4" alt='avatar'></img>
    <p>My name is Toan <br/> I'm a Ruby ​​developer</p>

    <div className='row link-icon'>
      <a href='https://www.facebook.com/ngoc.toan.3511/' className='col' ><i className="fa-brands fa-facebook"></i></a>
      <a href='https://github.com/ngoctoandhv' className='col' ><i className="col fa-brands fa-github"></i></a>
      <a href='https://www.linkedin.com/in/toan-nguyen-6b7729214/' className='col' ><i className="col fa-brands fa-linkedin"></i></a>
    </div>
  </div>
);

export default SideBar;
