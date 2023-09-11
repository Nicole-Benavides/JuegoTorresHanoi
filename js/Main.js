// llamar elemento - contenedores 
let torres = document.querySelectorAll('.torres');

// llamar elemento - fichas
let fichas = document.querySelectorAll('.fichas');
let primeraFicha = document.querySelector('.fichas');

// 1. Proceso para poder Arrastrar
// 1.1 = Colocar el evento dragstart a los elemntos arrastrables
// 1.2 = Guardar los datos del elemento arrastrable (con target) en una varible

// Proceso para generar un ciclo, para colocar propiedades a cada elemento 
// Variable para guardar datos del elemento 
let fichaArrastrable = null;

// Ciclo en si
// dragstart: Este evento se dispara cuando comienza el arrastre de un elemento. Aquí, puedes definir qué datos asociados al elemento se deben transferir durante el arrastre.

fichas.forEach((ficha) => {
    // Funcion para añadir dragstart a los elementos arrastrables y capturar sus datos
    ficha.addEventListener('dragstart', (e) => {
        // guardar datos de la ficha en la variable fichaArrastrable
        fichaArrastrable = e.target;
    });
});

//     // e es el objeto de evento que contiene información sobre el evento dragstart.
//     // e.target es el elemento arrastrable en el que se hizo clic, y se guarda en la variable fichaArrastrable para su posterior manipulación.
// });


// 2. Proceso para poder Soltar
// 2.1 = Habilitar el evento dragover en los contenedores.
// dragover: Área válida para la soltura. 
// 2.2 = Ejecutar las acciones específicas que deben ocurrir cuando un elemento se suelta en el área de destino, (Con drop).


// Cliclo cada contenedor 
// Quitar configuracion por defecto al contenedor
torres.forEach((torre) => {
    // A cada contenedor se le coloca el evento y se cancela su configuracion predeterminada, para que permita colocar la propiedad dragover
    torre.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // A cada contenedor se le coloca el evento drop y se le dan las siguientes indicaciones
    torre.addEventListener('drop', (e) => {

        if (!fichaArrastrable) {
            alert("Seleccione nuevamente una ficha");
            return;
        };


        // realizar una constante para verificar si existe una ficha en el contenedor 
        const fichaContenedor = torre.querySelector('.fichas');
        if (fichaContenedor) {
            if (fichaContenedor.value > fichaArrastrable.value) {
                // inserte antes del elemento que ya tenia
                torre.insertBefore(fichaArrastrable, fichaContenedor);
                fichaArrastrable = null;
            } else {
                alert("No puedes agregar una ficha mas grande");
            }
        } else {
            // Inserte en la casilla
            torre.appendChild(fichaArrastrable);
            fichaArrastrable = null;
        }

        ganar();

    });


    function ganar() {
        torres.forEach((torre) => {
            // Obtener cuantos elementos tiene una torre (childElementCount)
            let elementosTorre = null;
            elementosTorre = torre.childElementCount;
            console.log(elementosTorre);

            if (elementosTorre === 3) {
                let contGanador = document.getElementById('ganador');
                contGanador.classList.add('active');
            }
        });

    }



});



