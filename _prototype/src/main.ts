import { Txt } from "./txt.js"

export class Main {

    constructor() {
        let txt : Txt = new Txt()
        // second parameters accept: red, blue, green
        // displays image when doesn't recognize parameter
        txt.setStyle("I'm Brum, goes skrrr", "red")
    }

}

window.addEventListener("load", () => new Main())