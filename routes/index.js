const express = require('express');
const router = express.Router();

router.use('/', require('./homepage'));
router.use('/restricted', require('./restricted'));

module.exports = router;
