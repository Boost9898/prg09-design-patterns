import { Rocket } from "../projectiles/rocket.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class RocketAmmo extends Ammunition {
    constructor(position) {
        super("ammo-rocket", position);
    }
    onCollision(target) {
        console.log("rocketammo.ts");
        if (target instanceof Tank) {
            target.setProjectile(new Rocket(target));
        }
    }
}
