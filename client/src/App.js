import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";
import NoMatch from "./pages/NoMatch.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Nav from "./components/Nav/index.js";
import { StoreProvider } from "./utils/GlobalState.js";
import Success from "./pages/Success.js";
import OrderHistory from "./pages/OrderHistory.js";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<StoreProvider>
						<Nav />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/success" element={<Success />} />
							<Route path="/orderHistory" element={<OrderHistory />} />
							<Route path="/products/:id" element={<Detail />} />
							<Route path="*" element={<NoMatch />} />
						</Routes>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
