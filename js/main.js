
/* PRODUCTOS */

const productos = [
    /* Frutas */
    {
        id: "Anana",
        titulo: "Ananá",
        imagen: "./imagenes/frutas/anana.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 850,
    },
    {
        id: "Cereza",
        titulo: "Cereza",
        imagen: "./imagenes/frutas/cereza.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 720,
    },
    {
        id: "Ciruela",
        titulo: "Ciruela",
        imagen: "./imagenes/frutas/ciruela.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 540,
    },
    {
        id: "Durazno",
        titulo: "Durazno",
        imagen: "./imagenes/frutas/durazno.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 520,
    },
    {
        id: "Kiwi",
        titulo: "Kiwi",
        imagen: "./imagenes/frutas/kiwi.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 780,
    },
    {
        id: "Limon",
        titulo: "Limon",
        imagen: "./imagenes/frutas/limon.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 340,
    },
    {
        id: "Naranja",
        titulo: "Naranja",
        imagen: "./imagenes/frutas/naranja.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 330,
    },
    {
        id: "Sandia",
        titulo: "Sandia",
        imagen: "./imagenes/frutas/sandia.jpg",
        categoria: {
            nombre: "frutas",
            id: "frutas",
        },
        precio: 780,
    },
    /* Verduras */
    {
        id: "Berenjena",
        titulo: "Berenjena",
        imagen: "./imagenes/verduras/berenjena.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 250,
    },
    {
        id: "Choclo",
        titulo: "Choclo",
        imagen: "./imagenes/verduras/choclo.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 360,
    },
    {
        id: "Morrones",
        titulo: "Morrones",
        imagen: "./imagenes/verduras/morrones.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 390,
    },
    {
        id: "Papa",
        titulo: "Papa",
        imagen: "./imagenes/verduras/papa.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 320,
    },
    {
        id: "Pepino",
        titulo: "Pepino",
        imagen: "./imagenes/verduras/pepino.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 210,
    },
    {
        id: "Portobello",
        titulo: "Portobello",
        imagen: "./imagenes/verduras/portobello.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 1100,
    },
    {
        id: "Zapallito",
        titulo: "Zapallito",
        imagen: "./imagenes/verduras/zapallito.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 420,
    },
    {
        id: "Zapallo",
        titulo: "Zapallo",
        imagen: "./imagenes/verduras/zapallo.jpg",
        categoria: {
            nombre: "verduras",
            id: "verduras",
        },
        precio: 420,
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const productosFrutas = productos.filter(producto => producto.categoria.id === "frutas");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
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

console.log(productosEnCarrito);

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

