import 'reflect-metadata';
import express from 'express';
//por padrao busca um arquivo index
import "./database"


const app = express();

//http://localhost:3333/users
app.get("/users",  (request, response) => {
  //return response.send("Hello World - NLW4");
  return response.json({message : "Hello World - NLW4"});
});

app.listen(3333, () => console.log("Server is running!"));
