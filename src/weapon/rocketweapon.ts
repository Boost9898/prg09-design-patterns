import { Rocket } from "../projectiles/rocket.js";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";

export class RocketWeapon implements Weapon {

    private fireSpeed : number = 2000

    public pew(tank : Tank) : Projectile {
        return new Rocket(tank);
    }

    public getFireSpeed() : number {
        return this.fireSpeed
    }
}