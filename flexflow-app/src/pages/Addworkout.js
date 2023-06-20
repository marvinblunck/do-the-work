import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_WORKOUT } from '../utils/mutations';
import "./Workout.css";

function Profile() {
  let { name } = useParams();
  const [addWorkout, { error }] = useMutation(ADD_WORKOUT)
  const [reps, setReps] = useState(0)
  const [sets, setSets] = useState(0)
  console.log(name);
  async function saveWorkout() {
    try {
      console.log(name, reps, sets)
      const { data } = await addWorkout({
        variables: { name, reps:parseInt(reps), sets:parseInt(sets) }
      })
      console.log(data)
    } catch (err) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1 className="title"> Add Workout</h1>
      <h3 className="name"> {name}</h3>
      <div className="inputContainer">
        <label className="label">Reps</label>
        <input className="input" value={reps} onChange={(e) => setReps(e.target.value)}></input>
      </div>
      <div className="inputContainer">
        <label className="label">Sets</label>
        <input className="input" value={sets} onChange={(e) => setSets(e.target.value)}></input>
      </div>
      <button className="saveButton" onClick={saveWorkout}>Save</button>
    </div>
  )

}

export default Profile;
