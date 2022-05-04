let Verdadero = true;
/*while (Verdadero) {
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



*/
/* let numeroElegido = parseInt(prompt("ingrese un numero del 1 al 10"));
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
