const express = require('express');
const { genUrl } = require('./controller');

const router = express.Router();

router.post('/gen-slug', genUrl);

module.exports = router;