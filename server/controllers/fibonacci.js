const { getFibonacciSequence } = require("../models/fibonacci");

const getSequence = (req, res) => {

  const length = req.params.length;

  const sequence = getFibonacciSequence(length);
  // console.log(`Controller Received request for length ${length}`);
  // console.log(`Controller Received request for sequence ${JSON.stringify(sequence)}`);

  res.json(sequence);
};

module.exports = {
  getSequence
};


