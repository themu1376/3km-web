import React from 'react';
import './IntroPage.css';
import logo from './logo.svg';


const IntroPage = () => {
  setTimeout(() => {
    document.location.href = "/ready";
  }, 1000);
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}


export default IntroPage;