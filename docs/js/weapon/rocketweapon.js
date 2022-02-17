import { Rocket } from "../projectiles/rocket.js";
export class RocketWeapon {
    constructor() {
        this.fireSpeed = 2000;
    }
    pew(tank) {
        return new Rocket(tank);
    }
    getFireSpeed() {
        return this.fireSpeed;
    }
}
