export class Txt extends HTMLElement {
    private text : string = ""
    private color : Color;

    constructor() {
        super()

        let main = document.getElementsByTagName("main")[0]
        main.appendChild(this)

        this.showText()
    }
    
    public setColor(text : string, color : Color) {

        this.color = color
        this.style.color = this.color.applyColor()
        this.text = text

        this.showText()
    }

    private showText() : void {
        this.innerHTML = this.text
    }
}

window.customElements.define("txt-component", Txt as any)