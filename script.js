let Verdadero = true;
while (Verdadero) {
	let nombreUsuario = prompt("Ingrese su Nombre");
	let apellidoUsuario = prompt("Ahora ingrese su Apellido");
	if (nombreUsuario == "" || apellidoUsuario == "") {
		confirm("¡ATENCION! Ingrese la informacíon Completa");
	} else {
		Verdadero = false;
		let nombreCompleto = nombreUsuario + " " + apellidoUsuario;
		alert("Felicitaciones" + " " + nombreCompleto + " " + ",Bienvenido");
	}
}
