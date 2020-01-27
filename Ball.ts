class Ball extends Jouabilite {
    protected _x_vector: number; //Vecteur x
    protected _y_vector: number; //Vecteur y
    protected _speed: number;    //Vitesse (nombre de ms entre 2 mouvements de balle)
    protected _enemy: Character; //Objet correspondant à l'ennemi

    constructor(x: number, y: number, color: number, speed: number, pattern: Walls, enemy: Character, x_vector?: number, y_vector?: number) {
        super(x, y, color, 2, pattern);
        this._enemy = enemy;
        this._speed = speed;
        if(typeof(x_vector) === "number" && typeof(y_vector) === "number") {
            this.move(x_vector, y_vector);
        }
    }

    // Getters - Setters
    get x_vector(): number {
        return this._x_vector;
    }
    get y_vector(): number {
        return this._y_vector;
    }
    get enemy(): Character {
        return this._enemy;
    }
    get speed(): number {
        return this._speed;
    }
    set x_vector(vector: number) {
        this._x_vector = vector;
    }
    set y_vector(vector: number) {
        this._y_vector = vector;
    }

    private collision(): boolean {
        let dx: number = this.x - this.enemy.x;
        let dy: number = this.y - this.enemy.y;
        let d: number = Math.sqrt(dx * dx + dy * dy);
        if(d < this.rad + this.enemy.rad) {
            return true;
        }
        else {
            return false;
        }
    }
    public move(x_vector: number, y_vector: number) {
        control.inBackground(function () {
            this.x_vector = x_vector;
            this.y_vector = y_vector;
            let continuer = true;
            while(continuer) {
                let vectors = this.movement(this.x_vector, this.y_vector);
                if(vectors.x_vector == 0) {
                    this.x_vector = -this.x_vector;
                }
                if(vectors.y_vector == 0) {
                    this.y_vector = -this.y_vector;
                }

                this.displayCharacter(65535); //Effacement de l'ancienne position
                this.x += vectors.x_vector;
                this.y += vectors.y_vector;
                this.displayCharacter(this.color);
                basic.pause(this.speed);
                if (this.collision()) {
                    basic.showNumber(0);
                    continuer = false;
                }
            }
        })
    }
}


