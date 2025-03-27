
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


//Buscar
 const removeProduct = async(data) => {
     const {id, ...dataUpdate} = data
     const config = {
         method: "FETCH", // BUSCAR UN PRODUCTO un prducto
         body: JSON.stringify(dataUpdate)
     }
     const response = await fetch(`http://localhost:5600/products/${id}`, config);
     const result = await response.json();
     return result;
 } 
 while(confirm("¿Desea eliminar un producto?")){
     const data = {}
     data.id = prompt("Ingrese el id del producto", "Mic330");

     removeProduct(data)
    .then(result => alert(JSON.stringify(result)))
     .catch(error => alert(error))
  }