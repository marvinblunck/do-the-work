import React from 'react';
import "./Workout.css";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


function Workout() {
  const { loading, data } = useQuery(QUERY_ME);
console.log(data)
  const userData = data?.me || {};
  console.log(userData)
  // const userData = {workouts:[
  //   {name: "Bench press",
  //   day: "Monday",
  //   sets: 2,
  //   reps: 10},
  //   {name: "Pull ups",
  //   day: "Tuesday",
  //   sets: 1,
  //   reps: 5},
  //   {name: "Push ups",
  //   day: "Wednesday",
  //   sets: 2,
  //   reps: 5}
  // ]}
  return (
    <div>
      <h1 class="workoutTitle">Workouts Page</h1>
      {/* Add your workouts content and components */}
      {/* <div class="workoutGrid">
        <div class="workoutDay">
          <h2>Monday</h2>
          <p>Name: Bench press</p>
          <p>Sets: 2</p>
          <p>Reps: 10</p>
        </div>
        <div class="workoutDay">
          <h2>Tuesday</h2>
          <p>Name: Pull ups</p>
          <p>Sets: 1</p>
          <p>Reps: 5</p>
        </div>
      </div> */}
       <div class="workoutGrid">
        {userData?.workouts?.map(workout => (
        <div class="workoutDay">
          <h2>{workout.day}</h2>
          <p>Name: {workout.name}</p>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Workout;