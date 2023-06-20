import React from 'react';
import "./About.css";
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_ME } from '../utils/queries';

function About() {
  return (
    <div className='aboutpage'>
    <header>
      <h1>About Gofit</h1>
    </header>  
    <div className='aboutinfo'></div>
    <body>
      <p>GoFit is a revolutionary workout and nutrition application that takes your fitness tracking to the next level. With its intuitive interface and powerful features, GoFit allows users to effortlessly track their workout sets and reps by entering their data directly into the app. Say goodbye to pen and paper! GoFit's user-friendly design makes it easy to log your sets and reps for each exercise, ensuring accurate and detailed workout tracking. By keeping a record of your progress, you can monitor your strength gains, track your performance over time, and make informed adjustments to your training routine.In addition to workout tracking, GoFit offers a comprehensive nutrition component that complements your exercise regimen. With the ability to log your meals and track your daily calorie intake, the app helps you maintain a balanced diet and achieve your desired fitness goals.</p>
    </body>
    </div>
  );
}

export default About;