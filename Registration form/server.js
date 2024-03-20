// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registrationDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/register', (req, res) => {
    // Handle registration form submission
    console.log(req.body); // Example: { username: 'JohnDoe', email: 'johndoe@example.com', password: 'password123' }
    // Save user data to MongoDB
    // Redirect or send response as needed
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
