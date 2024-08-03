import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PreviousTrees.css';

function PreviousTrees() {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trees/previous');
        setTrees(response.data);
      } catch (error) {
        console.error("There was an error fetching the previous trees!", error);
        setError("Failed to load previous trees. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrees();
  }, []);

  // Recursive function to render the tree structure
  const renderTree = (node) => {
    if (!node) {
      return <p>No tree structure available.</p>;
    }
    return (
      <div className="tree-node">
        <div className="node-value">{node.value}</div>
        <div className="tree-children">
          <div className="tree-left">{renderTree(node.left)}</div>
          <div className="tree-right">{renderTree(node.right)}</div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <p>Loading previous trees...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div>
      <h1>Previous Trees</h1>
      {trees.length === 0 ? (
        <p>No previous trees found.</p>
      ) : (
        trees.map((tree, index) => (
          <div key={index} className="tree-container">
            <h2>Tree {index + 1}</h2>
            <p>Numbers: {tree.numbers}</p>
            {renderTree(JSON.parse(tree.treeStructure))}
          </div>
        ))
      )}
      <button className="back-button" onClick={() => window.location.href = '/'}>Enter New Numbers</button>
    </div>
  );
}

export default PreviousTrees;
