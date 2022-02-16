import { Vector } from "../vector.js";
import { Projectile } from "./projectile.js";
export class Grenade extends Projectile {
    constructor(tank) {
        super("grenade", tank);
        this.setBoolean = false;
        this.tank = tank;
        console.log("grenade.ts");
    }
    update() {
        this.test();
        super.update();
    }
    test() {
        if (this.setBoolean === false) {
            this.position = new Vector(this.tank.Position.x - 150, this.tank.Position.y);
            this.setBoolean = true;
        }
    }
}
