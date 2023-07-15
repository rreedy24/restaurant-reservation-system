import React, { useState, useEffect } from 'react';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/restaurants') // replace with your server's address
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRestaurants(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []); // Empty array means this effect will only run once, similar to componentDidMount

  return (
    <div>
      <h2>Restaurant List</h2>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          {/* Other restaurant details here */}
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
