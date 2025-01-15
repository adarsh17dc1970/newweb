require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');const mongoose = require('mongoose');
const Donation = require('./models/Donation');
const Volunteer = require('./models/Volunteer')

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to DB"))
    .catch(e => console.error(e))


const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'],
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-donation', async (req, res) => {
    try {
        const formData = req.body;

        // Server-Side Date and Time Validation
        const eventDate = new Date(formData.eventDate);
        const eventTime = formData.eventTime;
        const currentDateTime = new Date();
        const selectedDateTime = new Date(`${formData.eventDate}T${eventTime}`);

        if (eventDate < currentDateTime.setHours(0, 0, 0, 0) || selectedDateTime < currentDateTime) {
            return res.status(400).json({ message: 'The event date and time cannot be in the past.' });
        }

        // Server-Side Phone Number Validation
        const phone = formData.phone.trim();
        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: 'Please enter a valid 10-digit phone number.' });
        }

        // Save the valid data to the database
        const donation = new Donation(formData);
        await donation.save();

        res.status(201).json({ message: 'Thank you for your donation!', donation });
    } catch (error) {
        console.error('Error processing donation:', error);
        res.status(500).json({ message: 'An error occurred while processing your donation.' });
    }
});

app.post('/submit-volunteer', async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Inspect body
        const { firstName, lastName, email, phone, preferredRole, motivation } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !phone || !preferredRole || !motivation) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new volunteer
        const newVolunteer = new Volunteer({
            firstName,
            lastName,
            email,
            phone,
            preferredRole,
            motivation,
        });

        // Save to database
        await newVolunteer.save();

        // Send response back
        res.status(201).json({ message: 'Volunteer application submitted successfully!' });
    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
