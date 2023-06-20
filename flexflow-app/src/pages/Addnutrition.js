import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_NUTRITION } from '../utils/mutations';
function Nutrition() {
  let { name } = useParams();
  const [addNutrition, { error }] = useMutation(ADD_NUTRITION)
  const [sleep, setSleep] = useState(0)
  const [water, setWater] = useState(0)
  const [weight, setWeight] = useState(0)
  console.log(name);
  async function saveNutrition() {
    try {
      console.log({sleep:parseInt(sleep), water:parseInt(water), weight:parseInt(weight) })
      const { data } = await addNutrition({
        variables: {sleep:parseInt(sleep), water:parseInt(water), weight:parseInt(weight) }
      })
      console.log(data)
    } catch (err) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1> Add Nutrition</h1>
      <h3> {name}</h3>
      <div>
        <label>Sleep</label>
        <input value={sleep} onChange={(e) => setSleep(e.target.value)}></input>
      </div>
      <div>
        <label>Water</label>
        <input value={water} onChange={(e) => setWater(e.target.value)}></input>
      </div>
      <div>
        <label>Weight</label>
        <input value={weight} onChange={(e) => setWeight(e.target.value)}></input>
      </div>
      <button onClick={saveNutrition}>Save</button>
    </div>
  )

}

export default Nutrition;