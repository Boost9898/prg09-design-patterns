import { GameObject }       from "../gameobject.js";
import { Rocket }           from "../projectiles/rocket.js";
import { Tank }             from "../tank.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";

export class RocketAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-rocket", position)
    }

    public onCollision(target: GameObject): void {
        console.log("rocketammo.ts")

        // if collossion with instance of tank > set target (Tank) to projectile (bullet)
        if(target instanceof Tank) {
            target.setProjectile(new Rocket(target))
        }
    }
}