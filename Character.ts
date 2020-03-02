class Character extends Jouabilite {
    protected _death: number;
    protected _remainingBalls: number;

    constructor(name: string, x: number, color: number, pattern: Walls) {
        super(name, x, 64, color, 3, pattern);
        this._death = 0;
        this._remainingBalls = 5;
    }

    //------------------- Setters and getters ----------------------
    get death(): number {
        return this._death;
    }
    get remainingBalls(): number {
        return this._remainingBalls;
    }
    set death(a: number) {
        this._death = a;
    }
    set remainingBalls (a: number) {
        this._remainingBalls = a;
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