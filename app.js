// app.js
require('dotenv').config();
const express = require('express');
const app = express();
const processMeetingRoute = require('./routes/processMeeting');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/process-meeting', processMeetingRoute);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
