import Store from './entities/Store'
import PageInterface from './interfaces/PageInterface'
import getPage from './getPage'

const container = document.getElementById("all") as HTMLElement;

function App(container: HTMLElement): {
	render: (route: string) => void;
	store: Store;
} {

	const store = new Store;

	store.fetchProducts();

	function render(route: string) {

		/**
		* Obtiene la página en base al url indicado
		* Accede a los métodos (render y registerEvents) de las páginas para cargar la información
		*/

		let page: PageInterface = new (getPage(route) as any)();

		page.render(container);
		page.registerEvents(document);
	}

	return { render, store };
}

const app = App(container);
const store = app.store;
const catalog = store.getCatalog();

window.onload = () => (window.location.hash = '#/');

app.render('#/');


window.addEventListener("hashchange", () => {

	const route = window.location.hash;

	app.render(route);
	
});

export { store, catalog };