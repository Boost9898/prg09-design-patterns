import { GameObject } from "./gameobject.js";
import { Bullet } from "./projectiles/bullet.js";
import { Grenade } from "./projectiles/grenade.js";
import { Rocket } from "./projectiles/rocket.js";
export class Enemy extends GameObject {
    constructor(game, type, position, player) {
        super(type);
        this.speed = 1;
        this.audio = new Audio("./audio/oof.mp3");
        this.game = game;
        this.type = type;
        this.player = player;
        this.position = position;
    }
    update() {
        this.position = this.position.add(this.position.getDirectionToObject(this.player).scale(this.speed));
        this.rotation = this.position.getDirectionToObject(this.player).angle();
        super.update();
    }
    onCollision(target) {
        if (target instanceof Bullet && this.type == "enemy-light" ||
            target instanceof Rocket && this.type == "enemy-medium" ||
            target instanceof Grenade && this.type == "enemy-heavy") {
            this.audio.play();
            let index = this.game.gameObjects.indexOf(this);
            if (index > -1) {
                this.game.gameObjects.splice(index, 1);
            }
            this.div.remove();
        }
        if (target instanceof Grenade && this.type == "enemy-heavy") {
            console.warn("oof");
        }
    }
}
