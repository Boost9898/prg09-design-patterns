import { GameObject }       from "../gameobject.js";
import { Tank }             from "../tank.js";
import { Vector }           from "../vector.js";
import { MissileWeapon }    from "../weapon/missileweapon.js";
import { Ammunition }       from "./ammunition.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public onCollision(target: GameObject): void {
        console.log("missileammo.ts")
        
        // if collossion with instance of tank > set target (Tank) to projectile (bullet)
        if(target instanceof Tank) {
            target.setWeapon(new MissileWeapon)
        }
    }
}