import { alumnos } from "./alumnos.js";
let main = document.querySelector(".main");

alumnos.forEach((elemento) => {
    console.log(elemento.user_name);

    let componente = document.createElement("div");
    componente.innerHTML = `
        <a href="./${elemento.user_name}.html" class="user">
        <img src="${elemento.img}" alt="">
        <p>${elemento.user_name}</p>
        </a>
    `;
    main.appendChild(componente);
    
})
