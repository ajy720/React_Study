import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navagation() {
	return (
		<div id="nav">
			<Link className="link" to="/">
				Home
			</Link>
			<Link
				className="link"
				to={{
					pathname: "/about",
					state: {
						fromNavigation: true,
					},
				}}
			>
				About
			</Link>
		</div>
	);
}

export default Navagation;
