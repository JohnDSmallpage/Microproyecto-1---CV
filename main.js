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


//SKILLS
2
const skills_json= '{"html":"80/100", "css":"60/100", "js": "70/100"}';

function insertar_html(skills_object){
    let skills= document.getElementById("skills-id");
    skills.innerHTML+= ` <div class="skills-container" id="skills-injected">
    <p>HTML</p>
        <div class="skill">
            <div id="skill-html"></div>
        </div>
    <p>CSS</p>
        <div class="skill">
            <div id="skill-css"></div>
        </div>
    <p>Javascript</p>
        <div class="skill">
            <div id="skill-js"></div>
        </div>
</div>`

    let html_var= document.getElementById("skill-html");
    let css_var= document.getElementById("skill-css");
    let js_var= document.getElementById("skill-js");

    let{html, css, js} = skills_object;
    html_var.innerHTML= html;
    css_var.innerHTML= css;
    js_var.innerHTML= js;
}


skills_object= JSON.parse(skills_json);
insertar_html(skills_object);






