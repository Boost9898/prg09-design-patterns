import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

declare global {
    interface Weapon {
        pew(tank : Tank) : Projectile
    }
}