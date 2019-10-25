const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get a users contacts.');
});

router.post('/', (req, res) => {
  res.send('Create a new contact.');
});

router.put('/', (req, res) => {
  res.send('Update a contact.');
});

router.delete('/', (req, res) => {
  res.send('Delete a contact.');
});

module.exports = router;
