import React from 'react';
import { useParams } from 'react-router-dom';
function Profile(){
  let {name}= useParams();
  console.log(name);
return (
  <div>
<h1> Add Workout</h1>
<h3> {name}</h3>
<div>
  <label>Reps</label>
  <input></input>
 </div>
 <div>
  <label>Sets</label>
  <input></input>
 </div>
 <button>Save</button>
</div>
)

}

export default Profile;
