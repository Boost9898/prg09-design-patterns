import { Red } from "./styles/red.js";
import { Txt } from "./txt.js";
export class Main {
    constructor() {
        let txt = new Txt();
        txt.setColor("I'm Brum, goes skrrr", new Red());
    }
}
window.addEventListener("load", () => new Main());
