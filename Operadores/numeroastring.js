let miNumero = "21x";

//console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  if (edad >= 18) {
    //console.log(typeof edad)
    console.log("Puede votar");
  } else console.log("Muy Joven para votar");
}

///////////////////
if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  let resultado = edad >= 18 ? "Puede votar" : "No puede votar";
  console.log(resultado);
}
