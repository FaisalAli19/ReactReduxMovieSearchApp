import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import MovieLists from "./MovieLists";
import Pending from './Pending';

class Renderer extends Component {
	renderComponents(){
		const { error, isPending, isMovieSelected } = this.props;

		if (error) return <ErrorMessage error={error} />
		else if (isPending) return <Pending />
		else if (isMovieSelected) return <MovieDetails />;
		else return <MovieLists />
	}
	render() {
		return (
			<div className="container">
				{this.renderComponents()}
			</div>
		)
	}
}

const mapStateToProps = ({ movies, selectedMovie }) => ({
  error: movies.error || selectedMovie.error,
	isPending: movies.isPending || selectedMovie.isPending,
	isMovieSelected: selectedMovie.isMovieSelected
});

export default connect(mapStateToProps)(Renderer);