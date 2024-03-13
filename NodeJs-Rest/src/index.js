const http = require("http");
const { bodyParser } = require("./lib/bodyParser");

let database = [];

function getTasksHandler(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(database));
  response.end();
}

async function createTaskHandler(request, response) {
  try {
    await bodyParser(request);
    //   console.log(request.body);
    database.push(request.body);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(database));
    response.end();
  } catch (error) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Invalid Data");
    response.end();
  }
}

async function updateTaskHandler(request, response) {
  try {
    let { url } = request;
    console.log(url);
    let idQuery = url.split("?")[1];
    let idKey = idQuery.split("=")[0];
    let idValue = idQuery.split("=")[1];

    if (idKey === "id") {
      await bodyParser(request);
      database[idValue - 1] = request.body;
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(database));
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Ivalid request query");
      response.end();
    }
  } catch (error) {
    response.writeHead(400, { "Content-Type": "text/plain" });
    console.log(error);
    response.write("Ivalid Body Data was provided", error.message);
    response.end();
  }
}

async function deleteTaskHandler(request, response) {
  let { url } = request;
  console.log(url);
  let idQuery = url.split("?")[1];
  let idKey = idQuery.split("=")[0];
  let idValue = idQuery.split("=")[1];

  if (idKey === "id") {
    database.splice(idValue - 1, 1);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({
        message: "OK, DELETED",
        database_actual: database,
      })
    );
    response.end();
  } else {
    response.writeHead(400, { "Content-Type": "text/plain" });
    response.write("Ivalid request query");
    response.end();
  }
}

const server = http.createServer((request, response) => {
  const { url, method } = request;

  //Logger
  console.log(`URL: ${url} - Method: ${method}`);

  // Se agrega el tipo de cabecera
  // 200 -> estado de la peticion
  // {'Content-type':'text/plain'} -> se va a responder con un texto

  // response.writeHead(200, {'Content-type':'text/plain'})
  // // lo que se escribe en la respuesta
  // response.write('Recived');

  // // Se finaliza la respuesta
  // response.end();

  //Creacion de las rutas
  switch (method) {
    case "GET":
      if (url === "/") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ message: "Hello World" }));
        response.end();
      }
      if (url === "/tasks") {
        getTasksHandler(request, response);
      }
      break;
    case "POST":
      if (url === "/tasks") {
        createTaskHandler(request, response);
      }
      break;

    case "PUT":
      updateTaskHandler(request, response);
      break;

    case "DELETE":
      deleteTaskHandler(request, response);
      break;

    default:
      break;
  }
});

server.listen(3000);
console.log("Server on port", 3000);
