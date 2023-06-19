const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  workouts: [Workout]
}
type Workout{
  _id: ID
  name: String
  sets: Int
  reps: Int
}

type Nutrition{
  _id: ID
  name: String
  sleep: Int
  Water: Int
  Weight: Int
}
  type Auth {
   token: ID!
    user: User
  }

  type Query {
    user: [User]
    me: User
    matchups(username: String!): [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(name: String!, reps:Int!, sets:Int!): Workout
  }
`;

module.exports = typeDefs;