import { GameObject }       from "../gameobject.js";
import { Bullet } from "../projectiles/bullet.js";
import { Tank }             from "../tank.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";

export class BulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public onCollision(target: GameObject): void {
        console.log("bulletammo.ts")
        
        // if collossion with instance of tank > set target (Tank) to projectile (bullet)
        if(target instanceof Tank) {
            target.setProjectile(new Bullet(target))
        }
    }
}