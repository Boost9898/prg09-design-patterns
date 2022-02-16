import { Grenade } from "../projectiles/grenade.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class GrenadeWeapon {
    public pew(tank : Tank) : Projectile {
        return new Grenade(tank);
    }
}