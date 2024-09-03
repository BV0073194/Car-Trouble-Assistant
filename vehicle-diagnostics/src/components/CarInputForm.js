import React, { useState } from 'react';
import validateCar from '../utils/validateCar';
  
const CarInputForm = ({ onSubmit }) => {
    
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [error, setError] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateCar(year, make, model);
    if (isValid) {
      onSubmit({ year, make, model });
      corsAx.hidden = true;
    } else {
      setError('Invalid car information. Please check your inputs.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        required
      />
      <input
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Make"
        required
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarInputForm;
