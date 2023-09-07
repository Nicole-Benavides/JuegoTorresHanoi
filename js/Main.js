// llamar contenedores y fichas
let torres = document.querySelectorAll('.torres');
let fichas = document.querySelectorAll('.fichas');

// Poder arrastrar

// ciclo para cada elemento 
// 1. variable para guardar elemetos 
let fichaArrastrable = null;

// 2. ciclo en si
fichas.forEach((ficha) =>{
    // funcion para añadir dragstart a los elementos arrastrables y capturar sus datos
    ficha.addEventListener('dragstart' , (e) => {
        fichaArrastrable = e.target;
    });
});


// Quitar configuracion por defecto al contenedor
// cliclo cada contenedor 
// variables 

torres.forEach((torre)=>{
    torre.addEventListener('dragover', (e) =>{
        e.preventDefault();
    });

    torre.addEventListener('drop' , (e) =>{
        if(!fichaArrastrable){
            alert("seleccion ");
            return;
        };

        const fichaContenedor = torre.querySelector('.fichas');
        if(fichaContenedor){
            if(fichaContenedor.value > fichaArrastrable.value){
                torre.appendChild(fichaArrastrable);
                fichaArrastrable = null;
            }else{
                alert("No puedes agregar una ficha mas grande");
            }
        }else{
            torre.appendChild(fichaArrastrable);
            fichaArrastrable = null;
        }



    });
});



