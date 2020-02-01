class Ball extends Jouabilite {
    protected _x_vector: number; //Vecteur x
    protected _y_vector: number; //Vecteur y
    protected _speed: number;    //Vitesse (nombre de ms entre 2 mouvements de balle)
    protected _enemy: Character; //Objet correspondant à l'ennemi
    protected _ally: Character;
    protected _existance: boolean;//Droit ou non d'exister

    constructor(x: number, y: number, color: number, speed: number, pattern: Walls, enemy: Character, ally: Character, x_vector?: number, y_vector?: number) {
        super(x, y, color, 2, pattern);
        this._enemy = enemy;
        this._ally = ally;
        this._speed = speed;
        this._existance = true;
        if (typeof (x_vector) === "number" && typeof (y_vector) === "number") {
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
    get ally(): Character {
        return this._ally;
    }
    get speed(): number {
        return this._speed;
    }
    get existance(): boolean {
        return this._existance;
    }
    set x_vector(vector: number) {
        this._x_vector = vector;
    }
    set y_vector(vector: number) {
        this._y_vector = vector;
    }
    set existance(a: boolean) {
        this._existance = a;
    }

    private collision(): boolean {
        let dx_a: number = this.x - this.enemy.x;
        let dy_a: number = this.y - this.enemy.y;
        let d_a: number = Math.sqrt(dx_a * dx_a + dy_a * dy_a);

        let dx_e: number = this.x - this.enemy.x;
        let dy_e: number = this.y - this.enemy.y;
        let d_e: number = Math.sqrt(dx_e * dx_e + dy_e * dy_e);
        if (d_e < this.rad + this.enemy.rad || d_a < this.rad + this.ally.rad) {
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
            let rebond = 0;
            while (this.existance) {
                let vectors = this.movement(this.x_vector, this.y_vector);
                if (vectors.x_vector == 0) {
                    this.x_vector = -1 * this.x_vector;
                }
                if (vectors.y_vector == 0) {
                    this.y_vector = -1 * this.y_vector;
                }
                if (vectors.rebonds) {
                    rebond ++;
                }

                this.displayCharacter(65535); //Effacement de l'ancienne position
                this.x += vectors.x_vector;
                this.y += vectors.y_vector;
                this.displayCharacter(this.color);
                basic.pause(this.speed);
                if (this.collision()) {
                    basic.showNumber(0);    //Remplacer cette instruction par l'action à faire
                    this.existance = false;
                }
                if (rebond > 5) {
                    this.existance = false;
                }
            }
            ball.displayCharacter(65535)
        })
    }
}