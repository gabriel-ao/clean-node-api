<h1>Configurando o alias do git</h1>
<p>git config --global --edit</p>

<h1> Padronizando commits </h1>
<p> utilizando a biblioteca git-commit-msg-linter </p>

<h1>Utilizando o standard para configuração de codigo</h1>

<p> npm install --save-dev eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript
</p>

<a href="https://github.com/standard/eslint-config-standard-with-typescript"> https://github.com/standard/eslint-config-standard-with-typescript<a>

docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('clean-node-api').createUser({user: 'gabriel', pwd: 'gabriel', roles: [{role: 'readWrite', db: 'clean-node-api'}]})"

mongodb://gabriel:gabriel@localhost:27017/clean-node-api?authSource=clean-node-api
