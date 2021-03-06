import React, { useState }from 'react';
import axios from 'axios';

const NewProcedure = (props) => {
  const [procedure, setProcedure] = useState(null);
  const [date, setDate] = useState(null);
  const [insurance, setInsurance] = useState(null);
  const [preinsuranceCost, setPreinsuranceCost] = useState(null);
  const [oopCost, setOopCost] = useState(null);

  return (
    <div id="new-procedure-form">
      <div>Procedure: <input type="text" onChange={(e) => setProcedure(e.target.value)}/></div>
      <div>Date Performed: <input type="date" onChange={(e) => setDate(e.target.value)}/></div>
      <div>Insurance Provider: <input type="text" onChange={(e) => setInsurance(e.target.value)}/></div>
      <div>Pre-Insurance Cost: <input type="number" onChange={(e) => setPreinsuranceCost(e.target.value)}/></div>
      <div>Out of Pocket Cost: <input type="number" onChange={(e) => setOopCost(e.target.value)}/></div>
      <input 
        id="procedure-submit"
        type="submit" 
        value="Submit" 
        onClick={() => {
          // Post request to backend
          axios.post('/create', {
            location: props.currentLocation,
            procedure,
            date,
            insurance,
            preinsuranceCost,
            oopCost
          })
            .then(response => {
              props.toggleBoolean(["addNewProcedure"])
              console.log(response)
            })
            .catch(err => console.log(err))
        }}
      />
      <input 
        id="location-back"
        type="submit"
        value="Back"
        onClick={() => {
          props.toggleBoolean(['addNewProcedure']);
        }}
      />
    </div>
  );
};

export default NewProcedure;