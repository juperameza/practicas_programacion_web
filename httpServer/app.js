var http = require("http")

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello world\n')
}).listen(1337)
//La consola detiene cualquier funcion extra ya que esta siendo usada para ejecutar el servidor 

//Se muestra en pantalla un hello world

//Nos muesta los request method que en este caso fue get al igual que mostrar el codigo de estado
//El igual que los  response headers
