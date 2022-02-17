import { Grenade } from "../projectiles/grenade.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class GrenadeWeapon {

    private fireSpeed : number = 3500

    public pew(tank : Tank) : Projectile {
        return new Grenade(tank);
    }

    public getFireSpeed() : number {
        return this.fireSpeed
    }
}