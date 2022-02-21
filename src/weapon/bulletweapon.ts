import { Bullet } from "../projectiles/bullet.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

// must add "implements Weapon"
export class BulletWeapon implements Weapon {

    private fireSpeed : number = 500

    public pew(tank : Tank) : Projectile {

        return new Bullet(tank);
    }

    public getFireSpeed() : number {
        return this.fireSpeed
    }
}