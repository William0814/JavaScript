const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
  alert('Has hecho clic en el boton');
});

var nombre = prompt('Ingresesu nombre:', 'william');

alert('mensaje');
var confirmacion = confirm('Estas seguro?');
if ((confirmacion = true)) {
  prompt('correcto', 'correcto');
}
if ((confirmacion = false)) {
  prompt('incorrecto', 'incorrecto');
}
console.log('Mensaje por consola');
