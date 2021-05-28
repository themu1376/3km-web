import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import PausePage from './pages/PausePage';
import ReadyPage from './pages/ReadyPage';
import RunningPage from './pages/RunningPage';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={IntroPage} />
        <Route exact path='/main' component={MainPage} />
        <Route exact path='/pause' component={PausePage} />
        <Route exact path='/ready' component={ReadyPage} />
        <Route exact path='/running' component={RunningPage} />
      </Router>
    </>
  );
}

export default App;
