import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_RECIPES } from './queries'
import './App.css'
import axios from 'axios'

export class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Query query={GET_ALL_RECIPES}>
          {({ loading, data, error }) => {
            if (loading) return <div>Loading</div>
            if (error) return <div>Error</div>
            if (data) return <div>{data.getAllRecipes.map(item => <ul>
              <li>{item.name}</li>
              <li>{item._id}</li>

            </ul>
            )}</div>
          }}
        </Query>



      </div>
    )
  }
}

export default App
