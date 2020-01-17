class Character extends Jouabilite {
    protected _death: number;
    protected _reviveCode: Image[];

    constructor(name: string, x: number, color: number, pattern: Walls) {
        super(name, x, 64, color, 3, pattern);
        this._death = 0;
        this.reviveCode(false);
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
    public reviveCode(action: boolean, list_items?: number[]): number | void {
        //'action vaut 'false' s'il faut donner le code et 'true' s'il faut le tester

        let list_possibilities = [images.arrowImage(ArrowNames.North), images.arrowImage(ArrowNames.South), images.arrowImage(ArrowNames.East), images.arrowImage(ArrowNames.West), 
            images.iconImage(IconNames.Square), images.iconImage(IconNames.Triangle)]
        
        if (!action) {
            this._reviveCode = [];
            for (let i = 0; i < (this.death + 1) * 2; i++) {
                this._reviveCode.push(list_possibilities[Math.randomRange(0, list_possibilities.length)]);
                this._reviveCode[i].showImage(0)
                basic.pause(2000 / (this.death + 1))
                basic.clearScreen()
                basic.pause(100)
            }
        }

        else {
            for (let i = 0; i < list_items.length; i++) {
                if (list_possibilities[list_items[i]] === this._reviveCode[i]) {
                    continue
                }
                else {
                    images.iconImage(IconNames.Sad).showImage(0);
                    basic.pause(1);
                    return(1); // Voir quoi retourner si le code est erroné...
                }
            }
        }


    }

}

