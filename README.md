# fabio_trucco_compartido

Tienda de juegos de ajedrez

>## Store

Es clase prinipal y se instancia apenas se abre la página

>>### Atributos

* `user`
* `catalog`
* `product`
* `cart`
* `usersList`

>>### Métodos

* `getUser() -> User`
* `getCatalog() -> Catalog`
* `getCart() -> Cart`
* `fetchProducts()`
* `removeProductById()`
* `fetchUsers()`
* `getUsers()`

>## User

Es la clase del usuario

>>### Atributos

* `id: String`
* `email: String`
* `lastName: String`
* `firstname: String`
* `username: String`
* `country: String`
* `subject: String`
* `checked: Boolean`

>>### Métodos

* `changePassword(oldPassword: String, newPassword: String): void`
* `getId(): String`
* `setId(value: String): void`
* `getLastName(): String`
* `setLastName(value: String): void`
* `getFirstName(): String`
* `setFirstName(value: String): void`
* `getUserName(): String`
* `setUserName(value: String): void`
* `setPassword(newPw: String, oldPw: String): void`
* `getCart(): Cart`
* `getFavorites(): FavoritesCollection`

>## Product

Representa los artículos a la venta, de momento solo juegos completos de ajedrez

>>### Atributos

* `id: String`
* `name: String`
* `maker: String`
* `material: String`
* `theme: String`
* `price: String`
* `comments: String`

>>### Métodos

* `getters y setters`
* `addComments()`

>## Catalog

Representa el catálogo de productos de la tienda.

>>### Atributos

* `products: Array<Product>`

>>### Métodos

* `add(Product): void`
* `all(): Array<Product>`
* `findById(): Product`
<br/>

>## Cart

Carro de compras. Se crea como parte del Store.

>>### Atributos

* `products: Array<Product>`

>>### Métodos

* `Todo`

>## factories

Fábrica de objetos. De momento crea producto solo producto

>>### ProductFactory

>>### UserFactory
<br/>

>## Views


Donde se generan las vistas


>>### productItem

Código para mostrar un nuevo artículo

>>### productsList

Pasa cada producto por el productItem