import React, { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';

const App = () => {
  // State to store tours data
  const [tours, setTours] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to store error messages
  const [error, setError] = useState(null);

  // Function to fetch tours data from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Clear any previous errors
    try {
      const response = await fetch('/api/react-tours-project'); // Fetch data from the API
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Handle HTTP errors
      }
      const data = await response.json(); // Parse JSON response
      setTours(data); // Update tours state with fetched data
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch tours data when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const onRemove = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the removed tour
  };

  // Show loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Show error message if there is an error
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Show a "Refresh" button if no tours are left
  if (tours.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-button">
          Refresh
        </button>
      </div>
    );
  }

  // Render the Gallery component with tours data
  return (
    <div>
      <h1>Tours</h1>
      <Gallery tours={tours} onRemove={onRemove} />
    </div>
  );
};

export default App;