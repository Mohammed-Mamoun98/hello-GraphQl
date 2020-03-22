const greeting = {
  greeting: async (parent, { name }) => {
    //you can add async to the resolver even when it return a promise the resolver will resolve the promise
    //and you can fetch data from REST here too
    await wait(3000);
    return `hey buddy, your name is ${name}`;
  }
};

module.exports = {
  greeting
};
