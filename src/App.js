// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Navigation from './navigation';
import Home from './home';
import Signin from './signin';
import Signup from './signup';
import App1 from './app1';
const App = () => {
  return (
    <Router>
      <div>
        <img id="im" src="/two.png" alt="DIET PLANNER" />
        <h1 id="dietPlannerLabel">Diet Planner</h1>
        <Navigation />
      
         
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/app1" element={<App1 />} />




          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
