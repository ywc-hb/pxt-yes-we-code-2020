class Character extends Jouabilite {
    protected _death: number;

    constructor(name: string, x: number, color: number) {
        super(name, x, color)
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

    protected displayCharacter(color: number): void {
        LCD1IN8.DrawCircle(this.x, this.y, this.rad, color, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1);
        LCD1IN8.LCD_DisplayWindows(this.x - (this.rad + 1), this.y - (this.rad + 1), this.x + (this.rad + 1), this.y + (this.rad + 1));
    }

    public move(x_vector: number, y_vector: number): void {
        this.x += this.movement(x_vector, y_vector).x_vector;
        this.y += this.movement(x_vector, y_vector).y_vector;

    }
}

