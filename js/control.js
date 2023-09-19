'use strict';
// Habilita el modo estricto de JavaScript para un código más seguro.
/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */
// Comentario que describe la sección de código para activar la cabecera y el botón de volver arriba cuando el desplazamiento llega a 400px.

const header = document.querySelector("[data-header]");
// Selecciona el elemento del DOM con el atributo [data-header], probablemente la cabecera de la página.
const goTopBtn = document.querySelector("[data-go-top]");
// Selecciona el elemento del DOM con el atributo [data-go-top], probablemente el botón de volver arriba.

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
// Agrega un escuchador de desplazamiento a la ventana.
// Si el desplazamiento vertical es mayor o igual a 400 píxeles, agrega la clase "active" a la cabecera y al botón de volver arriba. Si no, elimina 
//la clase "active" de estos elementos.
