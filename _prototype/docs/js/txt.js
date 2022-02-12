export class Txt extends HTMLElement {
    constructor() {
        super();
        this.text = "";
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(this);
        this.showText();
    }
    setColor(text, color) {
        this.color = color;
        this.style.color = this.color.applyColor();
        this.text = text;
        this.showText();
    }
    showText() {
        this.innerHTML = this.text;
    }
}
window.customElements.define("txt-component", Txt);
