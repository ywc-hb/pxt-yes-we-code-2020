class Jouabilite {    
    protected _name: string;
    protected _x: number;
    protected _y: number;
    protected _color: number;
    protected rad: number;

constructor(name: string, x: number, color: number) {
    this._name = name;
    this._x = x;
    this._y = 64;
    this._color = color;
    this.rad = 3;
    this.displayCharacter(this.color)
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

set x(x_new: number) {
    if (x_new <= 0) {
        this._x = 1;
    }

    else if (x_new > 160) {
        this._x = 160;
    }

    else {
        this._x = x_new;
    }
}

set y(y_new: number) {
    if (y_new <= 0) {
        this._y = 1;
    }

    else if (y_new > 128) {
        this._y = 128;
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
        if (this._x <= 80 && this._y <= 64) {
            murs = [[1, 50, 16, 50], [31, 34, 56, 34], [36, 59, 46, 59], [70, 64, 80, 64], [18, 12, 48, 12], [18, 0, 18, 12], [48, 0, 48, 12], [80, 1, 80, 25], [80, 45, 80, 64], [36, 59, 36, 64], [46, 59, 46, 64]]
        }
        else if (this._x <= 80 && this._y >= 64) {
            murs = [[1, 78, 16, 78], [31, 94, 56, 94], [36, 69, 46, 69], [70, 64, 80, 64], [18, 116, 48, 116], [18, 116, 18, 128], [48, 116, 48, 128], [80, 64, 80, 85], [80, 103, 80, 128], [36, 64, 36, 69], [46, 64, 46, 69]]
        }
        else if (this._x >= 80 && this._y <= 64) {
            murs = [[80, 1, 80, 25], [80, 45, 80, 64], [160, 50, 145, 50], [130, 34, 105, 34], [125, 59, 115, 59], [142, 12, 112, 12], [142, 0, 142, 12], [112, 0, 112, 12], [125, 59, 125, 64], [115, 59, 115, 64], [80, 64, 90, 64]]
        }
        else {
            murs = [[80, 64, 90, 64], [80, 64, 80, 85], [80, 103, 80, 128], [160, 78, 144, 78], [130, 94, 105, 94], [125, 69, 115, 69], [142, 116, 112, 116], [142, 116, 142, 128], [112, 116, 112, 128], [125, 64, 125, 69], [115, 64, 115, 69]]
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
            if (this._x >= murs[i][0] && this._x <= murs[i][2] && this._y + (this.rad + 1) >= murs[i][1] && this._y + (this.rad + 1) <= murs[i][3] && y_vector > 0) {
                y_vector = 0
            }

            //Test de la position B
            else if (this._x >= murs[i][0] && this._x <= murs[i][2] && this._y - (this.rad + 1) >= murs[i][1] && this._y - (this.rad + 1) <= murs[i][3] && y_vector < 0) {
                y_vector = 0
            }

            //Test de la position C
            if (this._x + (this.rad + 1) >= murs[i][0] && this._x + (this.rad + 1) <= murs[i][2] && this._y >= murs[i][1] && this._y <= murs[i][3] && x_vector > 0) {
                x_vector = 0
            }

            //Test de la position E
            else if (this._x - (this.rad + 1) >= murs[i][0] && this._x - (this.rad + 1) <= murs[i][2] && this._y >= murs[i][1] && this._y <= murs[i][3] && x_vector < 0) {
                x_vector = 0
            }
        }
        return {
            x_vector: x_vector,
            y_vector: y_vector
        }
    }
} 

/*
si dans balle alors tester si y'a un resultat egale à 0 ; si oui --> inverser celui concerné ; si non --> ajouter les valeurs aux cooredonnes
si dans character --> ajouter les valeurs retornées aux coordonnées
*/

