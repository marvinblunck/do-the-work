import React from 'react';
import boxedwater from "../assets/boxedwater.jpg";
import squat from "../assets/squat.jpg";
import deadlift from "../assets/deadlift.jpg";
import curls from "../assets/curls.jpg";
import salad from "../assets/salad.jpg";
import oats from "../assets/oats.jpg";
import chicken from "../assets/chicken.jpg";
import dessert from "../assets/dessert.jpg";
import Auth from "../utils/auth"



function Home() {
  return (
    <div className="homepage">
      <header>
        <nav>
 <h1><span className="highlight">Gofit</span></h1>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/workout">Workout</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul> 
            <div className="auth-buttons">
              {Auth.loggedIn() ? (
                <button onClick={Auth.logout} className="signout-button"><a href="#">Sign Out</a></button>
              ): (
                <>
                <button className="login-button"><a href="/login">Login</a></button>
              <button className="signup-button"><a href="/signup">Sign Up</a></button>
                </>
              )}
           </div>
        </nav>
      </header>
      <main>
        {/* <h1>Hello, Welcome to <span className="highlight">Gofit</span></h1> */}
        <p>Let's start your day</p>
      </main>
      <body>
        <div className="intro" >
          <h2>Today's workout plan</h2>
          <h3>6am-8am</h3>
        </div>
        <div className="row1">
        <div className="box1">
         <a href= "/workout/Lunges"><img src={boxedwater} alt="Placeholder" data-text="Lunges" /></a>
        </div>
        <div className="box1">
          <a href= "/workout/Squats"><img src={squat} alt="Placeholder"data-text="Squats"  /></a> 
        </div>
        <div className="box1">
         <a href= "/workout/pushups"> <img src={deadlift} alt="Placeholder" data-text="Pushups" /></a>
        </div>
        <div className="box1">
         <a href= "/workout/bench-press"><img src={curls} alt="Placeholder" data-text="Bench Press"/></a> 
        </div>
      </div>
         <div className="intro2"> 
         <h2>Nutrition</h2>
         </div>
         <div className="row2">
          <div className="box2">
            <a href= "/nutrition/sleep"><img src={oats} alt="Placeholder" /></a>
          </div>
          <div className="box2">
          <a href= "/nutrition/food"> <img src={salad} alt="Placeholder" /></a>
          </div>
          <div className="box2">
          <a href= "/nutrition/weight"> <img src={chicken} alt="Placeholder" /></a>
          </div>
          <div className="box2">
          <a href= "/nutrition/water"><img src={dessert} alt="Placeholder" /></a>
          </div>
        </div>
        
      </body>
   <footer>
    <div className="footer-rights"> 
     <p>© 2023 Gofit. All rights reserved.</p>
     </div>
        <div className="footer-columns">
          <div className="column">
            <p>WORKOUTS</p>
            <p>WORKOUT VIDEOS</p>
            <p>CUSTOM WORKOUTS</p>
            <p>PROGRAMS</p>
            <p>WORKOUT PROGRAMS</p>
          </div>
          <div className="column">
            <p>ROUTINES</p>
            <p>FITNESS</p>
            <p>HEALTH</p>
            <p>NUTRITION</p>
            <p>HEALTHY RECIPES</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
