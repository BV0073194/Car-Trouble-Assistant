import React, { useState } from 'react';

const Obd2Input = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="OBD2 Code"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Obd2Input;
