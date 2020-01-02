import { gql } from "apollo-boost";

export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      category
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

export const GET_RECIPE = gql`
  query ($_id:ID!){
    getRecipe(_id:$_id){
      _id
      name
      category
      description
      instructions
      createdDate
      likes
      username
    }
  }
`