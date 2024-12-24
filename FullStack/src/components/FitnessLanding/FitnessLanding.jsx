import React, { useState, useEffect } from "react";

import './FitnessLanding.css';
import WeeklyProgressReportforDB from '../WeeklyReportforDB/WeeklyReportforDB';

const FitnessLanding = () => {
  const stats = [
    { number: 137, label: "EXPERT COACHES" },
    { number: 978, label: "MEMBERS JOINED" },
    { number: 34, label: "FITNESS PROGRAMS" },
  ];

  // State for dynamic heart rate and calories burned
  const [heartRate, setHeartRate] = useState(116);
  const [caloriesBurned, setCaloriesBurned] = useState(220);

  // Function to generate a random number within a range
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Effect to update the stats periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(getRandomNumber(80, 120)); // Heart Rate: 80 bpm to 120 bpm
      setCaloriesBurned(getRandomNumber(550, 2200)); // Calories Burned: 550 kcal to 2200 kcal
    }, 2000); // Update every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fitness-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="brand-tag">THE BEST FITNESS CLUB IN THE TOWN</div>
        </div>

        <div className="main-content">
          <div className="left-section">
            <h1 className="title">
              <span className="outline-text">SHAPE</span> YOUR
              <br />
              IDEAL BODY
            </h1>

            <p className="description">
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </p>

            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">+{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Heart Rate and Calories Burned Section */}
            <div className="stats-overlay">
              <div className="heart-rate">
                <span className="heart-icon">❤️</span>
                <span>Heart Rate</span>
                <span className="bpm">{heartRate} bpm</span>
              </div>
              <div className="calories">
                <div className="calories-graph">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <span>Calories burned</span>
                <span className="kcal">{caloriesBurned} kcal</span>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="image-container">
              <img
                src="https://www.completesports.com/wp-content/uploads/2020/06/400a5678-485d-11ea-9a9d-aed7af30eb98.jpg"
                alt="Fitness person tying shoelace"
                className="main-image"
              />

              {/* <WeeklyProgressReportforDB/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FitnessLanding;