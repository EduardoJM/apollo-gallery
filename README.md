# Apollo Image Gallery

<h2 align="center">
    <img src=".github/images/preview.jpg" alt="previa do site" />
</h2>

<h3 align="center">
    <a target="blank" href="https://eduardojm.github.io/apollo-gallery/#/">Acessar Online</a>
</h3>

## :bulb: Sobre

Esse projeto foi criado objetivando facilitar a visualização das imagens do programa Apollo, disponíveis no site [Apollo Archive](http://www.apolloarchive.com/apollo_gallery.html). Esse projeto é, na verdade, uma recriação utilizando **ReactJS**, pois o meu projeto original (antigo) utilizava scripts mal feitos e carregava todos os arquivos JSON das galerias.

São duas partes do projeto, sendo a primeira delas o de raspar os dados do site. Esse processo de raspagem não é feito de forma completamente automática e, as partes automáticas são escritas em Python e estão disponíveis no repositório [apollo-gallery-scrap](https://github.com/EduardoJM/apollo-gallery-scrap), junto com os arquivos json gerados (arquivos esses que são carregados nessa aplicação).

A segunda parte, consiste nessa interface, desenvolvida utilizando o **ReactJS** e o **styled-components**.

## :gear: Tecnologias

- JavaScript / ReactJS
- CSS (com *styled-components*)

## :hammer: Ferramentas

- [Visual Studio Code](https://code.visualstudio.com/download)

## :book: Coisas Aprendidas

Algumas das principais coisas aprendidas nesse projeto foram:

- Melhor aprimoramento nos conceitos do `useEffect` e do `useState`.

- Utilizar o `fetch` e funções assíncronas para o carregamento dos dados (providos pelo [jsDelivr](https://www.jsdelivr.com/) a partir do repositório do GitHub já citado acima).

## :computer: Executando o projeto

Uma versão do projeto está disponível online, [clicando aqui](https://eduardojm.github.io/apollo-gallery/#/). Porém, caso você queira executar o projeto localmente, na sua máquina, basta seguir os seguintes passos.

### 1 - Clonar o repositório

```bash
git clone https://github.com/EduardoJM/apollo-gallery.git
```

### 2 - Instalar as dependências

```bash
cd apollo-gallery
npm install
```

### 3 - Executar o servidor de desenvolvimento

```bash
npm start
```

## :pencil: Planos para o futuro

- Corrigir os arquivos raspados (estão em outro repositório), pois alguns links (não utilizados nesse projeto) estão com diferenças de maiúscula e minúscula.

- Traduzir os arquivos raspados e, ao longo do tempo, corrigir e adicionar informações.

## :nerd_face: Author

### Eduardo Oliveira

- GitHub: [@EduardoJM](https://github.com/eduardojm/)
- LinkedIn: [/in/edujso](https://www.linkedin.com/in/edujso/)
- Instagram: [@edu.js.o](https://instagram.com/edu.js.o)
