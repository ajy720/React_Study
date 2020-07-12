import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import styled from 'styled-components'

function Navagation() {
	return (
		<NavigationPopup>
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
		</NavigationPopup>
	);
}

const NavigationPopup = styled.div`
	position: fixed;
	z-index: 9999;
	top: 20px;
	left: 30px;
	display: flex;
	flex-direction: column;
	font-size: 25px;
	text-align: center;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.274) 0px 7px 5px;
	overflow: hidden;
`

// const LinkSeciton = styled.Link`
// 	display: block;
// 	width: 100px;
// 	height: 40px;
// 	line-height: 40px;
// 	text-decoration: none;
// 	color: rgb(77, 160, 255);
// `



export default Navagation;
