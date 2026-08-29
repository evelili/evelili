const bloglinkTemplate = document.createElement('template');

bloglinkTemplate.innerHTML = `
    <link rel="stylesheet" href="/style.css">
    <div class="bloglink">
        <div class="bloglink-head">
            <slot name="title">TITLE</slot>
            <slot name="date">YYYY-MM-DD</slot>
        </div>
        <slot name="summary"></slot>
    </div>
`;

class Bloglink extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const clone = document.importNode(bloglinkTemplate.content, true);

        shadowRoot.appendChild(clone);
      }
}

customElements.define('bloglink-component', Bloglink);
