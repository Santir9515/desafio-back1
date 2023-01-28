class ProducManager {
	constructor() {
		this.products = [];
	}
	addProduct = ({ title, description, price, thumbnail, code, stock }) => {
		if (!title || !description || !price || !thumbnail || !code || !stock)
			return '[!] Error, todos los campos son necesarios';
		if (
			title == ' ' ||
			description == ' ' ||
			price == ' ' ||
			thumbnail == ' ' ||
			code == ' ' ||
			stock == ' '
		)
			return '[!] Error, todos los campos son necesarios';
		const codeExists = this.products.some(product => product.code === code);
		if (codeExists) return '[!] Error, el código ya existe';
		const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
		this.products.push({ id, title, description, price, thumbnail, code, stock });
	};
	getProducts = () => this.products;
	getProductById = id => this.products.find(product => product.id === id) || '[!] Not Found';
}

// Se creará una instancia de la clase “ProductManager
const productManager = new ProducManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un array vacío []
console.log(productManager.getProducts());

// Se llamará al método “addProduct” con los campos:
productManager.addProduct({
	title: 'Samsung galaxy a04',
	description: '64GB',
	price: 125000,
	thumbnail: 'https://res.cloudinary.com/dkgywpwvf/image/upload/v1670370895/Samsung-galaxy-a04-32GB_lrrkeq.png',
	code: 1,
	stock: 25
});

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.error(productManager.getProducts());

// Se llamará al método “addProduct” con los mismos campos de arriba, arrojando error porque el producto se encuentra repetido.
productManager.addProduct({
	title: 'Samsung galaxy a04',
	description: '64GB',
	price: 125000,
	thumbnail: 'https://res.cloudinary.com/dkgywpwvf/image/upload/v1670370895/Samsung-galaxy-a04-32GB_lrrkeq.png',
	code: 1,
	stock: 25
});

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(productManager.getProductById(1));
console.error(productManager.getProductById(3));

productManager.addProduct({
	title: 'Parlante Bluetooth Perrito',
	description: 'Duracion 24hrs sin parar',
	price: 9000,
	thumbnail: 'Sin imagen',
	code: 2,
	stock: 20
});