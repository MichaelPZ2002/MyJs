//Ejemplos de tipos de datos en JavaScript
// 1.
// tipo de dato string
var nombre = "Carlos";
console.log(nombre);
nombre = 10;
console.log(nombre);
console.log(typeof nombre);

// Tipo de dato numerico
var numero = "1000";
console.log(numero);

//Tipo de dato objeto
var object = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "829-954-8224",
};
console.log(object);
console.log(typeof object);

//Tipo de datgo boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);

//tipo de dato Symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una funcion

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined

var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null

var y = null;
console.log(y);
console.log(typeof y);

//

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z);
