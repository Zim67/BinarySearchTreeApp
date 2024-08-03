import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import EnterNumbers from './components/EnterNumbers';
import TreeVisualization from './components/TreeVisualization';
import PreviousTrees from './components/PreviousTrees';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/trees/previous');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Datastructure & Algorithm Final Sprint</h1>
          <nav className="App-nav">
            <ul>
              <li><Link to="/">Enter Numbers</Link></li>
              <li><Link to="/tree">Tree Visualization</Link></li>
              <li><Link to="/previous">Previous Trees</Link></li>
            </ul>
          </nav>
          <main>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <Routes>
                <Route path="/" element={<EnterNumbers />} />
                <Route path="/tree" element={<TreeVisualization data={data} />} />
                <Route path="/previous" element={<PreviousTrees />} />
              </Routes>
            )}
          </main>
        </header>
      </div>
    </Router>
  );
}

export default App;
