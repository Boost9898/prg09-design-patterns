import { Missile } from "../projectiles/missile.js";
export class MissileWeapon {
    pew(tank) {
        return new Missile(tank);
    }
}
