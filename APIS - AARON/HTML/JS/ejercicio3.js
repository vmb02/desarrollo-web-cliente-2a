// Seleccionamos el elemento con el id 'botonfetch' y le añadimos un evento de escucha 'click'
document.getElementById('botonfetch').addEventListener('click', function () {
    // Realizamos una petición a la API 'https://fakestoreapi.com/products' utilizando el método 'fetch'
    fetch('https://fakestoreapi.com/products')
        // Convertimos la respuesta de la petición a formato JSON utilizando el método 'json()'
        .then(response => response.json())
        // Recorremos los datos obtenidos de la API y creamos un elemento 'div' para cada producto
        .then(data => {
            const productList = document.querySelector('.product-list');
            productList.innerHTML = '';
            data.forEach(product => {
                const productItem = document.createElement('div');
                // Añadimos la clase 'product-item' al elemento 'div'
                productItem.className = 'product-item';
                // Añadimos el título del producto al elemento 'div'
                productItem.textContent = product.title;
                // Añadimos un evento de escucha 'mouseover' al elemento 'div'
                productItem.addEventListener('mouseover', function () {
                    // Seleccionamos el elemento con la clase 'product-image'
                    const productImage = document.querySelector('.product-image');
                    // Cambiamos la fuente de la imagen del elemento 'product-image' a la imagen del producto
                    productImage.src = product.image;
                    // Mostramos la imagen del producto
                    productImage.style.display = 'block';
                });
                // Añadimos un evento de escucha 'mouseout' al elemento 'div'
                productItem.addEventListener('mouseout', function () {
                    // Seleccionamos el elemento con la clase 'product-image'
                    const productImage = document.querySelector('.product-image');
                    // Ocultamos la imagen del producto
                    productImage.style.display = 'none';
                });
                // Añadimos el elemento 'div' a la lista de productos
                productList.appendChild(productItem);
            });
        })
        // Capturamos los errores que puedan ocurrir durante la petición a la API
        .catch(error => {
            console.error('Error:', error);
        });
});