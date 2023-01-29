

let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarrito = document.querySelector(".div-productos-carrito");
const carritoVacio = document.querySelector("#carrito-vacio");
const vaciarYcomprar = document.querySelector("#vaciar-comrar");
const numeritoCarrito = document.querySelector("#numerito");
const totalCarrito = document.querySelector("#total");
let botonesEliminar = document.querySelector(".botones-eliminar");
const botonVaciar = document.querySelector("#vaciar-carrito");

function cargarProductosAlCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0){

        carritoVacio.classList.add("disabled");
        vaciarYcomprar.classList.remove("disabled");
        contenedorCarrito.classList.remove("disabled");

        contenedorCarrito.innerHTML = "";
    
            productosEnCarrito.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("col-12");
                div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                    <div><small>Nombre</small><p>${producto.titulo}</p></div>
                    <div><small>Cantidad</small><p>${producto.cant}</p></div>
                    <div><small>Precio</small><p>$ ${producto.precio}</p></div>
                    <div><small>Subtotal</small><p>$ ${(producto.cant)*(producto.precio)}</p></div>
                    <button id="${producto.id}" class="botones-eliminar"><i class="bi bi-trash-fill"></i></button>
                `;
        
                contenedorCarrito.append(div);
            })
            actualizarNumerito();
    }
    else{
        carritoVacio.classList.remove("disabled");
        vaciarYcomprar.classList.add("disabled");
        contenedorCarrito.classList.add("disabled");
        actualizarNumerito()
    }

    actualizarBotonesEliminar();
}
cargarProductosAlCarrito();


function actualizarNumerito() {

    let numeroCarrito = productosEnCarrito.reduce((acc, producto) => acc + producto.cant, 0);
    numeritoCarrito.innerText = numeroCarrito;

    let total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio*producto.cant, 0);
    totalCarrito.innerText = "Total a pagar: $ " + total;
}

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".botones-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);

    cargarProductosAlCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


botonVaciar.addEventListener("click", vaciarElCarrito); 
function vaciarElCarrito() {

    productosEnCarrito.length = 0;

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosAlCarrito();
}