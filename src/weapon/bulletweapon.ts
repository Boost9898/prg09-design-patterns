import { Bullet } from "../projectiles/bullet.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class BulletWeapon {

    private fireSpeed : number = 500

    public pew(tank : Tank) : Projectile {

        return new Bullet(tank);
    }

    public getFireSpeed() : number {
        return this.fireSpeed
    }
}