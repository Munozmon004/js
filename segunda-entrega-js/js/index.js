// segunda entrega js
/*
1. estructura de js 
2. agregar variables 
3. funciones
4. objetos
5. arrays
6. prompt()
7. metodos de busqueda 
8. filter
*/

// variables
function saludar(){
console.log("hola bienvenidos a la segunda entrega de js")
}
saludar();

// funciones
let datosPersona = prompt("Ingrese su nombre");
console.log("Hola, buen dia " + datosPersona)

//objetos & arrays
// ejemplo de carrito, la suma de productos
const carrito = [
    {
        id:"01",
        nombre:"sal",
        precio:"19.00",
        stock:"24"
    },
    {
        id:"02",
        nombre:"barra de pan",
        precio:"22.00",
        stock:"14"
    },
    {
        id:"03",
        nombre:"litro de leche carton",
        precio:"17.00",
        stock:"8"
    },
    {
        id:"04",
        nombre:"huevo carton c/12",
        precio:"24.00",
        stock:"22"
    },
    {
        id:"05",
        nombre:"jabon para trastes ",
        precio:"12.00",
        stock:"13"
    },
    {
        id:"06",
        nombre:"cereal caja",
        precio:"21.00",
        stock:"3"
    },
    {
        id:"07",
        nombre:"galletas caja",
        precio:"18.00",
        stock:"15"
    },
    {
        id:"08",
        nombre:"jugo carton",
        precio:"12.00",
        stock:"9"
    }
];

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i])
}
let precioTotal = 0;
for (const producto of carrito){
    precioTotal += parseFloat(producto.precio);
}
console.log("el precio del carrito total es: " + precioTotal);

// aumento de precios
const total = [19,22,17,24,12,21,18,12];
let precioAumentos = total.map(precio => precio *1.75);
let nuevoTotal = precioAumentos.reduce((suma, precio) => suma + precio, 0);
console.log("los precios del los productos han aumentado, nuevo total " + nuevoTotal.toFixed(2));


let fechaActual = new Date()
console.log(fechaActual);


