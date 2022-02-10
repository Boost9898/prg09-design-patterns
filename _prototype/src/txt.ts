export class Txt extends HTMLElement {
    private text : string = ""

    constructor() {
        super()

        let main = document.getElementsByTagName("main")[0]
        main.appendChild(this)

        this.showText()
    }

    public setStyle(text : string, style : string) {
        this.text = text
        if (style == "red") {
            this.style.color = this.style.color = "#C62828";
            this.showText()
        } else if (style == "green") {
            this.style.color = this.style.color = "#4CAF50";
            this.showText()
        } else if (style == "blue") {
            this.style.color = this.style.color = "#1565C0";
            this.showText()
        } else {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.color = this.style.color = randomColor;
            this.text = "<img src='/_prototype/docs/images/shrek.png'>"
            this.showText()
        }
    }

    private showText() : void {
        this.innerHTML = this.text
    }
}

window.customElements.define("txt-component", Txt as any)