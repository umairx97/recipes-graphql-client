import React from 'react'
import { withRouter } from 'react-router-dom'
import { GET_RECIPE } from 'queries';
import { Query } from 'react-apollo'

const RecipePage = ({ match }) => {
    const { id } = match.params;

    return (
        <Query query={GET_RECIPE} variables={{ _id: id }}>
            {({ data, loading, error }) => {
                if (loading) return <div>Loading...</div>
                if (error) return <div>Error</div>
                return (
                    <div className="App">
                        <h2>{data.getRecipe.name}</h2>
                        <p>Category: {data.getRecipe.category}</p>
                        <p>Description: {data.getRecipe.description}</p>
                        <p>Instructions: {data.getRecipe.instructions}</p>
                        <p>Likes: {data.getRecipe.likes}</p>
                        <p>Created By: {data.getRecipe.username}</p>
                        <button>Like</button>
                    </div>
                )
            }}
        </Query>
    )
}

export default withRouter(RecipePage)