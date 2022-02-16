import { Grenade } from "../projectiles/grenade.js";
export class GrenadeWeapon {
    pew(tank) {
        return new Grenade(tank);
    }
}
