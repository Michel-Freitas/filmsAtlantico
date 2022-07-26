# Films Atlantico

## Sobre
Aplicação que tem como objetico fazer a consultade filmes na plataforma [TMDB](https://www.themoviedb.org/?language=pt-BR "Plataforma de filmes grátis"). A API em Node JS serve como um Gateway para coordenar e direcionar as conultas, fazendo também trataivas necessários nas regras de consulta e retorno para o Front-End. Para a criação dela foi utilizado as seguintes tecnologias:
- Front-End
    - React JS
    - Typescript
    - Axios
    - SASS
- Back-End
    - Node JS
    - Typescript
    - Axios
    - Express

## Funcionalidades:
- Consultar Filmes
- Bucar Filmes por Nome
- Adicionar Filme aos Favoritos
- Remover Filme dos Favoritos
- Visutalizar Lista de Favoritos

## Execução
- Baixar a branch **release-20-07-2022**
### Back-End
- Entre na pasta **back**
- Execute o comando **yarn install** para baixar os pacotes
- Criei um arquivo _.env_ e adicione essas variáveis
    - **PORT**=9005
    - **TMDB_API_URL**=https://api.themoviedb.org
    - **TMDB_API_KEY**=ADICIONE_SUA_KEY
- Salve o arquivo
- Execute o comando **yarn dev**
### Front-End
- Entre na pasta **front**
- Execute o comando **yarn install** para baixar os pacotes
- Criei um arquivo _.env_ e adicione essas variáveis
    - **VITE_BASE_URL_IMAGES**=https://www.themoviedb.org/t/p/w300_and_h450_bestv2/
    - **VITE_FILMS_ATLANTICO_API_URL**=http://localhost:9005/
- Salve o arquivo
- Execute o comando **yarn dev**
