import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='page-body'>
      <div className="container-box">
        <img className='image' src="../../../public/assets/images/notFound.png" alt="" />
        <div className='texts'>
          <h1 className='heading1'>404</h1>
          <p>Oops! Sayfa bulunamadı.</p>
          <NavLink className='back-home' to="/platform">Platform'a geri dön</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NotFound;