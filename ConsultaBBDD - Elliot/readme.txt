Como manejar datos en una base de datos con JS y PHP

Con el ejemplo de la BBDD de Academia que está en el aula virtual

Si vas a usar phpMyAdmin con XAMPP:

    1.1 Abre XAMPP.

    1.2 Module Apache -> Config -> PHP (php.ini) -> Ctrl + B -> Busca: mysqli.default_port -> Cambia 3306 por 3307 por ejemplo -> Guardar y salir

    1.3 Module MySQL -> Config -> my.ini -> Cambia los dos port=3306 por port=3307 (Estan arriba del todo, lineas 20 y 29) -> Guardar y salir

    1.4 Inicia los dos servicios y dale click a Admin en el modulo de MySQL, se te deberia de abrir el phpMyAdmin.


Para insertar academia.sql en phpMyAdmin:

    1. Crea una nueva base de datos

    2. Una vez creada, dale a Import en la pestaña de arriba y selecciona academia.sql y dale abajo a Import. Se te deberia de haber insertado correctamente

MYSQL:

Si no vas a usar phpMyAdmin, puedes usar MySQL que seria lo mismo. Pero que no se te olvide poner la contraseña de la BBDD en el PHP.