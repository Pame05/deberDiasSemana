// Partiendo del siguiente array, realizar las operaciones 
// necesario para ordenar los días de la semana:

// let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

// Eliminar el día domingo del inicio de la lista.
// Agregar el día lunes al inicio de la lista.
// Agregar el día domingo al final de la lista.
// Insertar el día viernes en la posición correspondiente.
// Mostrar en pantalla de elemento en elemento usando un for.
// Usar los métodos: push, pop, shift, unshift, splice

'use strict'
let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];

// Eliminar el día domingo del inicio de la lista.
let withoutSunday=week.shift();
alert(week);

// Agregar el día lunes al inicio de la lista.
week.unshift('Monday');
alert(week);

// Agregar el día domingo al final de la lista.
week.push('Sunday');
alert(week);

// Insertar el día viernes en la posición correspondiente.
week.splice(4,0, 'Friday');
alert(week);

// Mostrar en pantalla de elemento en elemento usando un for.
for (let i = 0; i < week.length; i++) {
    alert (week[i]);
    
}