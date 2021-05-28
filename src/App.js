import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import ReadyPage from './pages/ReadyPage';
import RunningPage from './pages/RunningPage';
import PausePage from './pages/PausePage';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={IntroPage} />
        <Route exact path='/ready' component={ReadyPage} />
        <Route exact path='/running' component={RunningPage} />
        <Route exact path='/pause' component={PausePage} />
        <Route component={Header} />
        <Route component={Footer} />
      </Router>
    </>
  );
}

export default App;
