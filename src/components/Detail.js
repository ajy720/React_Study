import React from "react";
import { Redirect } from "react-router-dom";
import "./Detail.css";

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
				<div className="detail">
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
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
