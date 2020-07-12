import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import styled from "styled-components";


class Home extends Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
		);
		this.setState({ movies, isLoading: false });
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoading, movies } = this.state;
		return isLoading ? (
			<Loader>
				<span className="loader_text">Loading...</span>
			</Loader>
		) : (
				<div className="movies">
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							year={movie.year}
							title={movie.title}
							summary={movie.summary}
							poster={movie.medium_cover_image}
							genres={movie.genres}
						/>
					))}
				</div>
			);
	}
}

const Loader = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
`

export default Home;
