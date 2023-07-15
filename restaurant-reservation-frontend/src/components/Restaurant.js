import React from 'react';

const Restaurant = () => {
  // You'll replace this with actual data from your API
  const restaurant = {
    name: 'Restaurant 1',
    description: 'This is a great restaurant.',
    address: '123 Main St.',
  };

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>{restaurant.address}</p>
    </div>
  );
}

export default Restaurant;
