const hello = {
  hello: (parent, { input }) => ({
    msg: `hello ${input}`,
    sum: 0
  })
};

const yes = { yes: () => "no" };

const myInfo = {
  myInfo: () => ({
    name: "mido",
    age: 22
  })
};

module.exports = {
  hello,
  yes,
  myInfo
};
