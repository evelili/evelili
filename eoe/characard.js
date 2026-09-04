const characardTemplate = document.createElement('template');

characardTemplate.innerHTML = `
    <link rel="stylesheet" href="/eoe/eoe-style.css">
    <div class="characard">
        <slot name="image"></slot>
        <div class="characard-body">
            <h2><slot name="title">TITLE</slot></h2>
            <p><slot name="summary">Description goes here</slot></p>
        </div>
    </div>
`;

class Characard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // if (this.shadowRoot) {
        //     return;
        // }
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const clone = document.importNode(characardTemplate.content, true);

        shadowRoot.appendChild(clone);
    }
}

customElements.define('characard-component', Characard);
