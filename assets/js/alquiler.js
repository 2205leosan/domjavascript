const propiedades1 = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa7.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: true,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa8.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: false,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa7.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: true,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa10.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: false,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa10.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: true,
        mascotas: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src : "./assets/img/casa11.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane Prestige Suburb CA 45678",
        habitaciones: "3",
        costo : "1.200",
        fumar: false,
        mascotas: true
    },
    
]


function verPropiedades(propiedades1){
    let section1 = document.querySelector("#alquiler .row");
    section1.innerHTML ="";

   

    for (const propied of propiedades1){
        let article1 = document.createElement('div');
        article1.classList.add('col-md-4', 'mb-3');

        let mensajeFumar1 = "";
        if (propied.fumar) {
            mensajeFumar1 = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
        } else {
            mensajeFumar1 = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        }

        
        let mensajeMascotas1 = "";
        if (propied.mascotas) {
            mensajeMascotas1 = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
        } else {
            mensajeMascotas1 = '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';
        }

        article1.innerHTML = `
            <div class="card">
                <img src="${propied.src}" class="card-img-top" alt="${propied.nombre}">
                <div class="card-body">
                    <h5 class="card-title"> ${propied.nombre}</h5>
                    <p class="card-text"> ${propied.descripcion} </p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propied.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propied.habitaciones}</p>
                    <p><i class="fas fa-dollar-sign">${propied.costo}</i></p>  
                    ${mensajeFumar1}
                    ${mensajeMascotas1}
                </div>
            </div>
            
        `;

        section1.appendChild(article1);
    };

    
}

verPropiedades(propiedades1)

let mostrandoTodasAlquileres = true;

document.getElementById("ver-mas-alquiler").addEventListener("click", function (event) {
    event.preventDefault();
    if (mostrandoTodasAlquileres) {
        verPropiedades(propiedades1.slice(0, 3));
        this.textContent = "Ver todas las propiedades en alquiler";
    } else {
        verPropiedades(propiedades1);
        this.textContent = "Mostrar menos propiedades";
    }
    mostrandoTodasAlquileres = !mostrandoTodasAlquileres;
});


