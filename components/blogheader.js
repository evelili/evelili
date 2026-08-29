const blogheaderTemplate = document.createElement('template');

blogheaderTemplate.innerHTML = `
    <link rel="stylesheet" href="/style.css">
    <div class="blogheader">
        <slot name="title">TITLE</slot>
        <slot name="date">YYYY-MM-DD</slot>
    </div>
`;

class Blogheader extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const clone = document.importNode(blogheaderTemplate.content, true);

        shadowRoot.appendChild(clone);
      }
}

customElements.define('blogheader-component', Blogheader);
