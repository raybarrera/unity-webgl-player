import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('unity-player')
export class UnityPlayer extends LitElement {
    @property()
    loader?: string;

    @property()
    container?: string;
    
    @property()
    width?: int = 100;
    
    @property()
    height?: int = 100;
    
    get gameContainer() {
        return this.renderRoot.querySelector("#game-container");
    }

    constructor() {
        super();
        this.addEventListener('loader-loaded', (e)=> {
            UnityLoader.instantiate(this.gameContainer, this.container);
        });
    }
    
    override connectedCallback () {
        super.connectedCallback();
        var script = document.createElement("script");
        script.src = this.loader;
        script.onload = () => {
            var ev = new Event('loader-loaded');
            this.dispatchEvent(ev);
        };
        document.body.appendChild(script);
    }

    render() {
        return html`
        <div id="game-container" style="width: ${this.width}%; height: ${this.height}%;"></div>`;
    }
}
