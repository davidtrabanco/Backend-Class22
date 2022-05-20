import {socketProducts} from "./products.js";
import {controller} from "../controller/main.js";

export const initWebSocket = (io) =>{

    io.on('connection', async (socket) =>{

    socketProducts(socket)
    
     //NUEVA CONEXION:
     socket.emit('chatHistoric', await controller.getChat()) //Envío historial de chat
 
     //llega nuevo mensaje
     socket.on('newMessage', obMessage=>{
         //Guardo en DB:
         controller.saveMessage(obMessage);
         //Envío a todas las conexiones:
         io.sockets.emit('newMessage', [obMessage])
     })
        
    });
}