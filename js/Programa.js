
/*programa para calcular las cuotas en funcion de los productos que elija el cliente (monto total)*/

/*variables*/

let productos
let cant
let valorP1 = Frutal1.precio
let valorP2 = Frutal2.precio
let valorP3 = Frutal3.precio
let valorP4 = Frutal4.precio
let valorP5 = Frutal5.precio
let total = 0
let cuotas
let menu
let totalMensual = 0
let meses

/* menu principal */

do
{
    menu = parseInt(prompt(" 1 - Seleccionar productos \n 2 - Limpiar selecciones \n 3 - Pagar \n 4 - Salir"))
    switch(menu){
    case 1:
        menuProductos ()
        total = FrutalesPag.reduce((acum, fruta) => { return acum + (fruta.precio*fruta.cantCompra)}, 0)
        console.log(FrutalesPag)
        break
    case 2:
        total = 0
        FrutalesPag.cantCompra = 0
        alert("Limpio...")
        break
    case 3:
        cuotas = parseInt(prompt("Seleccionar cantidad de cuotas: \n 1 - 1 Cuota sin interes \n 2 - 3 Cuotas sin interes \n 3 - 6 cuotas \n 4 - 8 cuotas \n 5 - 10 cuotas \n 6 - 12 cuotas \n 7 - Volver"))
        let a = cuotas
        menuCuotas(a)
        if (meses == 1){
            alert("Total a pagar: " + totalMensual)
        }
        else{
            alert("Total a pagar: " + totalMensual + " por " + meses + " meses y por un total de " + parseInt(totalMensual*meses))
        }
        break
    case 4:
        alert("Saliendo...")
        break
    default:
        alert("Opcion invalida")
    }
} while (menu != 4)


/* funcion para seleccion de cantidad de productos */

function menuProductos ()
{
do{
    productos = parseInt(prompt("Seleccionar Frutal: \n 1 - Durazno - valor: $4700 \n 2 - Palta - valor: $6500 \n 3 - Parra - valor: $7000 \n 4 - Banano - valor: $10000 \n 5 - Limonero - valor: $5000 \n 6 - Atras"))
    switch(productos){
    case 1:
        cantProduct ()
        Frutal1.AumentarCantCompra ();
        break
    case 2:
        cantProduct ()
        Frutal2.AumentarCantCompra ();
        break
    case 3:
        cantProduct ()
        Frutal3.AumentarCantCompra ();
        break
    case 4:
        cantProduct ()
        Frutal4.AumentarCantCompra ();
        break
    case 5:
        cantProduct ()
        Frutal5.AumentarCantCompra ();
        break
    case 6:
        break
    default:
        alert("Opcion invalida")
    }
} while (productos != 6)
}

/* funcion para cantidad de productos */

function cantProduct ()
{
    cant = parseFloat(prompt("Seleccione cantidad"))
    if((cant <= 0) || (cant % 1 != 0) || (cant > 1000))
    {
        alert("el numero ingresado no es correcto")
    }
    else
    {
        cant
    }
}

/* menu calculo cuotas */

function menuCuotas(cuotas)
{
        switch(cuotas)
            {
                case 1:
                    meses = 1
                    totalMensual = total
                    break
                case 2:
                    meses = 3
                    totalMensual = (total/meses).toFixed(2)
                    break
                case 3:
                    meses = 6
                    totalMensual = (total/meses*1.15).toFixed(2)
                    break
                case 4:
                    meses = 8
                    totalMensual = (total/meses*1.2).toFixed(2)
                    break
                case 5:
                    meses = 10
                    totalMensual = (total/meses*1.25).toFixed(2)
                    break
                case 6:
                    meses = 12
                    totalMensual = (total/meses*1.3).toFixed(2)
                    break
                case 7:
                    alert("volviendo al menu")
                    break
                default:
                    alert("Opcion invalida")
            }
            return (meses, totalMensual)
}


