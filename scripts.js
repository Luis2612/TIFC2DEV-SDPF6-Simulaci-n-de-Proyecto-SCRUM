window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const campos = ["nombre", "apellido", "telefono", "correo", "mensaje"];

    if (!form) {
        return;
    }

    const datosGuardados = JSON.parse(localStorage.getItem("contacto"));

    if (datosGuardados) {
        campos.forEach(function (campo) {
            const elemento = document.getElementById(campo);

            if (elemento && datosGuardados[campo]) {
                elemento.value = datosGuardados[campo];
            }
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const datos = {};

        campos.forEach(function (campo) {
            const elemento = document.getElementById(campo);

            if (elemento) {
                datos[campo] = elemento.value;
            }
        });

        localStorage.setItem("contacto", JSON.stringify(datos));
        alert("Datos guardados");
        form.reset();
    });
});
