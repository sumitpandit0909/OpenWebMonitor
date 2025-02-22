import React, { useState } from 'react';

const AddNewPage = () => {
  const [url, setUrl] = useState('');
  const [selector, setSelector] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ url, selector, frequency });
  };

  return (
    <div className="add-new-page">
      <h1>Add New Page to Track</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Selector"
          value={selector}
          onChange={(e) => setSelector(e.target.value)}
          required
        />
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)} required>
          <option value="">Select Frequency</option>
          <option value="10min">Every 10 minutes</option>
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
        </select>
        <button type="submit">Start Tracking</button>
      </form>
    </div>
  );
};

export default AddNewPage;