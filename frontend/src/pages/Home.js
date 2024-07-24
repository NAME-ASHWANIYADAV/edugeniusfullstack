import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Import the Axios instance

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/users') // Use the Axios instance to make a GET request
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {error && <p>{error}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;

