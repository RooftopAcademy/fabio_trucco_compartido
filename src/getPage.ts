import routeParams from './routeParams';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage'
import AboutPage from './pages/AboutPage'
import DetailsPage from './pages/ProductDetailsPage'
import SignUpPage from './pages/SignUpPage'


export default function getPage(url: string): HomePage {
	const path: string = routeParams().path;

	const routes: any = {
		'': HomePage,
		'#/': HomePage,
		'#/store': StorePage,
		'#/details': DetailsPage,
    '#/about': AboutPage,
    '#/signup': SignUpPage,
		//'#/cart': CartPage,
		// '/404': NotFound,
	};

	// if (!routes[path]) {
	// 	return routes['/404'];
	// }

	return routes[path];
}