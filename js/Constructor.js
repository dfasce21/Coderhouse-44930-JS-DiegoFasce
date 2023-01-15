
/* class productos */

class Frutal{
    constructor (nombre, precio, cantPag, cantCompra){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantPag = parseFloat(cantPag);
        this.cantCompra = parseFloat(cantCompra);
    }
/* metodos */
    calcularIva () {
        this.precio = this.precio*1.21
    }
    AumentarCantCompra () {
        this.cantCompra = this.cantCompra + cant
    }
    LimpiarCompra () {
        this.cantCompra = 0
    }
    RestarCantPag () {
        this.cantPag = this.cantPag - cant
    }
    AumentarCantPag () {
        this.cantPag = this.cantPag + cant
    }
}

const Frutal1 = new Frutal("Durazno", 4700, 10, 0)
const Frutal2 = new Frutal("Palta", 6500, 10, 0)
const Frutal3 = new Frutal("Parra", 7000, 10, 0)
const Frutal4 = new Frutal("Banano", 10000, 10, 0)
const Frutal5 = new Frutal("Limonero", 5000, 10, 0)
const Frutal6 = new Frutal("Manzano", 5500, 10, 0)
const Frutal7 = new Frutal("Cerezo", 5500, 10, 0)
const Frutal8 = new Frutal("Ciruelo", 5500, 10, 0)

/* array productos Pagina */

const FrutalesPag = []

FrutalesPag.push(Frutal1)
FrutalesPag.push(Frutal2)
FrutalesPag.push(Frutal3)
FrutalesPag.push(Frutal4)
FrutalesPag.push(Frutal5)
FrutalesPag.push(Frutal6)
FrutalesPag.push(Frutal7)
FrutalesPag.push(Frutal8)