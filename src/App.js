import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { renderRoutesHome } from './routes/index';
// import { actTryLogin } from './containers/AdminTemplate/Auth/modules/actions';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = props => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(actTryLogin(props.history));
	// }, []);
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Switch>
				{renderRoutesHome()}
				{/* {renderRouteAdmin()} */}
				{/* <Route path='/auth' component={lazy(() => import('containers/AdminTemplate/Auth'))} /> */}
				{/* <Route path='' component={lazy(() => import('containers/PageNotFound'))} /> */}
			</Switch>
		</Suspense>
	);
};

export default withRouter(App);
