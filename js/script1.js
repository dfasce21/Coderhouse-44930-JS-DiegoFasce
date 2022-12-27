
/*programa para calcular las cuotas en funcion de los productos que elija el cliente (monto total)*/

/*variables*/

let productos
let cant
let valorP1 = 150
let valorP2 = 4000
let valorP3 = 2500
let valorP4 = 12300
let valorP5 = 5600
let total = 0
let cuotas

/* funcion para seleccion de cantidad de productos */

function cantProduct (){
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

/* programa */

do 
{
productos = parseInt(prompt("Seleccionar producto: \n 1 - Producto 1 - valor: $150 \n 2 - Producto 2 - valor: $4000 \n 3 - Producto 3 - valor: $2500 \n 4 - Producto 4 - valor: $12300 \n 5 - Producto 5 - valor: $5600 \n 6 - Pagar \n 7 - Limpiar selecciones \n 8 - Salir"))

switch(productos)
{
    case 1:
        cantProduct ()
        total = total + cant*valorP1
        break
    case 2:
        cantProduct ()
        total = total + cant*valorP2
        break
    case 3:
        cantProduct ()
        total = total + cant*valorP3
        break
    case 4:
        cantProduct ()
        total = total + cant*valorP4
        break
    case 5:
        cantProduct ()
        total = total + cant*valorP5
        break
    case 6:
        function menuCuotas()
        {
        cuotas = parseInt(prompt("Seleccionar cantidad de cuotas: \n 1 - 1 Cuota sin interes \n 2 - 3 Cuotas sin interes \n 3 - 6 cuotas \n 4 - 8 cuotas \n 5 - 10 cuotas \n 6 - 12 cuotas \n 7 - Volver"))
        switch(cuotas)
            {
                case 1:
                    alert("Total a pagar: " + total)
                    break
                case 2:
                    alert("Total a pagar: " + (total/3).toFixed(2) + " por mes")
                    break
                case 3:
                    alert("Total a pagar: " + (total/6*1.15).toFixed(2) + " por mes")
                    break
                case 4:
                    alert("Total a pagar: " + (total/8*1.2).toFixed(2) + " por mes")
                    break
                case 5:
                    alert("Total a pagar: " + (total/10*1.25).toFixed(2) + " por mes")
                    break
                case 6:
                    alert("Total a pagar: " + (total/12*1.3).toFixed(2) + " por mes")
                    break
                case 7:
                    alert("volviendo al menu")
                    break
                default:
                    alert("Opcion invalida")
            }
        }
        menuCuotas()
        break
    case 7:
        total = 0
        alert("Limpio...")
        break
    case 8:
        alert("Saliendo...")
        break
    default:
        alert("Opcion invalida")
}
} while ((productos != 8)||(productos != 6));


