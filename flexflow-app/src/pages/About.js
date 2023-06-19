import React from 'react';
import "./About.css";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function About() {
  return (
    <div className='header'>
      <h1>About Gofit</h1>
      <p>Welcome to the About page of our website.</p>
    </div>
  );
}

export default About;