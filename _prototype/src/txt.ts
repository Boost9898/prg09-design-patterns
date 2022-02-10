import { RandomColor } from "./styles/randomColor.js"
import { Red } from "./styles/red.js"
import { Green } from "./styles/green.js"
import { Blue } from "./styles/blue.js"

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

        this.text = this.color.applyColor(this.text)
        this.color = color

        this.showText()
    }

    private showText() : void {
        this.innerHTML = this.text
    }
}

window.customElements.define("txt-component", Txt as any)