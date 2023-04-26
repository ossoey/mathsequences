const express = require('express');
const router = express.Router();

const fibonacciController = require('../controllers/fibonacci');
const lucasController = require('../controllers/lucas');
//     ///how to debugg
// router.get('/lucas/:start/:end', (req, res, next) => {
//     console.log(`Received request for lucas config ${req.url}`);
//     next();
// }, lucasController.getSequence);
  
// router.get('/api/fibonacci/:length', fibonacciController.getSequence, (req, res) => {
//     console.log('Request received in route.js');
//     res.json(sequence);
//   });
  

router.get('/fibonacci/:length', fibonacciController.getSequence);


router.get('/lucas/:start/:end', lucasController.getSequence);


module.exports = router;



