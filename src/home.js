// Home.js
import React from 'react';
import './style.css';

const Home = () => {
  return (
    
    <div id="content">
      <div id="aboutSection">
        <h1>About Diet Planner</h1>
        <p>
          Welcome to Diet Planner, your go-to platform for achieving your health and fitness goals. Our mission is to provide you with personalized and effective tools to make your fitness journey enjoyable and successful.
        </p>
      </div>

      <div id="featuresSection">
        <h1>Key Features</h1>
        <p>Personalized Meal Plans</p>
    <p>Nutrition Tracking</p>
    <p>Recipe Library</p>
    <p>Progress Monitoring</p>
      </div>

      <div id="dietPlannersContainer">
        <div className="dietPlanner" id="dietPlanner1">
          <h2>DietMaster</h2>
          <p>Your ultimate companion for personalized diet plans and nutrition tracking. Achieve your fitness goals with DietMaster!</p>
          <p>Contact us: support@dietmaster.com</p>
        </div>

        <div className="dietPlanner" id="dietPlanner2">
          <h2>NutriSync</h2>
          <p>Sync your nutrition with NutriSync! Tailored meal plans and comprehensive tracking to support your journey to a healthier you.</p>
          <p>Contact us: info@nutrisync.com</p>
        </div>

        <div className="dietPlanner" id="dietPlanner3">
          <h2>FitFuel</h2>
          <p>Fuel your fitness journey with FitFuel. Enjoy customized meal plans and track your progress towards a fitter, healthier lifestyle.</p>
          <p>Contact us: support@fitfuel.com</p>
        </div>
      </div>

      <div id="contactSection">
        <h1>Contact Information</h1>
        <p>If you have any questions or need assistance, feel free to reach out to our support team at support@dietplanner.com.</p>
      </div>
    </div>
  );
};

export default Home;
