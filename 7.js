'use strict';
/*Exercise 7
Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido
*/

var num = parseInt(prompt("Introduce un numero: "));

for (let i = 1; i <= num; i++){
    let mult = i*num;
    console.log(num + " X " + i + " = " + mult);
}

console.log("=============");

//plus
for (let i = 1; i <= num; i++){
    alert("Tabla de "+i)
    for (let j = 1; j <= num; j++){
        let mult = i*j;
        console.log(i + " X " + j + " = " + mult);
    }
}