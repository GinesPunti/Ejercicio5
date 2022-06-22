const pizza=[{

    nombre: "Cuatro Quesos",
    imagen: "https://www.recetasderechupete.com/wp-content/uploads/2016/11/pizza_cuatro_quesos.jpg?width=1200&enable=upscale" ,
    id: 1,
    ingredientes: "Roquefort, Muzzarela, Parmesano, Gouda ",
    precio: 800,

},{
    nombre: "Especial",
    imagen: "https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-especial.jpg?w=1000&ssl=1",
    id: 2,
    ingredientes: "Muzzarela, Jamon, Morron, Aceitunas",
    precio: 850,

},{
    nombre: "Napolitana",
    imagen: "https://i.pinimg.com/originals/38/82/f3/3882f3b8021ece5e31be5ce06a6703ec.jpg",
    id: 3,
    ingredientes: "Muzzarela, Jamon, Tomate, Aceitunas",
    precio: 900,

},{
    nombre: "Fugazza",
    imagen: "https://www.recetas-argentinas.com/base/stock/Recipe/14-image/14-image_web.jpg",
    id: 4,
    ingredientes: "Cebolla, Parmesano, Aceite de Oliva",
    precio: 1000,
},{
    nombre: "Hawaiana",
    imagen: "https://imag.bonviveur.com/presentacion-principal-de-la-pizza-hawaiana.webp",
    id: 5,
    ingredientes: "Jamon, Anana, Queso",
    precio: 900,
},{
    nombre: "Pollo",
    imagen: "https://www.hola.com/imagenes/cocina/recetas/20200123158802/receta-pizza-pollo-barbacoa/0-772-922/pizza-pollo-adobe-m.jpg",
    id: 6,
    ingredientes: "Pollo, Queso, Champiñones",
    precio: 500,
}
]

const cardContainer=document.getElementById("cardContainer")

const renderHtml=(pizza)=>{
    pizza.forEach(element => {
        const card= document.createElement("div")
        card.classList.add("card")
        const image=document.createElement("img")
        image.setAttribute('src', element.imagen);
        card.appendChild(image)
        const name=document.createElement("span")
        const nameText=document.createTextNode(element.nombre)
        name.appendChild(nameText)
        card.appendChild(name)
        const ingrediente=document.createElement("span")
        const ingredienteText=document.createTextNode(element.ingredientes)
        ingrediente.appendChild(ingredienteText)
        card.appendChild(ingrediente)
        const price= document.createElement("span")
        const priceValue=document.createTextNode(`Precio: ${element.precio}`)
        price.appendChild(priceValue)
        card.appendChild(price)
        cardContainer.appendChild(card)
    });
}

renderHtml(pizza)

const deleteElements=()=>{
    while (cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild)
    }
}

const funcionPizza=()=>{
    const buscador=document.getElementById("serchPizza")
    let inputValue= buscador.value.toLowerCase()
    const pizzaSelected= pizza.filter(pizza=> pizza.nombre.toLowerCase()===inputValue)
    console.log(pizzaSelected)
    console.log(pizzaSelected)
    if (pizzaSelected.length===0){
        deleteElements()
        const fallo=document.createElement("p")
        const falloText=document.createTextNode("No hay ninguna pizza que coinsida")
        fallo.appendChild(falloText)
        cardContainer.appendChild(fallo)
    }else{
        deleteElements()
        renderHtml(pizzaSelected)
    }
}

const botonBuscador=document.getElementById("boton")

botonBuscador.addEventListener("click", funcionPizza)

