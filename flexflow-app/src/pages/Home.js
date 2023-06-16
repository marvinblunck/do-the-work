import React from 'react';

function Home() {
  return (
    <div className="homepage">
      <header>
        <nav>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul> 
           <div className="auth-buttons">
              <button className="login-button">Login</button>
              <button className="signup-button">Sign Up</button>
            </div>
        </nav>
      </header>
      <main>
        <h1>Hello, Welcome to <span className="highlight">Gofit</span></h1>
        <p>Let's start your day</p>
      </main>
      <body>
        <div className="intro" >
          <h2>Today's workout plan</h2>
          <h3>6am-8am</h3>
        </div>
        <div className="row1">
        <div className="box1">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="box1">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="box1">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
        <div className="box1">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
      </div>
         <div className="intro2"> 
         <h2>Nutrition</h2>
         </div>
         <div className="row2">
          <div className="box2">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
          <div className="box2">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
          <div className="box2">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
          <div className="box2">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
        
      </body>
   <footer>
     <p>© 2023 Gofit. All rights reserved.</p>
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
