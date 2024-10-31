/*var precio = 2500;
var dinero = prompt('Cuanto dinero tienes:  ');*/

/*if (dinero >= precio && edad >= 18) {
  console.log('Lo puedes comparar...');
} else if (dinero < precio && edad < 18) {
  alert('no te alcanza y estas chico....');
} else if (dinero < precio && edad >= 18) {
  alert('tienes la edad pero no el dinero.......');
} else if (dinero >= precio && edad < 18) {
  console.log('Tienes el dinero pero no la edad...');
} else {
  console.log('trabaja mas, no te alcanza');
} */

/*var num1 = prompt('Numero 1: ');
var num2 = prompt('Numero 2: ');
if (!isNaN(num1) && !isNaN(num2)) {
  var resultado = parseInt(num1) + parseInt(num2);
  alert('El resultado es: ' + resultado);
} else {
  alert('No hay numeros....');
}*/
/*var edad = parseInt(prompt('Que edad tienes: '));
var imprime = '';

switch (true) {
  case edad >= 18 && edad <= 29:
    imprime = 'Eres mayor de edad...';
    break;

  case edad <= 17:
    imprime = 'Eres menor de edad...';
    break;

  case edad >= 30 && edad < 45:
    imprime = 'Eres un adulto...';
    break;

  case edad >= 50:
    imprime = 'Eres viejo....';
    break;

  default:
    imprime = 'dato no valido....';
    break;
}
alert(imprime);
25; 

for (var i = 1; i <= 20; i++) {
  console.log('el numero: ' + i);
}*/

var meses = ['Enero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
i = 0;

for (var i = 0; i < meses.length; i++) {
  document.write('El mes de: ' + [i] + '<br/>');
}
