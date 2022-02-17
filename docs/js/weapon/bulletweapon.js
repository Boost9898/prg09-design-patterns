import { Bullet } from "../projectiles/bullet.js";
export class BulletWeapon {
    constructor() {
        this.fireSpeed = 500;
    }
    pew(tank) {
        return new Bullet(tank);
    }
    getFireSpeed() {
        return this.fireSpeed;
    }
}
