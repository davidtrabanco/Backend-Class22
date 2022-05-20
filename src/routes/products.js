import {controller} from "../controller/main.js";

export const socketProducts = async (socket) =>{
    //NUEVA CONEXION

    //Envío Productos
    socket.emit('products', await controller.getAllProducts()) 
    
    //Recibo producto nuevo:
    socket.on('newProduct', product=>{
        controller.addProduct(product);//guardo el producto
        io.sockets.emit('products', controller.getAllProducts()) //Envío la lista actualizada a todas las conexiones
    })
}