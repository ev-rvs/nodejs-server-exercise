const express = require('express');
const router = express.Router();

const { getAllPongEventCount } = require('../db/sequelize');

router.get('/', async (req, res, next) => {
  const pongCount = await getAllPongEventCount();
  if (pongCount && typeof pongCount.count !== 'undefined') {
    res.status('200').json({ message: "PING", pingCount: pongCount.count });
  } else {
    res.status('400').json({ message: "There was an error with your pong count." });
  }
});

module.exports = router;
