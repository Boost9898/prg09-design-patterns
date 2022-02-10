export class Txt extends HTMLElement {
    constructor() {
        super();
        this.text = "";
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(this);
        this.showText();
    }
    setColor(text, color) {
        this.text = this.color.applyColor(this.text);
        this.color = color;
        this.showText();
    }
    showText() {
        this.innerHTML = this.text;
    }
}
window.customElements.define("txt-component", Txt);
