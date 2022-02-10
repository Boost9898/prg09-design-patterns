import { Red } from "./styles/red.js"
import { Green } from "./styles/green.js"
import { Blue } from "./styles/blue.js"
import { RandomColor } from "./styles/randomColor.js"
import { Txt } from "./txt.js"

export class Main {

    constructor() {
        let txt : Txt = new Txt()
        // second parameters accept: red, blue, green
        // displays image when doesn't recognize parameter
        txt.setColor("I'm Brum, goes skrrr", new Red())
    }
}

window.addEventListener("load", () => new Main())