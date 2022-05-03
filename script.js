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
} */
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
