import React from "react";
import { Redirect } from "react-router-dom";
import "./Detail.css";
import styled from "styled-components";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}

	render() {
		const { location } = this.props;
		if (location.state !== undefined) {
			const {
				location: {
					state: { id, year, title, summary, poster, genres },
				},
			} = this.props;
			return (
				<DetailPopup className="detail">
					<img src={poster} alt={title} title={title}></img>
					<div className="movie__data">
						<h3 className="movie__title">{title}</h3>
						<h5 className="movie__year">{year}</h5>
						<ul className="genres">
							{genres.map((genre, index) => (
								<li className="genres__genre" key={index}>
									{genre}
								</li>
							))}
						</ul>
						<p className="movie__summary">{summary}</p>
					</div>
				</DetailPopup>
			);
		} else {
			return null;
		}
	}
}

const DetailPopup = styled.div`
	display: flex;
	padding: 50px;
	padding-top: 50px;
	padding-left: 150px;
	${"> img"}{
		width: 25%;
		margin: 0 2.5%;
		max-width: 250px;
		position: relative;
		top: -35px;
		box-shadow: lightgray 0px 0px 10px;
	}

`

export default Detail;
