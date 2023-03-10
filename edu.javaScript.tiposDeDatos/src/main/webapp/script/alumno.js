function ejemplo() {

	class alumno {
		constructor(nombre, apellidos, edad) {
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.edad = edad;
		}
	}

	var raul = new alumno("Raúl", "Cordero Diaz", 18);
	
	document.writeln(typeof(raul));
	document.writeln(raul instanceof alumno);
	document.writeln(raul instanceof Object);

	document.writeln(raul.nombre);
	document.writeln(raul.apellidos);
	document.writeln(raul.edad);
}