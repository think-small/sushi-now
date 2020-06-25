const template = document.createElement("template");
template.innerHTML = `
    <style>
        nav {
            box-sizing: border-box;
            width: 90%;
            padding: 0;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            color: var(--primary-color);
        }
        ul {
            width: 50%;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        a {
            text-decoration: none;
            pointer: cursor;
            color: var(--primary-color);
        }

        a:hover {
            color: var(--accent-color);
            text-decoration: underline;
        }

        a:active {
            color: var(--accent-color);
        }

        div {            
            width: 50%;
        }
    </style>
    <nav>
        <div>
            <a href="index.html">Sushi Now</a>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("nav-bar", Navbar);
