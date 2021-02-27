import 'reflect-metadata';
import express from 'express';
//por padrao busca um arquivo index
import "./database"
import { router } from "./routes";


const app = express();

//informando que estarei recebendo dados no formato json
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));
