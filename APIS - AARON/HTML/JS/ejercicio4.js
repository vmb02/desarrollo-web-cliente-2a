document.addEventListener("DOMContentLoaded", function() {
    const formularioTareas = document.getElementById("formularioTareas");
    const entradaTarea = document.getElementById("entradaTarea");
    const listaTareas = document.getElementById("listaTareas");
    // Cargar tareas al cargar la página
    cargarTareas();
    // Agregar evento submit al formulario para agregar una nueva tarea
    formularioTareas.addEventListener("submit", function(evento) {
      evento.preventDefault();
      const textoTarea = entradaTarea.value.trim();
      if (textoTarea !== "") {
        agregarTarea(textoTarea);
        entradaTarea.value = "";
      }
    });
    // Cambiar estado de una tarea al hacer clic
    listaTareas.addEventListener("click", function(evento) {
      if (evento.target.tagName === "LI") {
        cambiarEstadoTarea(evento.target);
      }
    });
    // Función para cargar las tareas desde la API
    function cargarTareas() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(respuesta => respuesta.json())
        .then(datos => {
          datos.forEach(tarea => {
            agregarTareaALista(tarea.title, tarea.completed);
          });
        })
        .catch(error => console.error("Error al cargar las tareas:", error));
    }
    // Función para agregar una nueva tarea a la lista
    function agregarTareaALista(textoTarea, completada) {
      const elementoTarea = document.createElement("li");
      elementoTarea.textContent = textoTarea;
      elementoTarea.classList.add("list-group-item");
      if (completada) {
        elementoTarea.classList.add("completada");
      }
      listaTareas.appendChild(elementoTarea);
    }
    // Función para agregar una nueva tarea localmente
    function agregarTarea(textoTarea) {
      agregarTareaALista(textoTarea, false);
    }
    // Función para cambiar el estado de una tarea
    function cambiarEstadoTarea(elementoTarea) {
      elementoTarea.classList.toggle("completada");
    }
  });
