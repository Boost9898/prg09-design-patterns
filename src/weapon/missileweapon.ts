import { Missile } from "../projectiles/missile.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class MissileWeapon {
    public pew(tank : Tank) : Projectile {
        return new Missile(tank);
    }
}