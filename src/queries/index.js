import { gql } from "apollo-boost";

export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      name
      description
      instructions
      username
      _id
      createdDate
    }
  }
`;


export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username, 
      email, 
      joinDate

    }
  }
`


export const SIGNUP_USER = gql`
  mutation($username: String!, $password: String!, $email: String!) {
    signupUser(username: $username, password: $password, email: $email) {
      token
    }
  }
`;


export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password:$password){
      token
    }
  }
`