//var Emitter = require('./emitter')
var Emitter = require('events')
let config = require('./config')
var emtr= new Emitter()

//Insertamos dos funciones a la propiedad "greet" una que dice 
//!"Somewhere someone said hello."
emtr.on(config.events.GREET,()=>{
    console.log("Somewhere someone said hello.")
})
// y la otra "A greeting ocurred!"
// El comportamiento sigue siendo el mismo ya que hablamos al objeto  config el
// cual contiene un objeto llamado events y este tiene una propiedad llamada
// greet que tiene el valor de 'greet' pero al ser ya definido evitamos conflictos de typos
emtr.on(config.events.GREET,()=>{
    console.log("A greeting ocurred!")
})

console.log("Hello!")
//Llamamos a el metodo emit buscando por la llave greet el cual invocara todas las
//funciones dentro de el array de la llave greet
emtr.emit("greet")
//Insertamos una nueva llave con el nombre jump y una funcion que imprime en consola
emtr.on("jump",()=>{
    console.log("someone jumped")
})
//Imprimimos en pantalla el objeto emtr el cual nos muestra que dentro del objeto events
//tenemos 2 llaves una greet con un array de 2 elementos con funciones anonimas y otra llave
//llamada jump con un solo elemento
console.log(emtr)
//Emitimos jump que de igual manera itera por los elementos del array dentro de la llave jump
emtr.emit("jump")
