var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: 'healthy 2!' });
});

module.exports = router;
