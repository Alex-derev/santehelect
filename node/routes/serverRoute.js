const { Router } = require('express');
const controller = require('../controllers/serverController');

const router = new Router();

router.get('/send-mail', controller.sendMail);

module.exports = router;