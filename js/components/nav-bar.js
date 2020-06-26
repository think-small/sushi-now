const template = document.createElement("template");
template.innerHTML = `
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style>
        nav {
            box-sizing: border-box;
            width: 100%;
            padding: 0 5%;
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
            transition: all 250ms ease-in-out;
        }

        a:hover {
            color: var(--accent-color);
        }

        a:active {
            color: var(--accent-color);
        }

        div {            
            width: 50%;
        }
        
        i {
            padding: 0.5em;
        }
    </style>
    <nav>
        <div>
            <a href="index.html">Sushi Now</a>
            <a href="index.html"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="index.html"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="index.html"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //  Change stylings if dark-mode attribute is set to true
    if (this.getAttribute("dark-mode")) {
      const nav = this.shadowRoot.querySelector("nav");
      nav.style.backgroundColor = "var(--bg-color)";
    }
  }
}

customElements.define("nav-bar", Navbar);
