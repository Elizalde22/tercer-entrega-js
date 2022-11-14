//declaracion de variables y objetos


class Productos {
    constructor(id, nombre, precio, peso, marca, sueltoEnvase, imagen) {
            this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.peso = peso,
            this.marca = marca,
            this.sueltoEnvase = sueltoEnvase,
            this.imagen = imagen
    }
}

const alfajor = new Productos(1, "Alfajor", 150, "50gr", "Animal kind", "Envasado", "alfajor.jpg")
const granola = new Productos(2, "Granola", 200, "100gr", "Lasfor", "Suelto", "granola.jpg")
const nueces = new Productos(3, "Nueces", 250, "100gr", "LG", "Suelto", "nueces.jpg")
const hamburguesa = new Productos(4, "Hamburguesas", 600, "320gr", "Caseriana", "Envasado", "hamburguesas.jpg")
const canelones = new Productos(5, "Canelones", 880, "600gr", "Il toscano", "Envasado", "canelones.jpg")
const tartas = new Productos(6, "Tartas", 680, "380gr", "Chuño", "Envasado", "tarta.jpg")

//Carga de productos
const gondola =[alfajor, granola, nueces, hamburguesa, canelones, tartas ]


let llenarCarrito = []
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    //primer ingreso
    console.log("ingresando por primera vez")
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
}
if(localStorage.getItem("carrito")){
    llenarCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    //primer ingreso
    console.log("ingresando por primera vez")
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
}

//capturas DOM
let product = document.getElementById("product")
let modal = document.getElementById("modal-body")

for(let productos of gondola){
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<article id="${productos.id}" class="card">
                                <h3 class="tituloCard">${productos.nombre}</h3>
                                <img src="image/${productos.imagen}"  alt="${productos.titulo}">
                                <div class="content">
                                    <p class="autorCard">${productos.marca}</p>
                                    <p class="precioCard">Precio: ${productos.precio}</p>
                                    <button id="agregarBtn${productos.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                </div>
                            </article>`
    product.appendChild(nuevoProducto)
    let btnAgregar = document.getElementById(`agregarBtn${productos.id}`)
    btnAgregar.addEventListener("click", ()=>{sumarCarrito(productos)})
}

//function sumarCarrito
function sumarCarrito (productos){
llenarCarrito.push(productos)
localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
}

