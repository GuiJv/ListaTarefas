# Lista de Tarefas

Lista de tarefa simples utilizando Express.js e Next.js.

## Pré-requisitos

Para esse projeto é apenas necessário um navegador web atualizado, como o Google Chrome, e possui o Node.js instalado no seu Computador.

## Instalação

1. Faça o download ou clone o projeto com o comando `git clone https://github.com/GuiJv/ListaTarefas.git`.
2. No diretório do projeto instale as dependências.
3. `npm init`
4. `npm install express`
5. `npm install next@latest react@latest react-dom@latest`

## Uso

Para rodar o programa, nos diferentes diretórios ListaTarefas/back e ListaTarefas/front/todolist, digite `node index.js` e `npm run dev` no terminal dos respectivos diretórios.
Após isso, apenas acesse http://localhost:3000/, para ver o site. Ele consiste em um simples CRUD que adiciona, lista, edita e deleta tarefas.

## Funcionamento

O Next.Js constroi toda a estrutura do front-end, que por sua vez manda requisições para o back-end com a função `fetch` do JavaScript, o servidor criado pelo Express então lida com as requisições conforme a rota e o método, seja ele POST, GET, PUT e DELETE. Por fim ele salva as informações em um arquivo JSON, para que as informações se mantenham e ao sair e entrar da aplicação o site permanecer o mesmo.

## Futuras Melhorias

- Aplicar TypeScript no código todo
- Deixar a aparência ainda mais agradável com mais CSS
- Otimizar o código
- Adicionar repositorios diferentes como, MongoDB ou qualquer um que utilize SQL

## Contribuição

Qualquer contribuição é bem-vinda, o projeto é simples e há muito em que melhorar, entendo que contribuições e troca de informações são maneiras eficientes de adquirir conhecimento e aprender.

## Contato

guilhermejosevinhas@gmail.com 