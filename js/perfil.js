let user = document.querySelector("#perfil");
import { alumnos } from "./alumnos.js";

function layout_perfil(img, nombre_usuario, descripcion, github){ 
    
    let contenido = `
    <div class="box_img">
        <img src="${img}" alt="">
    </div>
    <h2 class="header_h2" >${nombre_usuario}</h2>
    <p class="header_p">${descripcion}</p>
    <a href="">${github}</a>
`;
    return contenido;
}

// ASIGNACIÓN DE DATOS SEGUN EL PERFIL
let elemento = document.getElementById("perfil");
let clase = elemento.className;

alumnos.forEach((alumno) => {
    if(clase == alumno.user_name){

        // DATOS
        let img = alumno.img;
        let nombre_usuario = alumno.user_name;
        let descripcion = alumno.descripcion;
        let github = alumno.github;

        user.innerHTML = layout_perfil(img, nombre_usuario, descripcion, github);
    }
});



