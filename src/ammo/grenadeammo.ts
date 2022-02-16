import { GameObject }       from "../gameobject.js";
import { Tank }             from "../tank.js";
import { Vector }           from "../vector.js";
import { GrenadeWeapon }    from "../weapon/grenadeweapon.js";
import { Ammunition }       from "./ammunition.js";

export class GrenadeAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-grenade", position)
    }

    public onCollision(target: GameObject): void {
        console.log("grenadeammo.ts")
        
        // if collossion with instance of tank > set target (Tank) to projectile (bullet)
        if(target instanceof Tank) {
            target.setWeapon(new GrenadeWeapon)
        }
    }
}