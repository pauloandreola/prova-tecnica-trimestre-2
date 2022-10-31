Pre requisitos para rodar o projeto:

- Ter instalado Node.Js, SQLite, VSCode com suas respectivas exstensões (express, typescript com suas dependências) e Insomnia no computador;
- Neste projeto optei pelo Yarn como gerenciador de pacotes, portanto se for utilizar NPM pode occorrer algum conflito, e/ou instabilidade;


Como executar o código:

Passo 1 - Ao abrir a pasta do projeto no VSCode deve ser executado no terminal o comando "yarn dev", ou "NPM dev";
Passo 2 - O programa Insomnia deve ser utilziado para testar o CRUD (cadastro de time e jogadores, as diversas formas de listar os dados e remoção do jogador. Para isso utilizar o arquivo "insomnia.json".

- Para cadastrar um time de futebol:
  - Utilizando o Insomnia, utilizar o método POST "Team Insert" para inserir o time no banco de dados;
- Para listar todos os times:
  - Utilizando o Insomnia, utilizar o método GET "Team List" para listar todos os times no banco de dados;
- Para listar um time específico:
  - Utilizando o Insomnia, utilizar o método GET "Team List ID" para listar um time espcífico no banco de dados;   
- Para listar todos os times de futebol e seus jogadores:

- Para cadastrar um jogador:
  - Utilizando o Insomnia, utilizar o método POST "Player Insert" para inserir o jogador no banco de dados;
- Para listar todos os jogadores:
  - Utilizando o Insomnia, utilizar o método GET "Player List" para listar todos os jogadores no banco de dados;
- Para listar um jogador específico:
  - Utilizando o Insomnia, utilizar o método Post "Player List ID" para listar um jogador específico no banco de dados;
- Para remover um jogador:
  - Utilizando o Insomnia, utilizar o método DEL "Player Delete ID" para deletar o jogador no banco de dados;