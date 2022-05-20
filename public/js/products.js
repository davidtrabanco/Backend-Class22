import {socket, getTemplate} from "./index.js";

const getProducts = (templateEJS) => {
    socket.on('products', objProducts =>{ 
        const htmlCode = ejs.render(templateEJS, objProducts) 
        document.querySelector('.productsLit').innerHTML = htmlCode; 
    });
};

//Obtengo el template y llamo al callback
getTemplate('productTemp.ejs', getProducts);


// //Evento botón nuevo producto:
// document.querySelector('#newProductFrom').addEventListener('submit', (e)=>{
//     e.preventDefault();
//     //creo el objecto con el nuevo producto
//     const newProduct = {
//         title: document.getElementById("title").value,
//         price: document.getElementById("price").value,
//         thumbnail: document.getElementById("thumbnail").value,
//     }
//     socket.emit('newProduct', newProduct)//envío al servidor
//     document.getElementById("title").value="";
//     document.getElementById("price").value="";
//     document.getElementById("thumbnail").value="";
// })