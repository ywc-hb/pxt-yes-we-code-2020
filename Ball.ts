class Ball extends Jouabilite {
    protected _x_vector: number; //Vecteur x
    protected _y_vector: number; //Vecteur y
    protected _speed: number;    //Vitesse (nombre de ms entre 2 mouvements de balle)
    protected _enemy: Character; //Objet correspondant à l'ennemi
    protected _ally: Character;  //Objet correspondant à l'allier
    protected _existance: boolean;//Droit ou non d'exister

    constructor(name: string, x: number, y: number, color: number, speed: number, enemy: Character, ally: Character, x_vector?: number, y_vector?: number) {
        super(name, x, y, color, 2);
        this._enemy = enemy;
        this._ally = ally;
        this._speed = speed;
        this._existance = true;
        if (typeof (x_vector) === "number" && typeof (y_vector) === "number") {
            this.move(x_vector, y_vector); // Début du mouvement si `x_vector` et `y_vector` sont correctement définis
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

    private crash(charact: Character): boolean {
        /* Fonction testant s'il y a collision avec l'objet passé en paramètre */
        // Calcul de la distance entre les deux centres
        let d: number = Math.sqrt((this.x - charact.x) * (this.x - charact.x) + (this.y - charact.y) * (this.y - charact.y)); 
        if (d < (this.rad + charact.rad)) {
            return true;
        }
        else {
            return false;
        }
    }

    public move(x_vector: number, y_vector: number) {
        /* x_vector : nombre de pixels de déplacement sur l'axe x
         * y_vector : nombre de pixels de déplacement sur l'axe y
         * Fonction déplacant la balle de manière autonome en background */
        control.inBackground(function () {
            this.x_vector = x_vector; 
            this.y_vector = y_vector;
            let nb_rebond = 0;
            while (this.existance) {
                let has_touched = this.movement(this.x_vector, this.y_vector);
                if (has_touched == direction.Vertical) {
                    this.y_vector = -1 * this.y_vector; // Inversion du sens de `y_vector`
                }
                if (has_touched == direction.Horizontal) {
                    this.x_vector = -1 * this.x_vector; // Inversion du sens de `y_vector`
                }
                if (has_touched != direction.None) {
                    nb_rebond ++;
                }

                this.displayCharacter(65535); //Effacement de l'ancienne position
                this.x += this.x_vector;
                this.y += this.y_vector;
                this.displayCharacter(this.color); //Affichage de la nouvelle position
                
                basic.pause(this.speed);

                // Test des collision avec des personnages
                if (this.crash(this.enemy)) {
                    this.existance = false;
                    Master.killedCharacter(this.enemy());
                }
                if (this.crash(this.ally)) {
                    this.existance = false;
                    Master.killedCharacter(this.ally());
                }

                // Test du nombre max de rebonds
                if (nb_rebond > 5) {
                    this.existance = false;
                }
            }
            this.displayCharacter(65535)
        })
    }
}