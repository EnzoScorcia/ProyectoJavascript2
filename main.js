class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

let productos = []

let boton =document.querySelector("button")


// let input =document.querySelector("input")

// input.addEventListener("change", (e)=>{
    
// })

// productos.push(new Producto(prompt("Pon el nombre del producto"), Number(prompt("Pon el precio")), Number(prompt("Pon el N° de stock"))))
// productos.push(new Producto(prompt("Pon el nombre del producto"), Number(prompt("Pon el precio")), Number(prompt("Pon el N° de stock"))))
// productos.push(new Producto(prompt("Pon el nombre del producto"), Number(prompt("Pon el precio")), Number(prompt("Pon el N° de stock"))))

// function borrarproducto(){
// alert(`Que quieres borrar
//     1) Producto
//     2) Precio
//     3) Stock`)
// const prod = 
// productos.splice((Number(prompt("Que quieres cambiar")) - 1), 0, Number(prompt("Cuanto?")))
// }

// productos.splice((Number(prompt("Que quieres cambiar")) - 1), 0, Number(prompt("Cuanto?")))


boton.addEventListener("click", ()=> {
    alert(`Usted ingreso a "Organiza tu stock!"`)
    while(true){
        alert(`Que quieres hacer?
            1) Revisar Stock 
            2) Agregar Stock
            3) Quitar Stock
            4) Salir`)
    let menu = Number(prompt("Ingresa una opción"))
    if (menu == 1) {
        productos.forEach((Element) => console.log(Element))
    }else if(menu == 2){
        productos.push(new Producto(prompt("Pon el nombre del producto"), Number(prompt("Pon el precio")), Number(prompt("Pon el N° de stock"))))
    }else if(menu == 3){
        productos.splice(1, 1);
        alert("Listo!")
    }else if(menu == 4){
        alert(`Gracias, vuelva pronto`)
        break
    }else{
        alert("Ingresa una opción correcta")
    }
    }
    
}) 

// alert(`Usted ingreso a "Organiza tu stock!"`)
// prompt("Como se llama?")

// while(true){
//     alert(`Que quieres hacer?
//         1) Revisar Stock 
//         2) Agregar Stock
//         3) Quitar Stock
//         4) Salir`)
// let menu = Number(prompt("Ingresa una opción"))
// if (menu == 1) {
//     productos.forEach((Element) => console.log(Element))
// }else if(menu == 2){
//     productos.push(new Producto(prompt("Pon el nombre del producto"), Number(prompt("Pon el precio")), Number(prompt("Pon el N° de stock"))))
// }else if(menu == 3){
//     productos.splice(1, 1);
//     alert("Listo!")
// }else if(menu == 4){
//     alert("Gracias, vuelva pronto!")
//     break
// }else{
//     alert("Ingresa una opción correcta")
// }
// }
