const express = require('express');
const router = express.Router();

const { pongEvent } = require('../db/sequelize');

router.get('/', async (req, res, next) => {
  const client_host = (req.headers['x-forwarded-for'] || '').split(',')[0] 
  || req.ip.split(":").pop();
  const savedPongEvent = await pongEvent.create({ client_host });

  if (savedPongEvent) {
    res.status('200').json({ message: "PONG" });
  } else {
    res.status('400').json({ message: "There was an error with your ping." });
  }
});

module.exports = router;
