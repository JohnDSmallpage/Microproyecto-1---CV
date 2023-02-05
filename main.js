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

//CONTACT ME

const button= document.getElementById("send-button");
const nombre= document.getElementById("nombre");
const mensaje= document.getElementById("mensaje")
const email= document.getElementById("correo");
const form= document.getElementById("formulario");

function eliminarAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

//Validación campos vacíos
button.addEventListener("click", ()=>{
    if(nombre.value=="" || email.value=="" || mensaje.value==""){
        alert("Algunos campos están vacíos, complételos para enviar su solicitud");
        return;
    }

    //Validacion email
    let expresion= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validacion= expresion.test(email.value);

    if(validacion==false){
        alert("El correo ingresado no es válido");
        return;
    }

    //Validacion de nombre
    
    nombre_validacion= eliminarAcentos(nombre.value);
    
   
    let expresion_nombre= /^[a-z\s]+$/i
    let validacion_nombre= expresion_nombre.test(nombre_validacion);
    
    if(validacion_nombre==false){
        alert("El nombre ingresado no es válido");
        return;
    }


    alert("Su solicitud ha sido enviada");

} );








