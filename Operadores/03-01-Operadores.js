let a = 3,
  b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicacion" + z);

z = a / b;
console.log("Resultado de la division " + z);

z = a % b;
console.log("Resultado del modulo(residuo) " + z);

z = a ** b;
console.log("Resultado del operador exponente " + z);

//Incremento
//Pre-incremento (el operador "++" antes de la variable)

z = ++a;
console.log(a);
console.log(z);
//post-incremento (el operador ++ despues de la variable)

z = b++;
console.log(b);
console.log(z);

//pre-decremento (el operador "--" antes de la variable)
z = --a;
console.log(a);
console.log(z);
//post-decremento (el operador "--" despues de la variable)
z = b--;
console.log(b);
console.log(z);
