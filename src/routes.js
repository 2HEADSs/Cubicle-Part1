const express = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const router = express.Router();

router.use('/', homeController);
router.use('/cube', cubeController);

module.exports = router;
