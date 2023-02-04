import { LitElement } from 'lit';
export declare class UnityPlayer extends LitElement {
    loader: string;
    container: string;
    width?: number;
    height?: number;
    get gameContainer(): Element | null;
    constructor();
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
