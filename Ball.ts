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

    private collision(charact: Character): boolean {
        let dx: number = this.x - charact.x;
        let dy: number = this.y - charact.y;
        let d: number = Math.sqrt(dx * dx + dy * dy);
        if (d < this.rad + charact.rad) {
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
                if (vectors.rebond) {
                    rebond ++;
                }

                this.displayCharacter(65535); //Effacement de l'ancienne position
                this.x += vectors.x_vector;
                this.y += vectors.y_vector;
                this.displayCharacter(this.color);
                basic.pause(this.speed);
                if (this.collision(this.enemy) || this.collision(this.ally)) {
                    basic.showNumber(0);    //Remplacer cette instruction par l'action à faire
                    this.existance = false;
                }
                if (rebond > 5) {
                    this.existance = false;
                }
            }
            this.displayCharacter(65535)
        })
    }
}