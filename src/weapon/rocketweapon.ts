import { Rocket } from "../projectiles/rocket.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class RocketWeapon {
    public pew(tank : Tank) : Projectile {
        return new Rocket(tank);
    }
}