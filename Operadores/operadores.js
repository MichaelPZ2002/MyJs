//ejemplo de and (&&), regresa true si y solo si ambos operandos son true
let a = 5;

let valMin = 0,
  valMax = 10;

if (a >= valMin && a <= valMax) {
  console.log("Dentro de rango");
} else {
  console.log("Fuera de rango");
}

//Ejemplo de or ||(alt + 124), regresa true si cualquiera de los operandos es true

let vacaciones = true,
  diaDescanso = false;

if (vacaciones || diaDescanso) {
  console.log("Padre puede asistir al juego del hijo");
} else {
  console.log("El padre estara ocupado");
}
