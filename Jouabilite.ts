class Jouabilite {    
    protected _name: string;
    protected _x: number;
    protected _y: number;
    protected _color: number;
    protected rad: number;
    protected _pattern: Walls;

    constructor(name: string, x: number, color: number, pattern: Walls) {
        this._name = name;
        this._x = x;
        this._y = 64;
        this._color = color;
        this.rad = 3;
        this._pattern = pattern;
        this.displayCharacter(this.color);
    }

    //------------------- Setters and getters ----------------------

    get name(): string {
        return this._name;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get color(): number {
        return this._color;
    }

    get pattern(): Walls {
        return this._pattern;
    }

    set x(x_new: number) {
        if(x_new - this.rad <= 0) {
            this._x = 1 + this.rad;
        }

        else if(x_new + this.rad > 160) {
            this._x = 160 - this.rad;
        }

        else {
            this._x = x_new;
        }
    }

    set y(y_new: number) {
        if(y_new - this.rad <= 0) {
            this._y = 1 + this.rad;
        }

        else if(y_new + this.rad > 128) {
            this._y = 128 - this.rad;
        }

        else {
            this._y = y_new;
        }
    }
    //------------------- End of setters and getters ----------------------

    protected displayCharacter(color: number): void {
        LCD1IN8.DrawCircle(this.x, this.y, this.rad, color, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1);
        LCD1IN8.LCD_DisplayWindows(this.x - (this.rad + 1), this.y - (this.rad + 1), this.x + (this.rad + 1), this.y + (this.rad + 1));
    }

    protected movement(x_vector: number, y_vector: number): { x_vector: number, y_vector: number } {
        this.displayCharacter(65535) //Effacement de l'ancienne position

        //Définition des murs à tester en fonction de la position
        let murs: number[][];
        if (this.x <= 80 && this.y <= 64) {
            murs = this._pattern.wallsNO;
        }
        else if (this.x <= 80 && this.y >= 64) {
            murs = this._pattern.wallsSO;
        }
        else if (this.x >= 80 && this.y <= 64) {
            murs = this._pattern.wallsNE;
        }
        else {
            murs = this._pattern.wallsSE;
        }


        /* Nommage des positions : 
                ---B---
              /         \
             /           \
            |             |
            E      A      C
            |             |
             \           /
              \         /
                ---D---
        */

        for (let i = 0; i < murs.length; i++) {
            //Test de la position D
            if (this.x >= murs[i][0] && this.x <= murs[i][2] && this.y + (this.rad + 1) >= murs[i][1] && this.y + (this.rad + 1) <= murs[i][3] && y_vector > 0) {
                y_vector = 0;
            }

            //Test de la position B
            else if (this.x >= murs[i][0] && this.x <= murs[i][2] && this.y - (this.rad + 1) >= murs[i][1] && this.y - (this.rad + 1) <= murs[i][3] && y_vector < 0) {
                y_vector = 0;
            }

            //Test de la position C
            if (this.x + (this.rad + 1) >= murs[i][0] && this.x + (this.rad + 1) <= murs[i][2] && this.y >= murs[i][1] && this.y <= murs[i][3] && x_vector > 0) {
                x_vector = 0;
            }

            //Test de la position E
            else if (this.x - (this.rad + 1) >= murs[i][0] && this.x - (this.rad + 1) <= murs[i][2] && this.y >= murs[i][1] && this.y <= murs[i][3] && x_vector < 0) {
                x_vector = 0;
            }
        }
        return {
            x_vector: x_vector,
            y_vector: y_vector
        };
    }
} 

/*
si dans balle alors tester si y'a un resultat egale à 0 ; si oui --> inverser celui concerné ; si non --> ajouter les valeurs aux cooredonnes
si dans character --> ajouter les valeurs retournées aux coordonnées
*/

