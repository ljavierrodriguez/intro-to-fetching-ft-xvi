/* 

Http Request Methods: 

    GET, POST, PUT, DELETE

Http Response:

   1xx:  Respuestas informativas (100–199),
   2xx:  Respuestas satisfactorias (200–299),
   3xx:  Redirecciones (300–399),
   4xx:  Errores de los clientes (400–499),
   5xx:  Errores de los servidores (500–599).


*/

/* const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {



        reject('Tarea Ejecutada no exitosa');
    }, 3000)
})

console.log("Antes de la llamada a la promesa");
console.log(newPromise
    .then((response) => { console.log(response) })
    .catch((error) => { console.log(error) }));
console.log("Despues de la llamada a la promesa");
console.log("Despues de la llamada a la promesa");
console.log("Despues de la llamada a la promesa"); */

// GET
// fetch(string, object) // string: 'url_endpoint_a_consultar' object: { 
//      method: 'GET', 
//      body:  , // POST, PUT,
//      headers: {
//          'Content-Type': 'application/json',
//          'Authorization': 'token',                   
//      }
// }

// .then((response) => {
//     console.log(response.status)
//     if(reponse.status === 404) throw new Error('Pagina no encontrada');   
// })



function dividir(a, b){
    try {
        if(b === 0) throw new Error('Division por 0');
        
        let result = a / b;

        return result;
    } catch (error) {
        console.log(error);
    }
}


console.log(dividir(3, 0));