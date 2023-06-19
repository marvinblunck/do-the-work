import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_WORKOUT } from '../utils/mutations';
function Profile() {
  let { name } = useParams();
  const [addWorkout, { error }] = useMutation(ADD_WORKOUT)
  const [reps, setReps] = useState(0)
  const [sets, setSets] = useState(0)
  console.log(name);
  async function saveWorkout() {
    try {
      const { data } = await addWorkout({
        variables: { name, reps, sets }
      })
      console.log(data)
    } catch (err) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1> Add Workout</h1>
      <h3> {name}</h3>
      <div>
        <label>Reps</label>
        <input value={reps} onChange={(e) => setReps(e.target.value)}></input>
      </div>
      <div>
        <label>Sets</label>
        <input value={sets} onChange={(e) => setSets(e.target.value)}></input>
      </div>
      <button onClick={saveWorkout}>Save</button>
    </div>
  )

}

export default Profile;
