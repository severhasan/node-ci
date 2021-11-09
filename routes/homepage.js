const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Hello world!');
});

// fake post route
router.post('/post', (req, res) => {
  // validate body
  if (!req.body.input || typeof req.body.input !== 'string') {
    return res.status(400).send('Invalid input');
  }

  res.send({ input: req.body.input });
});

module.exports = router;
