import 'reflect-metadata';
import express from 'express';
//por padrao busca um arquivo index
import createConnection from "./database"
import { router } from "./routes";

createConnection();
const app = express();

//informando que estarei recebendo dados no formato json
app.use(express.json());
app.use(router);

export { app };