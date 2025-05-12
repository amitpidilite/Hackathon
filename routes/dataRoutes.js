const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

router.get('/all', dataController.getAllData);

module.exports = router;
