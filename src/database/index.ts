import { createConnection, Connection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {

  //capturando valores do armconfig
  const defaultOptions = await getConnectionOptions();

  //criando conexao com o banco
  return createConnection(
    Object.assign(defaultOptions, {
      database: 
        process.env.NODE_ENV === 'test'
          ? './src/database/database.test.sqlite'
          : defaultOptions.database,
    })
  );
}
