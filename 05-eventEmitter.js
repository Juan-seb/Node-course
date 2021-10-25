import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on('myEvent', (message) => {
    console.log(message);
    
})

emitter.once('myEvent',()=> {
    console.log("Evento emitido por primera vez");
    
})

emitter.emit("myEvent","Hola soy un emisor de eventos");
emitter.emit("myEvent","Hola soy un emisor de eventos, me ejecuto por segunda vez");

emitter.removeAllListeners("myEvent");

