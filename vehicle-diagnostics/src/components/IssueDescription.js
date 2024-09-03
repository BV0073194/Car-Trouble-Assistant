import React, { useState } from 'react';

const IssueDescription = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the issue (looks like, smells like, feels like...)"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default IssueDescription;
