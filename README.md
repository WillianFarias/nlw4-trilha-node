# nlw4-trilha-node
Tecnologias
yarn

Comandos
yarn init -y

Dependencias
https://expressjs.com/pt-br/
yarn add express

Dependencia do express
* -D informa que a dependencia deve ser instalada apenas em ambiente de desenvolvimento
yarn add @types/express -D 

yarn add typescript -D

Inicializando typescript na aplicacao
yarn tsc --init

Converte ts em js em tempo de execução
yarn add ts-node-dev -D

Orm
yarn add typeorm reflect-metadata

bd sqlite
yarn add sqlite3

Criando uma migration
yarn typeorm migration:create -n CreateUsers

Executando uma migration
yarn typeorm migration:run

rollback da ultima migration
yarn typeorm migration:revert

biblioteca responsavel por gerenciar uuid
yarn add uuid

Tipos da biblioteca uuid
yarn add @types/uuid -D

Teste unitarios com Jest
yarn add jest @types/jest -D

Adicionar arquivo de configuracao do Jest
yarn jest --init

Preset responsavel por possibilitar o uso de typescript nos testes
yarn add ts-jest -D

Ferramenta que possibilita fazer testes de integração
yarn add supertest @type/supertest -D