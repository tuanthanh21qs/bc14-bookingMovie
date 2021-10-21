import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const LayoutHome = props => {
	return (
		<>
			<Navbar />
			{props.children}
		</>
	);
};

const HomeTemplate = props => {
	const { exact, path, Component } = props;
	return (
		<LayoutHome>
			<Route exact={exact} path={path} component={Component} />
		</LayoutHome>
	);
};

export default HomeTemplate;
