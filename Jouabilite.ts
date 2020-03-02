class Jouabilite {    
    protected _name: string;
    protected _x: number;
    protected _y: number;
    protected _color: number;
    protected _rad: number;
    protected _pattern: Walls;

    constructor(name: string, x: number, y: number, color: number, rad: number, pattern: Walls) {
        this._name = name;
        this._x = x;
        this._y = y;
        this._color = color;
        this._rad = rad;
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
    get rad(): number {
        return this._rad;
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

    protected displayCharacter(color: number): void {
        LCD1IN8.DrawCircle(this.x, this.y, this.rad, color, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1);
        LCD1IN8.LCD_DisplayWindows(this.x - (this.rad + 1), this.y - (this.rad + 1), this.x + (this.rad + 1), this.y + (this.rad + 1));
    }
    protected movement(x_vector: number, y_vector: number): { x_vector: number, y_vector: number, rebonds: boolean } {
        let rebondir = false;
        //Définition des murs à tester en fonction de la position
        let murs: number[][];
        if (this.x <= 80 && this.y <= 64) {
            murs = this._pattern.wallNW;
        }
        else if (this.x <= 80 && this.y >= 64) {
            murs = this._pattern.wallSW;
        }
        else if (this.x >= 80 && this.y <= 64) {
            murs = this._pattern.wallNE;
        }
        else {
            murs = this._pattern.wallSE;
        }
        
        for (let i = 0; i < murs.length; i++) {
            //Test des positions influants sur le vecteur y
            if(murs[i][0] === murs[i][2]) {
                //Définition du point le plus proche du cercle
                let closest = [murs[i][0], 300];
                if(this.y + y_vector >= murs[i][1] && this.y + y_vector <= murs[i][3]) {
                    closest[1] = this.y;
                }
                else if(this.y + y_vector < murs[i][1]) {
                    closest[1] = murs[i][1];
                }
                else if(this.y + y_vector > murs[i][3]) {
                    closest[1] = murs[i][3];
                }
                if (Math.sqrt(Math.pow((this.x) - closest[0], 2) + Math.pow((this.y + y_vector) - closest[1], 2)) < this.rad + 1) {  
                    y_vector = 0;
                    rebondir = true;
                }
                else if (Math.sqrt(Math.pow((this.x + x_vector) - closest[0], 2) + Math.pow((this.y) - closest[1], 2)) < this.rad + 1) {
                    x_vector = 0;
                    rebondir = true;
                }
            }

            //Test des positions influants sur le vecteur y
            else if (murs[i][1] === murs[i][3]) {
                let closest = [300, murs[i][1]];

                if (this.x + x_vector >= murs[i][0] && this.x + x_vector <= murs[i][2]) {
                    closest[0] = this.x;
                }
                else if (this.x + x_vector < murs[i][0]) {
                    closest[0] = murs[i][0];
                }
                else if (this.x + x_vector > murs[i][2]) {
                    closest[0] = murs[i][2];
                }
                
                if (Math.sqrt(Math.pow((this.x) - closest[0], 2) + Math.pow((this.y + y_vector) - closest[1], 2)) < this.rad + 1) {
                    y_vector = 0;
                    rebondir = true;
                }
                else if (Math.sqrt(Math.pow((this.x + x_vector) - closest[0], 2) + Math.pow((this.y) - closest[1], 2)) < this.rad + 1) {
                    x_vector = 0;
                    rebondir = true;
                }
            }
        }

        return {
            x_vector: x_vector,
            y_vector: y_vector,
            rebonds: rebondir
        };
    }
} 