import React from 'react';
import ReactDOM from 'react-dom';
// TODO: base style sheet
import { BrowserRouter, Route } from 'react-router-dom';

const TestComponent = () => (
	<div>Good to go!</div>
);

const routes = (
	<BrowserRouter>
		<Route path="/" component={TestComponent} />
	</BrowserRouter>
);

window.addEventListener('DOMContentLoaded', init);

function init(){
	window.removeEventListener('DOMContentLoaded', init);
	ReactDOM.render(routes, document.querySelector('#app'));
}
