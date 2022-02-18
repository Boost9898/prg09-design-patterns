import { Game }         from "./game.js";
import { GameObject }   from "./gameobject.js";
import { Bullet }       from "./projectiles/bullet.js";
import { Grenade }      from "./projectiles/grenade.js";
import { Rocket }       from "./projectiles/rocket.js";
import { Tank }         from "./tank.js";
import { Vector }       from "./vector.js";

export class Enemy extends GameObject {
    
    // Fields 
    private speed: number = 1
    private game: Game
    private player: Tank
    private type: string
    private audio = new Audio("./audio/oof.mp3");

    constructor(game: Game, type: string, position: Vector, player: Tank) {
        super(type)

        this.game       = game
        this.type       = type
        this.player     = player
        this.position   = position
    }

    public update() {
        this.position = this.position.add(this.position.getDirectionToObject(this.player).scale(this.speed))
        this.rotation = this.position.getDirectionToObject(this.player).angle()

        super.update()
    }

    onCollision(target: GameObject): void  {
        if(
            target instanceof Bullet && this.type == "enemy-light" ||
            target instanceof Rocket && this.type == "enemy-medium" ||
            target instanceof Grenade && this.type == "enemy-heavy"
            ) 
        {
            this.audio.play();
            let index = this.game.gameObjects.indexOf(this)
            if(index > -1) { 
                this.game.gameObjects.splice(index,1)
            }
            this.div.remove()
        }

        if (target instanceof Grenade && this.type == "enemy-heavy") {
            console.warn("oof")
        }
    }
}