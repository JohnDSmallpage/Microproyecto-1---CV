//CARRUSEL

const array_img= [
    "./imagenes/pexels-miguel-á-padriñán-1591061.jpg",
    "./imagenes/pexels-pixabay-270348.jpg",
    "./imagenes/pexels-pixabay-270404 (1).jpg"
]
const img= document.getElementById("slide")
let i=0

const hero= () =>{
    img.src= array_img[i];
    i = (i< array_img.length-1 ) ? i+1 : 0;
}

const tiempo= ()=> {
    setInterval(hero, 2000);
}

window.addEventListener("load", tiempo());

