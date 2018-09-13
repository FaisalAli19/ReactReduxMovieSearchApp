import React from 'react';
import { connect } from 'react-redux'

import { clearDetails } from '../actions/movie';
import './MovieDetails.css';

const fontStyle = {
	fontWeight: 'bold',
}

const spacing = {
	marginBottom: '20px'
}

const posterImg = {
	marginBottom: '20px',
	maxHeight: '400px',
	maxWidth: '300px',
	minWidth: '300px'
}

const noPoster = {
	alignItems: 'center', 
	background: '#ccc', 
	color: "#fff", 
	display: 'flex', 
	height: '400px', 
	justifyContent: 'center', 
	marginBottom: '20px',
	maxWidth: '300px',
	minWidth: '300px'
}

const noPosterSpan = {
	transform: "rotate(-45deg)", 
	fontSize: "60px"
}

const detailsContainer = {
	marginLeft: '20px'
}

const movieStyle = { margin: '0', marginBottom: '10px' }

const MovieDetails = ({ selectedMovie, clearDetails	}) => {
	const { Title, Poster, Released, Genre, Plot, imdbRating, imdbID } = selectedMovie
	const hasPoster = Poster === "N/A" || Poster === "";
	return (
		<div className="wrapperStyle">
			{
				!hasPoster ? <img src={Poster} style={posterImg} alt={`${Title}-poster`} /> :
					<div style={noPoster}>
						<span style={noPosterSpan}>No Poster</span>
					</div>
			}
			<div style={detailsContainer}>
				<h4 style={movieStyle}>{Title}</h4>
				<p style={ spacing }><span style={ fontStyle }>Plot:</span> <br /> {Plot}</p>
				<p style={ spacing }><span style={ fontStyle }>Released Date:</span> {Released}</p>
				<p style={ spacing }><span style={ fontStyle }>Genre:</span> {Genre}</p>
				<p style={ spacing }><span style={ fontStyle }>IMDB Rating:</span> {imdbRating}</p>
				<a className="waves-effect waves-teal btn" href={`https://www.imdb.com/title/${imdbID}`} target="_blank">View on Imdb</a>
				<button className="waves-effect waves-teal btn right" onClick={() => clearDetails()}>Go Back</button>
			</div>
		</div>
	)
};

const mapStateToProps = ({ selectedMovie: { selectedMovie } }) => ({ selectedMovie });

const mapDispatchToProps = dispatch => ({
	clearDetails: () => dispatch(clearDetails())
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);