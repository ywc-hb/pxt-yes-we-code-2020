class Walls {
    protected _number_of_map: number;
    protected _wallsNO: number[][];
    protected _wallsSO: number[][];
    protected _wallsNE: number[][];
    protected _wallsSE: number[][];

    constructor() {
        switch (Math.randomRange(1, 1)) {
            case 1:
                this._wallsNE = this.patternOne().wallsNE;
                this._wallsNO = this.patternOne().wallsNO;
                this._wallsSE = this.patternOne().wallsSE;
                this._wallsSO = this.patternOne().wallsSO;
                break;

            /*
                    case 2:
                        patternTwo();
                        break;
            
                    case 3:
                        patternThree();
                        break;
            */
            
            default:
                this._wallsNE = this.patternOne().wallsNE;
                this._wallsNO = this.patternOne().wallsNO;
                this._wallsSE = this.patternOne().wallsSE;
                this._wallsSO = this.patternOne().wallsSO;

                break;
        }

        LCD1IN8.LCD_Display();
    }

    //----------- Getter ----------
    get number_of_map(): number {
        return this._number_of_map;
    }

    get wallsNO(): number[][] {
        return this._wallsNO;
    }

    get wallsSO(): number[][] {
        return this._wallsNO;
    }

    get wallsNE(): number[][] {
        return this._wallsNO;
    }

    get wallsSE(): number[][] {
        return this._wallsNO;
    }

    private patternOne(): { wallsNO: number[][], wallsNE: number[][], wallsSE: number[][], wallsSO: number[][] } {
        /* Fonction dessinant les murs de la map 1 */
        //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
        //1ere ligne = horizontal partie gauche, puis vertical partie gauche, puis horizontal partie droite, et verticale partie droite
        let wallsNO = [[1, 50, 16, 50], [31, 34, 56, 34], [36, 59, 46, 59], [70, 64, 80, 64], [18, 12, 48, 12], [18, 0, 18, 12], [48, 0, 48, 12], [80, 1, 80, 25], [80, 45, 80, 64], [36, 59, 36, 64], [46, 59, 46, 64]]

        let wallsSO = [[1, 78, 16, 78], [31, 94, 56, 94], [36, 69, 46, 69], [70, 64, 80, 64], [18, 116, 48, 116], [18, 116, 18, 128], [48, 116, 48, 128], [80, 64, 80, 85], [80, 103, 80, 128], [36, 64, 36, 69], [46, 64, 46, 69]]

        let wallsNE = [[80, 1, 80, 25], [80, 45, 80, 64], [160, 50, 145, 50], [130, 34, 105, 34], [125, 59, 115, 59], [142, 12, 112, 12], [142, 0, 142, 12], [112, 0, 112, 12], [125, 59, 125, 64], [115, 59, 115, 64], [80, 64, 90, 64]]

        let wallsSE = [[80, 64, 90, 64], [80, 64, 80, 85], [80, 103, 80, 128], [160, 78, 144, 78], [130, 94, 105, 94], [125, 69, 115, 69], [142, 116, 112, 116], [142, 116, 142, 128], [112, 116, 112, 128], [125, 64, 125, 69], [115, 64, 115, 69]]

        let walls = wallsNO.concat(wallsSO).concat(wallsNE).concat(wallsSE)

        //LCD1IN8.DrawRectangle(0, 0, 160, 129, 0, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)

        let j = 0;
        while (j < walls.length) {
            LCD1IN8.DrawLine(walls[j][0], walls[j][1], walls[j][2], walls[j][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
            j++
        }

        return {
            wallsNO: wallsNO,
            wallsNE: wallsNE,
            wallsSO: wallsSO,
            wallsSE: wallsSE
        };
    }
    
} 