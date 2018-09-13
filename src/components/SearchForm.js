import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorMessage from './ErrorMessage';
import { searchMovies } from "../actions/movie";

class SearchForm extends Component {
	state = {
		error: ''
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const searchText = e.target.search.value;

		if (searchText) {
			const movie = searchText.trim().split(' ').join("_")
			this.props.searchMovies({ movie })
			this.setState(({ error }) => ({
        error: ""
			}));
			 e.target.search.value = "";
		}else{
			this.setState(({ error }) => ({ error: 'Movie name cannot be blank' }))
		}
	}
	renderError(){
		const error = this.state.error;
		if(error) return <ErrorMessage error={error} />;
	}
	render() {
		return (
			<div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
						<input id="search" type="text" name="search" placeholder="Search movie by title" autoComplete="off" />
						{this.renderError()}
          </div>
          <button className="btn waves-effect waves-light right" type="submit" name="action">
            Search
            <i className="material-icons right">search</i>
          </button>
        </form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	searchMovies: (movie) => dispatch(searchMovies(movie))
})


export default connect(null, mapDispatchToProps)(SearchForm);