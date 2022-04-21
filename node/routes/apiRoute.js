const { Router } = require('express');
const controller = require('../controllers/apiController');

const router = new Router();

router.get('/send-mail', controller.sendMail);
router.get('/get-initial-state', controller.getInitialState);

module.exports = router;