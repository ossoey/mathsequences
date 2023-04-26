const getLucasSequence = (start, end) => {
    const sequence = [2, 1];
    for (let i = 2; i <= end; i++) {
      const current = sequence[i - 1] + sequence[i - 2];
      sequence.push(current);
    }
    return sequence.slice(start, end + 1);
  };
  
  module.exports = {
    getLucasSequence
  };