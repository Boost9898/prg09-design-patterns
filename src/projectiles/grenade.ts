import { Tank }         from "../tank.js";
import { Vector } from "../vector.js";
import { Projectile }   from "./projectile.js";

export class Grenade extends Projectile {

    private setBoolean : boolean = false
    private tank : Tank

    constructor(tank : Tank) {
        super("grenade", tank)
        this.tank = tank
        console.log("grenade.ts")
    }

    public update() {
        // this.position = this.Position.add(this.direction.scale(this.speed = 0.5))
        this.test();
        super.update();
    }

    public test() {
        if (this.setBoolean === false) {
            this.position = new Vector(this.tank.Position.x - 150, this.tank.Position.y)
            this.setBoolean = true
        } 
    }
}
