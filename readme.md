# Utilizando las sentencias de repetición y selección con EJS y el código de la práctica #12 (endpoint /person:id ) para tener el siguiente comportamiento:

## Juan Pedro Ramirez Meza

En el query string de la petición tendremos 2 parámetros “message” y “times”. Para pasar más de 1 parámetro, debemos unirlos con el carácter “&”.
?message=Hola&times=4
En este caso, “message” puede tomar solo 3 valores “Hola”, “Adios” y “Bienvenido” y el parámetro “times” indica las veces que se debe repetir el “message”, de tal forma que para la siguiente petición, tenemos la respuesta:
