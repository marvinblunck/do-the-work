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
mutation AddNutrition($sleep: Int!, $water: Int!, $weight: Int!) {
  addNutrition(sleep:$sleep, water: $water, weight: $weight) {
    _id
    sleep
    water
    weight 
  }
}
`;
