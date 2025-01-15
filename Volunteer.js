const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, match: /^\d{10}$/ },
    preferredRole: { type: String, required: true, enum: ['Food Collection', 'Food Distribution', 'Community Outreach'] },
    motivation: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);
