let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");




});
cerrar.addEventListener("click", function(){

    modal.classList.toggle("modal-close");

    setTimeout(function(){
        modalC.style.opacity ="0";
    modalC.style.visibility = "hidden";


    },900)
})
window.addEventListener("click", function(e){
    
    console.log(e.target)
    if (e.target == modalC){
        modal.classList.toggle("modal-close");

        setTimeout(function() {
            modalC.style.opacity ="0";
            modalC.style.visibility = "hidden";

        },900)

    }

})


let abrir2 = document.querySelectorAll(".cta2")[0];
abrir2.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});


let abrir3 = document.querySelectorAll(".cta3")[0];
abrir3.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});

let abrir4 = document.querySelectorAll(".cta4")[0];
abrir4.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir5 = document.querySelectorAll(".cta5")[0];
abrir5.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir6 = document.querySelectorAll(".cta6")[0];
abrir6.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir7 = document.querySelectorAll(".cta7")[0];
abrir7.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir8 = document.querySelectorAll(".cta8")[0];
abrir8.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir9 = document.querySelectorAll(".cta9")[0];
abrir9.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir10 = document.querySelectorAll(".cta10")[0];
abrir10.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abri11 = document.querySelectorAll(".cta11")[0];
abri11.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});
let abrir12 = document.querySelectorAll(".cta12")[0];
abrir12.addEventListener("click" ,function(e){

    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});