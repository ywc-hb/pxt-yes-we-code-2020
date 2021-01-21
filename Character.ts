class Character extends Jouabilite {
    protected _death: number;
    protected _remainingBalls: number;

    constructor(name: string, x: number, color: number) {
        super(name, x, 64, color, 3);
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
        /* x_vector : nombre de pixels de déplacement sur l'axe x
         * y_vector : nombre de pixels de déplacement sur l'axe y
         * Fonction faisant bouger, si possible, le personnage appelant */
        let has_touched : direction = this.movement(x_vector, y_vector);
        this.displayCharacter(65535) //Effacement de l'ancienne position
        // Définition de s'il y a mouvement
        if (has_touched != direction.None) {
            x_vector = 0;
            y_vector = 0;
        }

        // Déplacement
        this.x += x_vector;
        this.y += y_vector;
        
        // Affichage de la nouvelle position
        this.displayCharacter(this.color);
    }

    public recharge(): void {
        this.remainingBalls = 5;
    }
}