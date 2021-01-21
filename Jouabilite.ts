class Jouabilite {    
    protected _name: string;
    protected _x: number;
    protected _y: number;
    protected _color: number;
    protected _rad: number;

    constructor(name: string, x: number, y: number, color: number, rad: number) {
        this._name = name;
        this._x = x;
        this._y = y;
        this._color = color;
        this._rad = rad;
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
        // Affiche un rond de couleur `color` et de rayon adapté
        LCD1IN8.DrawCircle(this.x, this.y, this.rad, color, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1);
        LCD1IN8.LCD_DisplayWindows(this.x - (this.rad + 1), this.y - (this.rad + 1), this.x + (this.rad + 1), this.y + (this.rad + 1));
    }
    protected movement(x_vector: number, y_vector: number): direction {
        let rebondir = false;
        // Appel de la fonction du fichier gérant les murs
        let has_touched : direction = collision(this.x, this.y, this.rad);
        if (has_touched == direction.Vertical) {
            rebondir = true;
            // Fixer correctement pour un rebond vertical
        }
        else if (has_touched == direction.Horizontal) {
            rebondir = true;
            // Fixer correctement pour un rebond horizontal
        }
        else {
            // Fixer correctement pour que ça avance normalement
        }

        return has_touched;
    }
} 