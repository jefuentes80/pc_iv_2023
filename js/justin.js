// Mostrar el modal al hacer clic en el botón "Mostrar Modal"
document.getElementById("mostrarModal").addEventListener("click", function() {
    document.getElementById("miModal").style.display = "block";
});

// Cerrar el modal al hacer clic en la "X" de cerrar
document.getElementById("cerrarModal").addEventListener("click", function() {
    document.getElementById("miModal").style.display = "none";
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("miModal")) {
        document.getElementById("miModal").style.display = "none";
    }
});
