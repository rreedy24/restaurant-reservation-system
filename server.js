const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pgp = require('pg-promise')();

app.use(express.json());

const db = pgp({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurant_reservation',
  password: '11mapleway',
  port: 5432,
});

// Users API
app.get('/users', async (req, res) => {
  const users = await db.any('SELECT * FROM Users;');
  res.json(users);
});

app.post('/users', async (req, res) => {
  const newUser = req.body;
  await db.none('INSERT INTO Users(username, password_hash, email, name, phone) VALUES($1, $2, $3, $4, $5)', [newUser.username, newUser.password_hash, newUser.email, newUser.name, newUser.phone]);
  res.json({message: 'User created'});
});

// Restaurants API
app.get('/restaurants', async (req, res) => {
  const restaurants = await db.any('SELECT * FROM Restaurants;');
  res.json(restaurants);
});

app.post('/restaurants', async (req, res) => {
  const newRestaurant = req.body;
  await db.none('INSERT INTO Restaurants(name, description, address, image_url, manager_id) VALUES($1, $2, $3, $4, $5)', [newRestaurant.name, newRestaurant.description, newRestaurant.address, newRestaurant.image_url, newRestaurant.manager_id]);
  res.json({message: 'Restaurant created'});
});

// Reservations API
app.get('/reservations', async (req, res) => {
  const reservations = await db.any('SELECT * FROM Reservations;');
  res.json(reservations);
});

app.post('/reservations', async (req, res) => {
  const newReservation = req.body;
  await db.none('INSERT INTO Reservations(user_id, restaurant_id, reservation_time, status) VALUES($1, $2, $3, $4)', [newReservation.user_id, newReservation.restaurant_id, newReservation.reservation_time, newReservation.status]);
  res.json({message: 'Reservation created'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
