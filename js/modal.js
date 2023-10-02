const mostrarmodal = document.getElementById("mostrarModal");
const modal = document.getElementById("mimodal");
const cerrarMod = document.getElementById("cerrarModal");

mostrarmodal.addEventListener("click", () => {
    modal.style.display = "block"
})
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

