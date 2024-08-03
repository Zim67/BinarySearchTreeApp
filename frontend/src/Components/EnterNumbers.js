import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EnterNumbers.css';

const EnterNumbers = () => {
  const [numbers, setNumbers] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!numbers.trim()) {
      setError('Please enter some numbers.'); // Basic validation
      return;
    }

    setLoading(true);
    setError(null);

    axios.post('http://localhost:8080/api/trees/process', numbers, {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        navigate('/tree', { state: { treeData: response.data } });
      })
      .catch(error => {
        console.error('There was an error submitting the data!', error);
        setError('Failed to submit data. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="enter-numbers-container">
      <h2>Enter Numbers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="numbers"
          placeholder="Enter numbers separated by commas"
          value={numbers}
          onChange={e => setNumbers(e.target.value)}
          className={error ? 'input-error' : ''}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <Link to="/previous" className="view-trees-button">View Previous Trees</Link>
    </div>
  );
};

export default EnterNumbers;
