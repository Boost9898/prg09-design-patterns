import { Projectile } from "./projectile.js";
export class Rocket extends Projectile {
    constructor(tank) {
        super("rocket", tank);
        console.log("rocket.ts");
    }
    update() {
        super.goForward();
        super.update();
    }
}
