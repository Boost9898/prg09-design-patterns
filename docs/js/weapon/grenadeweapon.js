import { Grenade } from "../projectiles/grenade.js";
export class GrenadeWeapon {
    constructor() {
        this.fireSpeed = 3500;
    }
    pew(tank) {
        return new Grenade(tank);
    }
    getFireSpeed() {
        return this.fireSpeed;
    }
}
