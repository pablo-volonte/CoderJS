/*let Verdadero = true;
while (Verdadero) {
	let nombreUsuario = prompt("Ingrese su Nombre");
	let apellidoUsuario = prompt("Ahora ingrese su Apellido");
	if (nombreUsuario == "" || apellidoUsuario == "") {
		confirm("¡ATENCION! Ingrese la informacíon Completa");
	} else {
		Verdadero=false;
		let nombreCompleto = nombreUsuario + " " + apellidoUsuario;
		alert("Felicitaciones" + " " + nombreCompleto + " " + ",Bienvenido");
		console.log("El nombre completo es" + " " + nombreCompleto);
	}
}
s

//					//				//

/*
 let numeroElegido = parseInt(prompt("ingrese un numero del 1 al 10"));
let numeroPedido = parseInt(prompt("Pida un numero del 1 al 10 y colóquelo"));

function ingresoNum(pedido) {
	console.log(pedido);
}
ingresoNum(numeroPedido);
while (Verdadero) {
	if (numeroElegido == numeroPedido && numeroElegido < 11) {
		Verdadero = false;
		alert("Bravo!! Acertaste con el número");
	} else {
		numeroPedido = parseInt(prompt("Pida otro numero "));
		alert(numeroPedido + " " + "No es el número elegido, siga intentando");
	}
}
 */

//					//						//

/*
const iva = 1.21;
let producto;
let precioProducto;

const ingresoProducto = () => {
	do {
		producto = prompt("Ingrese por favor un nuevo producto");
	} while (producto === "");
	console.log(`El producto que ingresó es: ${producto}`);
};

const ingresoPrecio = () => {
	do {
		precioProducto = parseFloat(
			prompt(`Asigne el costo del producto "${producto}"`)
		);
	} while (isNaN(precioProducto) || precioProducto === "");
	console.log(`El precio de ${producto} es $ ${precioProducto}`);
};

const precioFinal = () => {
	let valorfinal = precioProducto * iva;
	alert(`el precio final de ${producto} es ${valorfinal}`);
};

ingresoProducto();
ingresoPrecio();
precioFinal();

*/

//					//				//

/*
 const producto1 = {
	item: 10,
	descripción: "manteca",
	precio: 100,
	stock: 50,
};
console.log(producto1.descripción);
//
console.log([producto1]);
//
for (let prop in producto1) {
	console.log(producto1[prop]);
}
//
for (let prop in producto1) {
	if (prop == "precio") {
		console.log((producto1[prop] = producto1[prop] * 1.21));
	}
}
*/

//	OBJETOS				///			OBJETOS			///

/*
let opcion1 = parseInt(
	prompt("Ingrese: \n 1 para cargar nuevo producto \n 2 para modificar stock")
);
let opcion2;
let aux1;
verdadero = true;
const IVA = 1.21;
let precio;

class Producto {
	constructor(item, descripcion, precio, stock) {
		(this.item = item),
			(this.descripcion = descripcion),
			(this.precio = precio),
			(this.stock = stock);
	}
	mostrarProducto() {
		console.log(producto1);
	}
	mostrarStock() {
		console.log(this.stock);
	}
	aumentarStock(nuevoStock) {
		this.stock += nuevoStock;
	}
	disminuirStock(nuevoStock) {
		if (this.stock - nuevoStock < 0) {
			alert("Ingrese stock válido");
		} else {
			this.stock -= nuevoStock;
		}
	}
}


const producto1 = new Producto(
	parseInt(prompt("Ingrese nro de Item")),
	(aux1 = prompt("Ingrese Descripción del producto")),
	(precio = parseFloat(prompt(`Ingrese el precio de ${aux1}`))) * IVA,
	parseInt(prompt(`Ingrese la cantidad en stock de ${aux1}`))
);
if (opcion1 === 1) {
} else if (opcion1 === 2) {
	opcion2 = parseInt(
		prompt("Ingrese: \n 1 para aumentar stock \n 2 para disminuir stock")
	);
	if (opcion2 === 1) {
		producto1.aumentarStock(
			parseInt(prompt("Ingrese un valor a aumentar"))
		);
	} else if (opcion2 === 2) {
		producto1.disminuirStock(parseInt(prompt("Ingrese valor a disminuir")));
	}
} else {
	alert("Ingrese un valor válido");
}
producto1.mostrarProducto();
producto1.mostrarStock();
 */

//	ARRAY				///			ARRAY			///

let usuario1 = [
	prompt("Ingrese nombre de usuario 1"),
	parseInt(prompt("ingrese edad de usuario 1")),
];
let usuario2 = [
	prompt("Ingrese nombre de usuario 2"),
	parseInt(prompt("ingrese edad de usuario 2")),
];

console.log(usuario1, usuario2);

usuario2.push("Emi");

console.log(usuario1, usuario2);

usuario1.splice(1, 1);
console.log(usuario1, usuario2);

let usuariosTotales = usuario1.concat(usuario2);
console.log(usuariosTotales);
console.log(usuariosTotales.length);

eliminarNombre = prompt("Escriba nombre a Eliminar");
let indice = usuariosTotales.indexOf(eliminarNombre);

if (indice != -1) {
	usuariosTotales.splice(indice, 1);
	confirm(`¿está seguro que quiere eliminar a ${eliminarNombre}?`);
} else {
	alert("Inserte un nombre válido");
}
console.log(usuariosTotales);
