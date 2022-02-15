import { Bullet } from "../projectiles/bullet.js";
export class BulletWeapon {
    pew(tank) {
        return new Bullet(tank);
    }
}
