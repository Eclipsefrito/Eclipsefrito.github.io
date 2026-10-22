// Esperar a que se envíe el formulario
document.getElementById("formRegistro").addEventListener("submit", function(event) {
    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var carrera = document.getElementById("carrera").value;
    var mensaje = document.getElementById("mensaje");

    // Validar que ningún campo esté vacío
    if (nombre === "" || correo === "" || telefono === "" || carrera === "") {
        mensaje.textContent = "Informacion incompleta";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Registro exitoso! Gracias " + nombre + " por postular a nuestra institución.";
        mensaje.style.color = "green";

        // Limpiar el formulario tras enviar
        document.getElementById("formRegistro").reset();
    }
});