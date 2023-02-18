
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
}
else{
    productosEnCarrito = [];
}

const contenedorCarrito = document.querySelector(".div-productos-carrito");
const carritoVacio = document.querySelector("#carrito-vacio");
const vaciarYcomprar = document.querySelector("#vaciar-comrar");
const numeritoCarrito = document.querySelector("#numerito");
const totalCarrito = document.querySelector("#total");
let botonesEliminar = document.querySelector(".botones-eliminar");
const botonVaciar = document.querySelector("#vaciar-carrito");
const botonCompra = document.querySelector("#boton-comprar");

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
                    <img src=".${producto.imagen}" alt="${producto.titulo}">
                    <div><small>Nombre</small><p>${producto.titulo}</p></div>
                    <div><small>Cantidad</small><div class="mas-menos"><i class="bi bi-dash-square-fill boton-menos" id="${producto.id}"></i><p>${producto.cant}</p><i class="bi bi-plus-square-fill boton-mas" id="${producto.id}"></i></div></div>
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
    actualizarBotonesSumar();
    actualizarBotonesRestar();

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

function actualizarBotonesSumar() {
    botonesSumar = document.querySelectorAll(".boton-mas");

    botonesSumar.forEach(boton => {
        boton.addEventListener("click", SumarItem);
    });
}

function SumarItem(e) {

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cant++;

    cargarProductosAlCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarBotonesRestar() {
    botonesSumar = document.querySelectorAll(".boton-menos");

    botonesSumar.forEach(boton => {
        boton.addEventListener("click", RestarItem);
    });
}

function RestarItem(e) {

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    if(productosEnCarrito[index].cant!==1){
        productosEnCarrito[index].cant--;
    }
    else{
        productosEnCarrito[index].cant = 1;
    }

    cargarProductosAlCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


botonVaciar.addEventListener("click", vaciarElCarrito); 
function vaciarElCarrito() {

    productosEnCarrito.length = 0;

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosAlCarrito();
}

botonCompra.addEventListener("click", alertaCompra); 
function alertaCompra() {
   
    Swal.fire({
        title: '¿Seguro desea realizar la compra?',
        text: "seleccione una opcion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Compra Exitosa',
                text: 'La compra se realizó con exito',
              })
              
        vaciarElCarrito();
        }
    })
}


