import {getProductsFake} from "../Container/faker.js";
import {chatDbDAO, chatNormalizerDAO} from "../DAOs/index.js";

export const controller = {};

//PRODUCTOS----------------------------------------------------------
controller.getAllProducts = async ()=>{
    return {
        productsList: await getProductsFake( 5 ),
        listExists: true,
        };
}

//CHAT----------------------------------------------------
controller.saveMessage = async ( message ) =>{
    await chatDbDAO.addDocument( message ) 
    console.log('Mensaje guardado en DB');
}

controller.getChat = async () => {
    //Obtengo el historial de chat:
    const chatHistoric = await chatDbDAO.getDocuments();
    console.log('Se obtuvo el historial de Chat desde DB');

    //creo el schema
    const chatSchema = {
        id: 'chat',
        messages: chatHistoric
    }

    //Normalizo
    const chatNormalized = chatNormalizerDAO.normalize( chatSchema )
    console.log('Se normalizo el chat');

    return chatNormalized;
}

