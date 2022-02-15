import { Tank } from "../tank.js";
import { MissileWeapon } from "../weapon/missileweapon.js";
import { Ammunition } from "./ammunition.js";
export class MissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-missile", position);
    }
    onCollision(target) {
        console.log("missileammo.ts");
        if (target instanceof Tank) {
            target.setWeapon(new MissileWeapon);
        }
    }
}
