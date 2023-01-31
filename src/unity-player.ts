import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('unity-player')
export class UnityPlayer extends LitElement {
    @property()
    loader?: string;

    @property()
    container?: string;
    
    @property()
    viewportWidth?: int = 100;
    
    @property()
    viewportHeight?: int = 100;
    
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
        //this.id = "gameContainer"
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
        <div id="game-container" style="width: ${this.viewportWidth}%; height: ${this.viewportHeight}%;"></div>`;
    }
}
