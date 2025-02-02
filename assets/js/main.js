
propiedadesVistas = propiedades.slice(0, 3);
mostrarPropiedades(propiedadesVistas);



propiedadesPagina = propiedades1.slice(0, 3)
verPropiedades(propiedadesPagina);


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ver-mas-venta").addEventListener("click", () => {
        window.location.href = "venta.html";
    });

    document.getElementById("ver-mas-alquiler").addEventListener("click", () => {
        window.location.href = "alquiler.html";
    });
});