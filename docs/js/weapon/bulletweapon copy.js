import { Bullet } from "../projectiles/bullet";
export class BulletWeapon {
    pew(tank) {
        return new Bullet(tank);
    }
}
