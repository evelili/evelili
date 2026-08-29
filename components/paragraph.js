const paraTemplate = document.createElement('template');

paraTemplate.innerHTML = `
    <link rel="stylesheet" href="/style.css">
    <div class="para">
        <slot name="para-title" part="title"></slot>
        <div class="para-body">
            <slot name="para-body">BODY</slot>
        </div>
    </div>
`;

class Para extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const clone = document.importNode(paraTemplate.content, true);

        shadowRoot.appendChild(clone);
      }
}

customElements.define('paragraph-component', Para);
