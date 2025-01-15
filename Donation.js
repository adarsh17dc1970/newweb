const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  eventType: {
    type: String,
    enum: ['Wedding', 'Corporate Event', 'Conference', 'Party', 'Other'],
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  foodType: {
    type: [String], // Array of strings for multiple food types
    enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Desserts'],
    required: true,
  },
  servings: {
    type: Number,
    required: true,
    min: 1,
  },
  foodDescription: {
    type: String,
    required: true,
    trim: true,
  },
  donorName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  pickupAddress: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Donation', donationSchema);
