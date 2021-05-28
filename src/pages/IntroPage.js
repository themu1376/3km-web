import React from 'react';
import './IntroPage.css';
import logo from './logo.svg';


const IntroPage = () => {
  setTimeout(() => {
    document.location.href = "/ready";
  }, 1000);
  return(
    <div className="intro">
      <div className="intro-header">
        <img src={logo} className="intro-logo" alt="logo" />
      </div>
    </div>
  )
}


export default IntroPage;