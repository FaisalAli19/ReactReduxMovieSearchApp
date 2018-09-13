import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItems from "./MovieItems";

class MovieLists extends Component {
	renderMovies(){
		return this.props.movies.map(movie => (
      <MovieItems key={movie.imdbID} {...movie} />
    ));
	}
	render() {
		return (
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '80px' }}>
				{this.renderMovies()}
			</div>
		)
	}
}

const mapStateToProps = ({ movies: {movies} }) => ({ movies })


export default connect(mapStateToProps)(MovieLists);
