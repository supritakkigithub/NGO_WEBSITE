// backend/routes/volunteerRoutes.js
const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer'); // ✅ Make sure this is correct

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newVolunteer = new Volunteer({ name, email, message }); // ✅ This line was failing
    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

module.exports = router;
