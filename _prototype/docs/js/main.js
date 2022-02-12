import { Red } from "./styles/red.js";
import { Green } from "./styles/green.js";
import { Blue } from "./styles/blue.js";
import { RandomColor } from "./styles/randomColor.js";
import { Txt } from "./txt.js";
export class Main {
    constructor() {
        let txt = new Txt();
        let txt2 = new Txt();
        let txt3 = new Txt();
        let txt4 = new Txt();
        txt.setColor("I'm Brum, goes skrrr", new Red());
        txt2.setColor("Dit werkt", new Green());
        txt3.setColor("Random kleurtje", new Blue());
        txt4.setColor("( ͡° ͜ʖ ͡°)", new RandomColor());
    }
}
window.addEventListener("load", () => new Main());
