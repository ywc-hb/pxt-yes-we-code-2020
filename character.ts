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

    //------------------- Setters and getters ----------------------

    get name(): string {
        return this._name;
    }
    
    get death(): number {
        return this._death;
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
        if(x_new <= 0 || x_new > 160) {
            basic.showIcon(IconNames.Angry);
            basic.pause(100);
            basic.showNumber(200);
        }

        else {
            this._x = x_new;
        }
    }

    set y(y_new: number) {
        if (y_new <= 0 || y_new > 128) {
            basic.showIcon(IconNames.Angry);
            basic.pause(100);
            basic.showNumber(200);
        }

        else {
            this._y = y_new;
        }
    }

    set death(add: number) {
        this._death += add;
    }

    //------------------- End of setters and getters ----------------------

    displayCharacter() {
        LCD1IN8.DrawCircle(this.x, this.y, 3, this.color, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1);
        LCD1IN8.LCD_DisplayWindows(this.x - 4, this.y - 4, this.x + 4, this.y + 4);
    }

    move(x_vector: number, y_vector: number) {
        this._x += x_vector
        this._y += y_vector
        this.displayCharacter()
    }
} 
