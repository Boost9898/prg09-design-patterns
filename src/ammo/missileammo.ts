import { GameObject }       from "../gameobject.js";
import { Missile } from "../projectiles/missile.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public onCollision(target: GameObject): void {
        console.log("missleammo.ts")

        // if collossion with instance of tank > set target (Tank) to projectile (missile)
        if(target instanceof Tank) {
            target.setProjectile(new Missile(target))
        }
    }
}