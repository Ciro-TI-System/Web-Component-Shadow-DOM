class Cardnews extends HTMLElement {
  constructor() {
    // Sempre chame 'super' primeiro no construtor
    super();
    //'open' significa que você pode acessar o shadowDOM usando JavaScript escrito no contexto da página principal.
    const shadow = this.attachShadow({ mode: "open" });
    //Declarando que os componentes 'build' e 'styles' são filhos do 'shadow'
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  //Criando o componente 'build' e setando com o elemento 'div'
  build() {
    //Criando o componente 'componentRoot' e setando com a classe 'card'
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    //Criando o componente 'cardLeft' e setando com a classe 'card_left'
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    //Criando o componente 'autor' e setando com o elemento 'span'
    const autor = document.createElement("span");
    //Adicionando 'props' ao componente 'autor'
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    //Criando o componente 'linkTitle' e setando com o elemento 'a'
    const linkTitle = document.createElement("a");
    //Adicionando 'props' ao elemento 'title' do componente 'linkTitle'
    linkTitle.textContent =
      this.getAttribute("title") || "Em breve novas notícias do Império";
    //Adicionando 'props' ao elemento 'link-url' do componente 'linkTitle'
    linkTitle.href =
      this.getAttribute("link-url") ||
      "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Gal%C3%A1ctico_(Star_Wars)";

    //Criando o componente 'newsContent' e setando com o elemento 'p'
    const newsContent = document.createElement("p");
    //Adicionando 'props' ao elemento 'content' do componente 'newsContent'
    newsContent.textContent =
      this.getAttribute("content") ||
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";

    //Declarando que os componentes 'autor', 'linkTitle' e 'newsContent' são filhos do 'cardLeft'
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    //Criando o componente 'cardRight' e setando com a classe 'card_right'
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    //Criando o componente 'newsImage' e setando com o elemento 'img'
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
    newsImage.alt = "Foto da Noticia";
    //Declarando que o componente 'newsImage' é filho do 'cardRight'
    cardRight.appendChild(newsImage);

    //Declarando que os componentes 'cardLeft' e 'cardRight' são filhos do 'componentRoot'
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  //Criamos um CSS para aplicar estilização ao shadow DOM
  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
          width: 80%;
          box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card__left > span {
          font-weight: 400;
        }
        
        .card__left > a {
          margin-top: 15px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        
        .card__left > p {
          color: rgb(70, 70, 70);
        }

        .card__right > img {
          width: 170px;
          height: 160px;
        }
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);
