import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

function App() {
	return (
		<section className="container">
			<HashRouter>
				<Navigation></Navigation>
				<Route path="/" exact={true} component={Home}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/movie/:id" component={Detail}></Route>
			</HashRouter>
		</section>
	);
}

export default App;
