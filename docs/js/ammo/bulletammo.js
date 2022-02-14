import { Bullet } from "../projectiles/bullet.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        console.log("bulletammo.ts");
        if (target instanceof Tank) {
            target.setProjectile(new Bullet(target));
        }
    }
}
