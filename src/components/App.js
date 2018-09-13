import React from 'react';

import Header from "./Header";
import Renderer from "./Renderer";
import SearchForm from "./SearchForm";

const App = () => (
	<div>
		<Header />
		<SearchForm />
		<Renderer />
	</div>
);

export default App;
