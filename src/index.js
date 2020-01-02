import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import withSession from './components/withSession';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Recipe/Search';
import Profile from 'components/Profile/Profile';
import AddRecipe from 'components/Recipe/AddRecipe';
import RecipePage from 'components/Recipe/RecipePage';

const client = new ApolloClient({
	uri: "http://localhost:3001/graphql",
	fetchOptions: {
		credentials: "include"
	},

	request: operation => {
		const token = localStorage.getItem("token");
		operation.setContext({
			headers: {
				authorization: token
			}
		})
	},

	onError: ({ networkError }) => {
		if (networkError) {
			console.log("Network error", networkError);
		}

	}
})

const Root = ({ refetch, session }) => (
	<Router>
		<Navbar session={session} />
		<Switch>
			<Route path="/" exact component={App} />
			<Route path="/search" component={Search} />
			<Route path="/signin" render={() => <Signin refetch={refetch} />} />
			<Route path="/signup" render={() => <Signup refetch={refetch} />} />
			<Route path="/recipe/add" component={AddRecipe} />
			<Route path="/recipe/:id" component={RecipePage} /> 
			<Route path="/profile" component={Profile} />
			<Redirect to="/" />
		</Switch>
	</Router>
)

const RootWithSession = withSession(Root);


ReactDOM.render(
	<ApolloProvider client={client} >
		<RootWithSession />
	</ApolloProvider>
	, document.getElementById('root'));

module.hot.accept();

