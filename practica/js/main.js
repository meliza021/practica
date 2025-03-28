
// const saveproduct = async(data)=>{
//     const config = {
//         method: "POST",
//         body: JSON.stringify(data)
//     }
//     const response = await fetch("http://localhost:5600/products", config)
//     const result = await response.json();
//     return result
// }


//agregar
// while(confirm("¿Deseas guardar un datos?")){
//     const data = {
//             id:  prompt("ingrese el id"),
//             name: prompt("ingrese el nombre"),
//             price:  Number(prompt("ingrese el precio, 600")),
//             category:  prompt("ingrese el cateforia")
//         }
//     saveproduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }



 // editar
// const editProduct = async(data) => {
//     const {id, ...dataUpdate} = data
//     const config = {
//         method: "PUT", // Actualizar
//         body: JSON.stringify(dataUpdate)
//     }
//     const response = await fetch(`http://localhost:5600/products/${id}`, config);
//     const result = await response.json();
//     return result;
// }
// while(confirm("¿Desea actualizar un producto?")){
//     const data = {}


//     data.id = prompt("Ingrese el id del producto", "Mic330");
//     data.name = (confirm("¿Desea actualizar el nombre del producto?"))? prompt("Ingrese el nuevo nombre") : undefined
//     data.price = (confirm("¿Desea actualizar el precio del producto?"))? Number(prompt("Ingrese el nuevo precio")) : undefined
//     data.category = (confirm("¿Desea actualizar la categoría del producto?"))? prompt("Ingrese la nueva categoría") : undefined

//     editProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }


//eliminar
// const removeProduct = async(data) => {
//     const {id, ...dataUpdate} = data
//     const config = {
//         method: "DELETE", // eliminar un prducto
//         body: JSON.stringify(dataUpdate)
//     }
//     const response = await fetch(`http://localhost:5600/products/${id}`, config);
//     const result = await response.json();
//     return result;
// } 
// while(confirm("¿Desea eliminar un producto?")){
//     const data = {}
//     data.id = prompt("Ingrese el id del producto", "Mic330");

//     removeProduct(data)
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
//  }


// Buscar
//   const removeProduct = async(data) => {
//       const {id, ...dataUpdate} = data
//       const config = {
//           method: "FETCH", // BUSCAR UN PRODUCTO un prducto
//           body: JSON.stringify(dataUpdate)
//       }
//       const response = await fetch(`http://localhost:5600/products/${id}`, config);
//       const result = await response.json();
//       return result;
//   } 
//   while(confirm("¿Desea eliminar un producto?")){
//       const data = {}
//       data.id = prompt("Ingrese el id del producto", "Mic330");
//       removeProduct(data)
//      .then(result => alert(JSON.stringify(result)))
//       .catch(error => alert(error))
//   }
// const findUsers2 = async() => {
//     const url = new URL("https://67e686886530dbd311105634.mockapi.io") // Forma de crear una url desde cero
//     url.pathname = "/users"; // Forma de acceder a la ruta
//     const config = {
//         method: "GET", // Obtener todos los usuarios
//     }
//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     return result;
// }
// const seeUsers2 = async() => {
//     const data = await findUsers2()
//     console.table(data)
//  }
//     seeUsers2()



//guardar  usuarios
// const saveusers = async(data)=>{
//     const url = new URL("https://67e686626530dbd311105550.mockapi.io") // Forma de crear una url desde cero
//     url.pathname = "/users"; // Forma de acceder a la ruta
//     const header = new Headers()
//     header.append("Content-Type", "application/json")

//     const config = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     return result;
// }

// while (confirm("¿Deseas Guardar un usuario?")) {
//     const data = {
//         name: prompt("Ingrese el nombre del usuario"),
//         last: prompt("Ingrese el apellido del usuario"),
//     }
//     saveusers(data)
//         .then(result => alert(JSON.stringify(result)))
//         .catch(error => alert(error))
// }
// saveusers()



//editar
// const editusers = async (data) => {
//     const { id, ...dataUpdate } = data;
//     const url = new URL(`https://67e686626530dbd311105550.mockapi.io/users/${id}`);  // URL correcta

//     const header = new Headers();
//     header.append("Content-Type", "application/json");

//     const config = {
//         method: "PUT",  
//         headers: header,
//         body: JSON.stringify(dataUpdate)
//     };

//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     return result;
// };

// while (confirm("¿Deseas editar un usuario?")) {
//     const data = {};

//     data.id = prompt("Ingrese el id del producto", "1");
//     data.name = (confirm("¿Desea actualizar el nombre del usuario?")) ? prompt("Ingrese el nuevo nombre") : undefined;
//     data.last = (confirm("¿Desea actualizar el apellido del producto?")) ? prompt("Ingrese el nuevo apellido") : undefined;

//     // Solo llamar a la función si hay algo que actualizar
//     if (data.name || data.last) {
//         editusers(data)
//             .then(result => alert(JSON.stringify(result)))
//             .catch(error => alert(error));
//     } else {
//         alert("No se realizaron cambios.");
//     }
// }

//ELIMINAR AL USUARIO
// const removeusers = async (data) => {
//     const { id, ...dataUpdate } = data;
//     const url = new URL(`https://67e686626530dbd311105550.mockapi.io/users/${id}`);  // URL correcta

//     const header = new Headers();
//     header.append("Content-Type", "application/json");

//     const config = {
//         method: "DELETE",  
//         headers: header,
//         body: JSON.stringify(dataUpdate)
//     };

//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     return result;
// };
// while(confirm("¿Desea eliminar un producto?")){
//     const data = {}
//     data.id = prompt("Ingrese el id del producto", "5");

//     removeusers(data) 
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }

//BUSCAR EL USUARIO
// const buscarusers = async (data) => {
//     const { id, ...dataUpdate } = data;
//     const url = new URL(`https://67e686626530dbd311105550.mockapi.io/users/${id}`);  // URL correcta

//     const header = new Headers();
//     header.append("Content-Type", "application/json");

//     const config = {
//         method: "GET",  
//         headers: header,
//     };

//     const response = await fetch(url.toString(), config);
//     const result = await response.json();
//     return result;
// };
// while(confirm("¿Desea buscar un producto?")){
//     const data = {}
//     data.id = prompt("Ingrese el id del producto", "2");

//     buscarusers(data) 
//     .then(result => alert(JSON.stringify(result)))
//     .catch(error => alert(error))
// }