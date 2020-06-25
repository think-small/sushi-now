const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <style>
        footer {
            position: absolute;
            margin: 0;
            padding: 0;
            width: 100%;
            background: var(--bg-color);
            height: 100px;
        }
    </style>
    <footer>
        roflcopter, yo
    </footer>
`;

class StickyFooter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define("sticky-footer", StickyFooter);
