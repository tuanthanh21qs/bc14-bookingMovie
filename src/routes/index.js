import { lazy } from 'react';
import HomeTemplate from '../containers/client';

const routesHome = [
	{
		exact: true,
		path: '/',
		component: lazy(() => import('../containers/client/Home'))
	},
	// {
	// 	exact: false,
	// 	path: '/gioi-thieu',
	// 	component: lazy(() => import('containers/client/AboutPage'))
	// },
	{
		exact: false,
		path: '/danh-sach-phim',
		component: lazy(() => import('../containers/client/ListMovie'))
	}
	// {
	// 	exact: false,
	// 	path: '/chi-tiet/:id',
	// 	component: lazy(() => import('containers/client/DetailMoviePage'))
	// },
];
// const routesAdmin = [
// 	{
// 		exact: false,
// 		path: '/dashboard',
// 		component: lazy(() => import('containers/AdminTemplate/DashboardPage'))
// 	},
// 	{
// 		exact: false,
// 		path: '/add-user',
// 		component: lazy(() => import('containers/AdminTemplate/AddUserPage'))
// 	}
// ];

const renderRoutesHome = () => {
	return routesHome.map((route, index) => {
		return (
			<HomeTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
		);
	});
};

// const renderRouteAdmin = () => {
// 	return routesAdmin.map((route, index) => {
// 		return (
// 			<AdminTemplate
// 				key={index}
// 				exact={route.exact}
// 				path={route.path}
// 				Component={route.component}></AdminTemplate>
// 		);
// 	});
// };

export { renderRoutesHome };
