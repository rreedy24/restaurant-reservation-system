import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RestaurantList from './components/RestaurantList';
import Restaurant from './components/Restaurant';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/reservations/new" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
