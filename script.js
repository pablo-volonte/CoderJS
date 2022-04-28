let Verdadero = true;

while (Verdadero) {
	let nombreUsuario = prompt("Ingrese su Nombre");
	let apellidoUsuario = prompt("Ahora ingrese su Apellido");
	if (nombreUsuario == "" || apellidoUsuario == "") {
		confirm("¡ATENCION! Ingrese la informacíon Completa");
	} else {
		Verdadero = false;
	}
}
alert("Felicitaciones, Que seas Bienvenido");

// else {
// 	confirm("Ingresaste" + " " + nombreYapellido + " " + "¿Es correcto?");
// }
/*while (verdadero) {
	
	if (apellidoUsuario == "") {
		confirm("¡ATENCION! Ingrese su Nombre");
	}
	while (Verdadero) {
	let apellidoUsuario = prompt("Ahora ingrese su Apellido");
	if (apellidoUsuario == "") {
		confirm("¡ATENCION! Ingrese su Nombre");
	} else {
		Verdadero = false;
	}
}*/
