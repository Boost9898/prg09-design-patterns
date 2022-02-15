import { Bullet } from "../projectiles/bullet.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class BulletWeapon {
    public pew(tank : Tank) : Projectile {
        return new Bullet(tank);
    }
}