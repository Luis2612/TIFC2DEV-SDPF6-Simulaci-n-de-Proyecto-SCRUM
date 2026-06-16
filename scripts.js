window.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("form");
    const  datosGuardados = JSON.parse(localStorage.getItem("contacto"));
    if(datosGuardados){
        document.getElementById("nombre").value = datosGuardados.nombre;
        document.getElementById("apellido").value = datosGuardados.apellido;
        document.getElementById("telefono").value = datosGuardados.telefono;
        document.getElementById("correo").value = datosGuardados.correo;
        document.getElementById("mensaje").value = datosGuardados.mensaje;
        console.log("Datos cargados");
    }  
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
        
    }
    localStorage.setItem("contacto", JSON.stringify(datos));
    console.log(datos);
    alert("Datos guardados");
});