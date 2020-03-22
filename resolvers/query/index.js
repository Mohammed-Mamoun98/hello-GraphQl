const { hello, myInfo, yes } = require("./simpleQuery");
const { sum } = require("./sum");
const { getMovies } = require("./getMovies");
const { greeting } = require("./asyncGreeting");

const Query = {
  Query: {
    ...hello,
    ...yes,
    ...myInfo,
    ...sum,
    ...greeting,
    ...getMovies
  }
};

module.exports = {
  Query
};
