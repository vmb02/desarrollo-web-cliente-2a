document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioTareas");
    const entrada = document.getElementById("entradaTarea");
    const lista = document.getElementById("listaTareas");

    cargarTareas();

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const textoArea = entrada.value.trim();
        if(textoArea !== "" ) {
            agregarTarea(textoArea);
            entrada.value = "";
        }
    });

    lista.addEventListener("click", function(evento) {
        if (evento.target.tagName === "LI") {
            cambiarEstadoTarea(evento.target);
        }
    });

    function cargarTareas() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(tarea => {
                agregarTareaALista(tarea.title, tarea.completed);
            });
        })
        .catch(error => console.error("Error al cargar las tareas", error));
    }

    function agregarTareaALista(textoArea, completada) {
        const elementoTarea = document.createElement("li");
        elementoTarea.textContent = textoArea;
        elementoTarea.classList.add("list-group-item");
        if(completada) {
            elementoTarea.classList.add("completada");
        }
        lista.appendChild(elementoTarea);
    }

    function agregarTarea(textoArea) {
        agregarTareaALista(textoArea, false);
    }

    function cambiarEstadoTarea(elementoTarea) {
        elementoTarea.classList.toggle("completada");
    }
});