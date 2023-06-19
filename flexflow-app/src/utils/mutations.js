import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_WORKOUT = gql`
mutation AddWorkout($name: String!, $reps: Int!, $sets: Int!) {
  addWorkout(name: $name, reps: $reps, sets: $sets) {
    _id
    name
    reps
    sets
  }
}
`;

export const ADD_NUTRITION = gql`
mutation AddNutrition($name: String!, $sleep: Int!, $water: Int!, $weight: Int!) {
  addWorkout(name: $name, sleep: $sleep, water: $water, $weight: weight) {
    _id
    name
    sleep
    water
    weight 
  }
}
`;
