

const { getLucasSequence } = require('../models/lucas');

const getSequence = (req, res) => {
  const start = parseInt(req.params.start);
  const end = parseInt(req.params.end);
 console.log(`Controller Received request for start and end${start },${ end  } `);
  const sequence = getLucasSequence(start, end);
  
   console.log(`Controller Received request for sequence ${JSON.stringify(sequence)}`);
  res.json(sequence);
};

module.exports = {
  getSequence
};