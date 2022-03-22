- ¿Qué es un middleware?
  Middleware es software que se sitúa entre un sistema operativo y las aplicaciones que se ejecutan en él. Básicamente, funciona como una capa de traducción oculta para permitir la comunicación y la administración de datos en aplicaciones distribuidas. A veces, se le denomina “plumbing” (tuberías), porque conecta dos aplicaciones para que se puedan pasar fácilmente datos y bases de datos por una “canalización”. El uso de middleware permite a los usuarios hacer solicitudes como el envío de formularios en un explorador web o permitir que un servidor web devuelva páginas web dinámicas en función del perfil de un usuario.

- ¿Cuál es el significado del término “MEAN stack” ?

Se conoce con el acrónimo de MEAN (formado por MongoDB, Express, AngularJS y NodeJS) al stack o compilación de estas tecnologías para desarrollar aplicaciones web usando como único lenguaje de programación javascript en el servidor, en el cliente y en la base de datos.

- ¿Cuáles son las características/funcionalidades que Express ofrece como middleware?
  Application-level middleware
  Router-level middleware
  Error-handling middleware
  Built-in middleware
  Third-party middleware

- ¿Qué es una ruta en express?
  Route middleware en Express es una forma de hacer algo antes de que una petición se procese. Este algo podrían ser cosas como comprobar si un usuario se ha autentificado (logueado con su cuenta por ejemplo), en definitiva, cualquier cosa que gustemos hacer antes de mandarle información al usuario.

- ¿Qué es un “route handler” en express y para qué se utiliza?
  El enrutamiento se define mediante métodos del objeto de la aplicación Express que corresponden a los métodos HTTP; por ejemplo, app.get() para gestionar solicitudes GET y app.post para gestionar solicitudes POST. Para obtener una lista completa, consulte app.METHOD. También puede usar app.all() para manejar todos los métodos HTTP y app.use() para especificar el middleware como la función de devolución de llamada (consulte Uso de middleware para obtener más detalles).

Estos métodos de enrutamiento especifican una función de devolución de llamada (a veces denominada "funciones de controlador") que se activa cuando la aplicación recibe una solicitud para la ruta (punto final) y el método HTTP especificados. En otras palabras, la aplicación "escucha" las solicitudes que coinciden con las rutas y los métodos especificados, y cuando detecta una coincidencia, llama a la función de devolución de llamada especificada.

De hecho, los métodos de enrutamiento pueden tener más de una función de devolución de llamada como argumentos. Con varias funciones de devolución de llamada, es importante proporcionar next como argumento para la función de devolución de llamada y luego llamar a next() dentro del cuerpo de la función para transferir el control a la próxima devolución de llamada.

- ¿Cuáles son los 2 parámetros necesarios para crear una ruta para el método GET con express, ejemplo: app.get()?
  La ruta y la funcion del route hanldler que tiene dos parametros necesarios "req y res"

- ¿Qué es lo que hace la instrucción res.send?
  Envia una respuesta de htpp el cual acepta un parametro "body" el cual puede ser un string o un objeto de buffer o un objeto o un array

- ¿Cuál es el motivo por el que express es tan popular?
  La razón por la que Express es el marco web más popular es que facilita el desarrollo de aplicaciones web, sitios web y API. También ofrece una colección subyacente de topografías. Con Express. js, podrá perfeccionar diferentes aspectos de la aplicación web.
