import { Rocket } from "../projectiles/rocket.js";
export class RocketWeapon {
    pew(tank) {
        return new Rocket(tank);
    }
}
