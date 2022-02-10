import { Txt } from "./txt.js";
export class Main {
    constructor() {
        let txt = new Txt();
        txt.setStyle("I'm Brum, goes skrrr", "red");
    }
}
window.addEventListener("load", () => new Main());
