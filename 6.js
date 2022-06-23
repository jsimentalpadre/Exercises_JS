'use strict';
/*Exercise 6
Hacer un programa que nos diga si es Par e Inpar
1.- Ventana Promt
2.- Si no es valido que nos pida de nuevo el Numero
*/

do {
    var num = parseInt(prompt("Introduce un numero: "));
    
    if (isNaN(num)) {
        alert("Introduce un numero");
    }
    else if (num % 2 == 0) {
        alert(num + " es par");
    }
    else {
        alert(num + " es inpar");
    }
} while (isNaN(num));