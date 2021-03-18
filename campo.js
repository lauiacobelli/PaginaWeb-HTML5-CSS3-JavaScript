window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/campo-5.jpg',
        'img/campo.jpg',
        'img/campo-2.jpg'
    ];
    
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    
    

    // Funciones

   
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

   
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    
    function stopIntervalo() {
        
        
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
       
    }

   
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    
    
    renderizarImagen();
} 

//Whatsapp

$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '1165800510',
    headerTitle: 'Chatea con nosotros por WhatsApp!', 
    popupMessage: 'Hola, en que te podemos ayudar?', 
    showPopup: true, 
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    position: "right"    
  });
});



//Productos

const productosInfo = [
    {
        img: 'img/duraznos.jpg ',
        nombre: 'Durazno',
        descripcion: 'Productos 100% Orgánicos',
        precio: 249
    },

    {
        img: 'img/cieruelas.jpg', 
        nombre: 'Ciruela',
        descripcion: 'Productos 100% Orgánicos',
        precio: 199
    },

    {
        img: 'img/frutillas.jpg', 
        nombre: 'Arandano',
        descripcion: 'Productos 100% Orgánicos',
        precio: 350
    },

    {
        img: 'img/peras.jpg', 
        nombre: 'Pera',
        descripcion: 'Productos 100% Orgánicos',
        precio: 179
    },

    {
        img: 'img/naranjas.jpg', 
        nombre: 'Naranja',
        descripcion: 'Productos 100% Orgánicos',
        precio: 109
    },

    {
        img: 'img/manzanas.jpg', 
        nombre: 'Manzana',
        descripcion: 'Productos 100% Orgánicos',
        precio: 199
    },

    {
        img: 'img/banana.jpg', 
        nombre: 'Banana',
        descripcion: 'Productos 100% Orgánicos',
        precio: 109
    },

    {
        img: 'img/melon.jpg', 
        nombre: 'Melon',
        descripcion: 'Productos 100% Orgánicos',
        precio: 389
    },



   
]


const container = document.querySelector(".container")



let productos = ''

productosInfo.forEach(productInfo => {

    
    productos += `
    <div class="product">
    <img src="${productInfo.img}"  />
    <h2 class="header">${productInfo.nombre}</h2>
    <p class="description">${productInfo.descripcion}</p>
    <p class="price">$ ${productInfo.precio} el kg.</p>
    <div class="btn">Añadir al Carrito</div>
    <div class="quickview">Quickview</div>
</div>
    `
})

container.innerHTML = productos

