const menuItemTemplate = document.createElement("template");
menuItemTemplate.innerHTML = `
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style>
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
            margin: 5px;
            border: 1px solid black;
            width: 200px;
            height: 220px;
            transition: all 250ms ease-in-out;            
        }

        section:hover {
          box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.7);
        }

        h4 {
          padding: 0 0 0.5em 0;
          margin: 0;
        }
    </style>

    <section>
        <h4 class="name"></h4>
        <div class="description"></div>
        <div class="price"></div>
    </section>


`;

class MenuItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(menuItemTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector(".name").innerText = this.getAttribute(
      "title"
    );
    this.shadowRoot.querySelector(".description").innerText = this.getAttribute(
      "content"
    );
    this.shadowRoot.querySelector(".price").innerText = this.getAttribute(
      "other"
    );
  }

  static get observedAttributes() {
    return ["name", "description", "price"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case "name":
        this.shadowRoot.querySelector(".name").innerText = newValue;
        break;
      case "description":
        this.shadowRoot.querySelector(".description").innerText = newValue;
        break;
      case "price":
        this.shadowRoot.querySelector(".price").innerText = newValue;
        break;
      default:
        break;
        return;
    }
  }

  get name() {
    return this.getAttribute("name");
  }

  get description() {
    return this.getAttribute("description");
  }

  get price() {
    return this.getAttribute("price");
  }

  set name(newName) {
    this.setAttribute("name", newName);
  }

  set description(newDescription) {
    this.setAttribute("description", newDescription);
  }

  set price(newPrice) {
    this.setAttribute("price", newPrice);
  }
}

customElements.define("menu-item", MenuItem);
