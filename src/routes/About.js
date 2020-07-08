import React from "react";
import styled from "styled-components";

function About(props) {
	console.log(props);
	return (
		<Container>
			<Span>About this page: React Movie App</Span>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 10%;
`;

const Span = styled.span`
	padding: 5rem;
	background-color: white;
	border-radius: 50px;
	background: #ececec;
	box-shadow: 26px 26px 53px #c9c9c9, -26px -26px 53px #ffffff;
`;

export default About;
