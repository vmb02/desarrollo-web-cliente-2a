const btnComentarios = document.getElementById("btn-comentarios");
const salida = document.getElementById("salida");
btnComentarios.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((comentario) => {
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = comentario.body;
        salida.appendChild(nuevoParrafo);
      });
    });
});