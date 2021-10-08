export default function routeParams() {

  /**
   * Lee el hash de la página
   * Divide su info
   * Obtiene el id del producto
   * Obtiene el path
   * Devuelve la info de utilidad
   */
  
	const url = window.location.hash; 
	const splited = url.split("/");  
	const productId = splited[2];  
	const path = splited.slice(0, 2).join("/");  
	return { path, productId };  
  
}