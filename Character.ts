class Character extends Jouabilite {
    protected _death: number;
    protected remainingBalls: number;

    constructor(x: number, color: number, pattern: Walls) {
        super(x, 64, color, 3, pattern);
        this._death = 0;
        this.remainingBalls = 5;
    }

    //------------------- Setters and getters ----------------------
    get death(): number {
        return this._death;
    }
    set death(death_new: number) {
        this._death = death_new;
    }

    public move(x_vector: number, y_vector: number): void {
        let vectors = this.movement(x_vector, y_vector);
        this.displayCharacter(65535) //Effacement de l'ancienne position
        this.x += vectors.x_vector;
        this.y += vectors.y_vector;
        this.displayCharacter(this.color);
    }

    public recharge(): void {
        this.remainingBalls = 5;
    }
}

