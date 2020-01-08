class Character {
    protected _name: string;
    protected _death: number;
    protected _x: number;
    protected _y: number;
    protected _color: number;
    

    constructor(name: string, x: number, color: number) {
        this._name = name;
        this._death = 0;
        this._x = x;
        this._y = 64;
        this._color = color;
    }

    displayCharacter() {
        LCD1IN8.DrawCircle(this._x, this._y, 3, this._color, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1);
        LCD1IN8.LCD_DisplayWindows(this._x - 4, this._y - 4, this._x + 4, this._y + 4);
    }

    move(x_vector: number, y_vector: number) {
        this._x += x_vector
        this._y += y_vector
        this.displayCharacter()
    }
} 
