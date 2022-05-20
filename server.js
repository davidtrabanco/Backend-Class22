import express from "express";
import { Server as IOServer } from "socket.io";
import { Server as HttpServer } from "http";
import {initWebSocket} from "./src/routes/sockets.js";

//creo un servidor HTTP y websockets
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const httpServer = new HttpServer(app);
export const io = new IOServer(httpServer);

//inicio los WebSockets:
initWebSocket(io);

//Configuro carpeta pública:
app.use(express.static('./public'));

//Inicio Servidor:
const PORT = process.env.PORT || 8080;
const activeServer = httpServer.listen(PORT, ()=>console.log(`HTTP Server Up on Port ${activeServer.address().port}`))
activeServer.on('error', err => console.error(err));
