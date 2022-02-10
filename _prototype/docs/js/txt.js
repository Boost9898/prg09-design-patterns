export class Txt extends HTMLElement {
    constructor() {
        super();
        this.text = "";
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(this);
        this.showText();
    }
    setStyle(text, style) {
        this.text = text;
        if (style == "red") {
            this.style.color = this.style.color = "#C62828";
            this.showText();
        }
        else if (style == "green") {
            this.style.color = this.style.color = "#4CAF50";
            this.showText();
        }
        else if (style == "blue") {
            this.style.color = this.style.color = "#1565C0";
            this.showText();
        }
        else {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            this.style.color = this.style.color = randomColor;
            this.text = "<img src='/_prototype/docs/images/shrek.png'>";
            this.showText();
        }
    }
    showText() {
        this.innerHTML = this.text;
    }
}
window.customElements.define("txt-component", Txt);
