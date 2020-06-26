const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style>
        footer {
            position: absolute;
            margin: 0;
            padding: 0;
            width: 100%;
            background: var(--bg-color);
            height: 150px;
            color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .footer-address, .footer-social {
            padding: 2em;
        }

        span {
            margin-right: 1em;
        }

        a {
            color: var(--primary-color);
        }

        i {
            padding: 0.5em;
        }        
    </style>
    <footer>
        <div class="footer-address">
            <address>
                <div>Sushi Now</div>
                <div>51151 Nicollet Ave N</div>
                <div>Minneapolis, MN 55555</div>
            </address>
        </div>
        <div class="footer-social">
            <span>Follow Sushi Now:</span>
            <a href="index.html"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="index.html"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="index.html"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>        
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
