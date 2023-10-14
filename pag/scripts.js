function getRandomColor() {
    // Genera un color RGB aleatorio en el rango [0, 240]
    const r = Math.floor(Math.random() * 241);
    const g = Math.floor(Math.random() * 241);
    const b = Math.floor(Math.random() * 241);
    return `rgb(${r},${g},${b})`;
}

function parpadear() {
    const titulo = document.querySelector('h1');
    setInterval(function () {
        const nuevoColor = getRandomColor();
        titulo.style.color = nuevoColor;
    }, 1000);
}

function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minuto = ahora.getMinutes();
    const segundo = ahora.getSeconds();

    const horaFormateada = (hora < 10 ? "0" : "") + hora;
    const minutoFormateado = (minuto < 10 ? "0" : "") + minuto;
    const segundoFormateado = (segundo < 10 ? "0" : "") + segundo;

    const horaElemento = document.getElementById("hora");
    horaElemento.textContent = `${horaFormateada}:${minutoFormateado}:${segundoFormateado}`;
}

function reloj() {
    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);
    // Actualizar el reloj inmediatamente al cargar la página
    actualizarReloj();
}


function actualizarFecha() {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1; // Nota: los meses comienzan desde 0
    const año = ahora.getFullYear();

    const diaFormateado = (dia < 10 ? "0" : "") + dia;
    const mesFormateado = (mes < 10 ? "0" : "") + mes;
    
    const fechaFormateada = `${diaFormateado}/${mesFormateado}/${año}`;

    const fechaElemento = document.getElementById("fecha");
    fechaElemento.textContent = fechaFormateada;
}

function fecha() {
    // Actualizar la fecha inmediatamente al cargar la página
    actualizarFecha();
}           

const imagenes = ["../img/car1.png", "../img/car2.png", "../img/car3.png"]; // Lista de imágenes
let indiceImagenActual = 0; // Índice de la imagen actual

function cambiarImagen() {
const imagenCarrusel = document.getElementById("imagen-carrusel");

  // Cambia la opacidad de la imagen a 0 para desvanecerla
imagenCarrusel.style.opacity = 0;

setTimeout(function () {
    // Cambia la imagen actual
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    const nuevaImagenSrc = imagenes[indiceImagenActual];
    imagenCarrusel.src = nuevaImagenSrc;

    // Restaura la opacidad para mostrar la nueva imagen
    setTimeout(function () {
        imagenCarrusel.style.opacity = 1;
    }, 1000);

  }, 1000); // Después de 1000 ms (1 segundos), cambia la imagen
}

function carrusel() {
  // Cambia la imagen inmediatamente al cargar la página
    cambiarImagen();

  // Configura un intervalo para cambiar la imagen cada segundo
    setInterval(cambiarImagen, 1000);
}

function mostrarTexto(num) {
    // Ocultar todos los textos primero
    for (let i = 1; i <= 3; i++) {
    document.getElementById(`text${i}`).style.display = 'none';
    }
    
    // Mostrar el texto correspondiente
    document.getElementById(`text${num}`).style.display = 'block';
    
    // Configurar un temporizador para ocultar el texto después de 10 segundos
    setTimeout(function() {
    document.getElementById(`text${num}`).style.display = 'none';
    }, 10000);
}


window.onload = function () {
    parpadear();
    reloj();
    fecha();
    carrusel();
}

function initIconosRedesSocialesEvents(){
    const iconos = document.querySelectorAll(".footer-items > .item");
    for (const icono of iconos) {
        icono.addEventListener("mouseover", function(){
           icono.style.opacity = 0;
        });
        icono.addEventListener("mouseout", function(){
            icono.style.opacity = 1;
         })        
    }
}

initIconosRedesSocialesEvents();



