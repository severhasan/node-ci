const express = require('express');

const router = express.Router();

router.get('/me', (req, res) => {
  res.send({ id: req.user, username: 'jon_doe' });
});

// fake post route
router.put('/me', (req, res) => {
  const { id, username } = req.body;

  // validate
  if (!id || !username) {
    return res.sendStatus(400);
  }

  res.send(req.body);
});

module.exports = router;
