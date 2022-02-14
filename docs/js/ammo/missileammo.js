import { Missile } from "../projectiles/missile.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class MissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-missile", position);
    }
    onCollision(target) {
        console.log("missleammo.ts");
        if (target instanceof Tank) {
            target.setProjectile(new Missile(target));
        }
    }
}
