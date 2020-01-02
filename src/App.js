import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_RECIPES } from './queries'
import './App.css'
import RecipeItem from 'components/Recipe/RecipeItem'

export class App extends Component {
  render() {
    return (
      <div className="flexer">
        <Query query={GET_ALL_RECIPES}>
          {({ loading, data, error }) => {
            if (loading) return <div>Loading</div>
            if (error) return <div>Error</div>
            if (data) return (
              <div className="flexer w-100" style={{ flexDirection: 'column' }}>
                <h2>Recipes</h2>
                <ul style={{ textAlign: "center" }}>
                  {data.getAllRecipes.map(recipe =>
                    <RecipeItem key={recipe._id} {...recipe} />
                )}
                </ul>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default App
