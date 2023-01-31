import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('unity-player')
export class UnityPlayer extends LitElement {
    static styles =  css`
    p { color: black}
    `;

    @property()
    name?: string = "world";

    render() {
        return html`<p> Hello ${this.name}!</p>`;
    }
}
