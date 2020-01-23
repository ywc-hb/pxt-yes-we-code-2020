class Character extends Jouabilite {
    protected _death: number;

    constructor(name: string, x: number, color: number, pattern: Walls) {
        super(name, x, 64, color, 3, pattern);
        this._death = 0;
    }

    //------------------- Setters and getters ----------------------

    get death(): number {
        return this._death;
    }

    set death(death_new: number) {
        this._death = death_new;
    }

    //------------------- End of setters and getters ----------------------

    public move(x_vector: number, y_vector: number): void {
        let vectors = this.movement(x_vector, y_vector);
        this.displayCharacter(65535) //Effacement de l'ancienne position
        this.x += vectors.x_vector;
        this.y += vectors.y_vector;
        this.displayCharacter(this.color);
    }
}

