import React from 'react'

const ErrorMessage = ({ error }) => (
	<p style={{ background: '#EF5350', color: '#fff', padding: '10px', textAlign: 'center', transition: 'all .3s ease' }}>
		{error}
	</p>
);

export default ErrorMessage;