const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.send("Profile is here"));


module.exports = router;
