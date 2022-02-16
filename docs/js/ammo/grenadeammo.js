import { Tank } from "../tank.js";
import { GrenadeWeapon } from "../weapon/grenadeweapon.js";
import { Ammunition } from "./ammunition.js";
export class GrenadeAmmo extends Ammunition {
    constructor(position) {
        super("ammo-grenade", position);
    }
    onCollision(target) {
        console.log("grenadeammo.ts");
        if (target instanceof Tank) {
            target.setWeapon(new GrenadeWeapon);
        }
    }
}
