const MovieResolver = {
  Movie: {
    name: parent => {
      return "Its name is " + parent.name;
    }
  }
};

module.exports = MovieResolver;
