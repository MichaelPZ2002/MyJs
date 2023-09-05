let a = 3,
  b = 2,
  c = "3";

let z = a == b; //Revisa el valor y verifica si es igual sin importar si es number o string

console.log(z);

z = a === c; //Revisa los valores pero tambien el tipo
console.log(z);

z = a != c; //el simbolo !=(! =) compara si son diferentes, en el caso del ejemplo al ser iguales en termino de numero da false
console.log(z);

z = a != b; //En este ejemplo da true porque si son diferentes en lo que se refiere a numero
console.log(z);

z = a !== c; // en este caso da true porque a pesar de ser el mismo numero no son del mismo tipo ya que se usa !==(! = =) y este tambien compara el tipo
console.log(z);
