import React from 'react';

const Pending = () => (
	<div style={{ marginTop: '80px', width: '100%', textAlign: 'center' }}>
		<div className="preloader-wrapper big active">
			<div className="spinner-layer spinner-blue">
					<div className="circle-clipper left">
						<div className="circle"></div>
					</div><div className="gap-patch">
						<div className="circle"></div>
					</div><div className="circle-clipper right">
						<div className="circle"></div>
					</div>
				</div>
		</div>
		<p>Loading...</p>
	</div>
);

export default Pending;