const propiedades = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/apto2.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "6.200",
        fumar: true,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa1.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "9.300",
        fumar: false,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa3.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "5.200",
        fumar: true,
        mascotas: false
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa4.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: false,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa5.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "7.200",
        fumar: false,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa6.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "10.200",
        fumar: false,
        mascotas: true
    },
    
]

let mostrandoTodasVentas = true; 

function mostrarPropiedades(propiedades){
    let section = document.querySelector("#venta .row");
    section.innerHTML = "";
    

    for (const propiedad of propiedades){
        let article = document.createElement('div');
        article.classList.add('col-md-4', 'mb-3');

        let mensajeFumar = "";
        if (propiedad.fumar) {
            mensajeFumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
        } else {
            mensajeFumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        }

        
        let mensajeMascotas = "";
        if (propiedad.mascotas) {
            mensajeMascotas = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
        } else {
            mensajeMascotas = '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';
        }

        article.innerHTML = `
        <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedad.nombre}</h5>
                    <p class="card-text"> ${propiedad.descripcion} </p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones}</p>
                    <p><i class="fas fa-dollar-sign">${propiedad.costo}</i></p>  
                    ${mensajeFumar}
                    ${mensajeMascotas}
                    <p>${propiedad.mascotas}</p>
                </div>
            </div>
            
        `;

        section.appendChild(article);
    };

    
}

mostrarPropiedades(propiedades);



document.getElementById("ver-mas-venta").addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
        if (mostrandoTodasVentas) {
            mostrarPropiedades(propiedades.slice(0, 3));
            this.textContent = "Ver todas las propiedades en venta";
        } else {
            mostrarPropiedades(propiedades);
            this.textContent = "Mostrar menos propiedades";
        }
        mostrandoTodasVentas = !mostrandoTodasVentas;
    });




