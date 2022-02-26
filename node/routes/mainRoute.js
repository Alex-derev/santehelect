const { Router } = require('express');
const controller = require('../controllers/appController');

const router = new Router();

router.get('/', controller.index);

module.exports = router;