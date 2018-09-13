import React from 'react';
import { connect } from 'react-redux';

import { selectMovie } from '../actions/movie';

const MovieItems = ({ imdbID, Title, Poster, selectMovie }) => {
	const hasPoster = Poster === "N/A" || Poster === "";
	return (
		<div className="card" style={{ margin: '0 20px 20px 0', maxWidth: '300px' }}>
			<div className="card-image waves-effect waves-block waves-light">
				{
					!hasPoster ? <img src={Poster} style={{ maxHeight: '400px' }} alt={`${Title}-poster`} /> :
					<div style={{ alignItems: 'center', background: '#ccc', color: "#fff", display: 'flex', height: '400px', justifyContent: 'center' }}>
						<span style={{ transform: "rotate(-45deg)", fontSize: "60px" }}>No Poster</span>
					</div>
				}
    	</div>
			<div className="card-content">
				<span className="card-title grey-text text-darken-4">{ Title }</span>
				<p><a className="waves-effect waves-teal btn" onClick={() => selectMovie(imdbID)}>Details</a></p>
			</div>
		</div>
	)
};

const mapDispatchToProps = dispatch => ({
	selectMovie: (id) => dispatch(selectMovie(id))
})

export default connect(null, mapDispatchToProps)(MovieItems);