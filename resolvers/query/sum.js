const sum = {
  //you have to destructure the args variable correctlly
  sum: (parent, { number_1, number_2 }) => {
    const sum = parseInt(number_1) + parseInt(number_2);

    return number_1 + number_2;
  }
};

module.exports = {
  sum
};
