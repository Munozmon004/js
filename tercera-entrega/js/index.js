const productos = [
    { id: 1, nombre: 'Sundae Dark Cherry Oreo', precio: 12, imagen: '../img/item-1.png' },
    { id: 2, nombre: 'Sundae Sweet Bluberry Crumble', precio: 12, imagen: '../img/item-2.webp' },
    { id: 3, nombre: 'Sundae Sweet Bluberry Crumble', precio: 12, imagen: '../img/item-3.webp' },
    { id: 4, nombre: 'Sundae Sweet Bluberry Crumble', precio: 12, imagen: '../img/item-4.webp' },
    { id: 5, nombre: 'Sundae Sweet Bluberry Crumble', precio: 13, imagen: '../img/item-5.webp' },
    { id: 6, nombre: 'Sundae Sweet Bluberry Crumble', precio: 13, imagen: '../img/item-6.webp' },
    { id: 7, nombre: 'Sundae Sweet Bluberry Crumble', precio: 13, imagen: '../img/item-7.webp' },
    { id: 8, nombre: 'Sundae Sweet Bluberry Crumble', precio: 15, imagen: '../img/item-8.webp' },
    { id: 9, nombre: 'Sundae Sweet Bluberry Crumble', precio: 17, imagen: '../img/item-41.webp' },
    { id: 10, nombre: 'Sundae Sweet Bluberry Crumble', precio: 20, imagen: '../img/item-42.webp' },
    { id: 11, nombre: 'Sundae Sweet Bluberry Crumble', precio: 20, imagen: '../img/item-43.webp' },
    { id: 12, nombre: 'Sundae Sweet Bluberry Crumble', precio: 20, imagen: '../img/item-44.webp' }
    
];


const carrito = [];


const listaProductos = document.getElementById('lista-productos');
const itemsCarrito = document.getElementById('items-carrito');
const precioTotal = document.getElementById('precio-total');
const contadorCarrito = document.getElementById('contador-carrito');
const carritoSeccion = document.getElementById('carrito');


function renderizarProductos() {
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('tarjeta-producto');
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onClick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    });
}
// agregar productos y sumar toastify 

function agregarAlCarrito(id){
    const producto = productos.find(item => item.id === id);
    carrito.push(producto);
    actualizarCarrito();
    Toastify({
        text:`${producto.nombre}, agregado al carrito`,
        duration:1000,
        gravity:"top",
        position:"right",
        background: "yellow", 
    }).showToast();
}


//
function eliminarDelCarrito(indice){
    carrito.splice(indice, 1);
    actualizarCarrito()
}

function actualizarCarrito(){
    renderizarCarrito();
    actualizarTotal();
    actualizarContador();
}


function renderizarCarrito(){
    itemsCarrito.innerHTML = '';
    carrito.forEach((item, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `
           ${item.nombre} - $${item.precio}
           <button onclick="eliminarDelCarrito(${indice})"> X </button>
        `;
        itemsCarrito.appendChild(li)
    });
}

//actualizacion

function actualizarTotal(){
    const total = carrito.reduce((acum, item) => acum + item.precio,0);
    precioTotal.textContent = `${total}`;
}


function actualizarContador(){
    contadorCarrito.textContent = carrito.length;
}


function alternarCarrito(){
    carritoSeccion.style.display = carritoSeccion.style.display === 'none' || carritoSeccion.style.display === '' ? 'block' : 'none';
}

function finalizarCompra(){
    if(carrito.length === 0){
        Swal.fire({
            icon: 'warning',
            title: 'carrito vacio',
            text: 'no hay productos, todavia'
        })
    } else{
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: 'gracias por tu compra'

        }).then(()=> {
            carrito.length = 0;
            actualizarCarrito()
        })
    }
}


renderizarProductos();