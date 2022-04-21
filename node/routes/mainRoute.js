const { Router } = require('express');
const controller = require('../controllers/appController');

const router = new Router();

router.get('/', controller.index);
router.get('/service/:key', controller.service);

module.exports = router;