// routes/processMeeting.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const { processMeetingNotes } = require('../services/ai');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res, next) => {
  try {
    let rawText = '';

    if (req.file) {
      rawText = fs.readFileSync(req.file.path, 'utf-8');
    } else if (req.body.text) {
      rawText = req.body.text;
    }

    if (!rawText) {
      return res.status(400).json({ error: 'No input text provided.' });
    }

    const result = await processMeetingNotes(rawText);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
