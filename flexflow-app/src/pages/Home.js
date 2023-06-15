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
            <li className="auth-buttons">
              <button className="login-button">Login</button>
              <button className="signup-button">Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to the Workout Website</h1>
        <p>Track your workouts and achieve your fitness goals!</p>
      </main>
    </div>
  );
}

export default Home;