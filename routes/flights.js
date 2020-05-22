var express = require('express');
var router = express.Router();
const flightCrtl = require('../controllers/flights');


/* GET users listing. */
router.get('/new', flightCrtl.new);
router.get('/', flightCrtl.index);
router.post('/', flightCrtl.create);
router.delete('/:id', flightCrtl.delete);
router.get('/:id', flightCrtl.show);


module.exports = router;
