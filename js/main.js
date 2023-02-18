
/* CARGADO DE PAG CON LOS PRODUCTOS */

let productos = [];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const ConProdVacio = document.querySelector("#productos-vacio");

async function DBProductos() {
    
    const baseproductos = await 
    fetch("./DB/frutasYverduras.json")
    .then((response) => {
        if(response.ok){
            return response.json();
        }
        else{
            ConProdVacio.classList.remove("disabled");
        }
    })
    
    productos = baseproductos;
    const productosFrutas = productos.filter(producto => producto.categoria.id === "frutas");

    function cargarProductos(productosElegidos){

        contenedorProductos.innerHTML = "";
    
        productosElegidos.forEach(producto => {
            const div = document.createElement("div");
            div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <p>- ${producto.titulo} -</p>
            <h2>Precio: $ ${producto.precio}</h2>
            <button class="producto-agregar" id="${producto.id}"><i class="bi bi-plus-circle"></i> Agregar</button>
            `;
    
            contenedorProductos.append(div);
            actualizarBotonesAgregar ();
        })
    }
    cargarProductos(productosFrutas);

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            const productosfiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos (productosfiltrados);
    
        })
    });

    function actualizarBotonesAgregar () {
        botonesAgregar = document.querySelectorAll(".producto-agregar");
    
        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }

}
DBProductos();


/* CARGAR PRODUCTOS AL CARRITO */

const cantCarrito = document.querySelector("#numerito");
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}
else{
    productosEnCarrito = [];
}


function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cant++;
    }
    else{
        productoAgregado.cant = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cant, 0);
    cantCarrito.innerText = nuevoNumerito;
}

