import { Projectile } from "./projectile.js";
export class Bullet extends Projectile {
    constructor(tank) {
        super("bullet", tank);
        console.log("bullet.ts");
    }
    update() {
        super.goForward();
        super.update();
    }
}
