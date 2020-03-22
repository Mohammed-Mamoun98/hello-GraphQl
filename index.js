const { ApolloServer, gql } = require("apollo-server");
const express = require("express");
const app = express();
const { Query } = require("./resolvers/query/index");
const MovieResolver = require("./resolvers/movie");
const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

//graphQl schema
//Query is for Retreive
//Mutaion is for Create Update Delete
//this is a desription how you should return your data {BackEnd responsibilty}

const typeDefs = gql`
  type response {
    msg: String!
  }

  type MyInfo {
    name: String!
    age: Int!
    music: String
  }

  type Query {
    hello(input: String!): response
    yes: String!
    myInfo: MyInfo!
    greeting(name: String!): String
    sum(number_1: Int = 0, number_2: Int = 0): Int
    getMovies: [Movie]
  }

  type User {
    id: String!
    userName: String!
  }

  type RegisterResponse {
    user: User!
    date: String!
    errors: Error
  }

  type Error {
    name: String!
    feild: String!
  }

  type ReqBody {
    name: String!
    password: String!
  }

  type LoginResponse {
    status: String
  }

  input UserCredintial {
    name: String!
    password: String!
  }

  type Mutation {
    register(userCred: UserCredintial): RegisterResponse!
    login(userCred: UserCredintial): String!
  }

  type Student {
    name: String!
    id: String!
  }

  type Movie {
    name: String!
    dateOfShow: String!
    ticketPrice: Int!
  }
`;

//resolver is just like reducers it's resticted to the schema
//Structure : It's an object! , so we can reconstruct it in seprate files
const resolvers = {
  //you can acces the properties of the parent which is the wrapper of the prop and  it's working as a middleware
  MyInfo: {
    name: parent => {
      console.log(parent);
      return `altered Data ${parent.name + "s".toUpperCase()} , original data ${
        parent.name
      }`;
    },
    age: parent => {
      console.log(parent.age);
      return parent.age + 20;
    }
  },

  ...MovieResolver,

  ...Query,
  Mutation: {
    login: (parent, { userCred: { name } }, context, info) => {
      console.log(name);

      const status = name === "mido" ? "Authorized" : "not Authorized";

      return status;
    },

    register: () => ({
      user: {
        id: 1,
        userName: "mohammed"
      },
      date: new Date(),
      errors: { name: "bad name ", feild: "useName" }
    })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server is up at ${url}`));
