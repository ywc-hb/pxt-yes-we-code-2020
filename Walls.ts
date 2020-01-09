class Walls {
    protected _number_of_map: number;
    protected _wallsNO: number[][];
    protected _wallsSO: number[][];
    protected _wallsNE: number[][];
    protected _wallsSE: number[][];

    constructor() {
        let choice = Math.randomRange(1, 1)
        if (choice == 1) {
            this._wallsNE = this.patternOne().wallsNE;
            this._wallsNO = this.patternOne().wallsNO;
            this._wallsSE = this.patternOne().wallsSE;
            this._wallsSO = this.patternOne().wallsSO;
        }       
        else if(choice == 2) {
            this._wallsNE = this.patternTwo().wallsNE;
            this._wallsNO = this.patternTwo().wallsNO;
            this._wallsSE = this.patternTwo().wallsSE;
            this._wallsSO = this.patternTwo().wallsSO;
        }

        let walls = this._wallsSO.concat(this._wallsNO).concat(this._wallsNE).concat(this._wallsSE);
        let j = 0;
        while (j < walls.length) {
            LCD1IN8.DrawLine(walls[j][0], walls[j][1], walls[j][2], walls[j][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
            j++
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
        return this._wallsSO;
    }
    get wallsNE(): number[][] {
        return this._wallsNE;
    }
    get wallsSE(): number[][] {
        return this._wallsSE;
    }

    private patternOne(): { wallsNO: number[][], wallsNE: number[][], wallsSE: number[][], wallsSO: number[][] } {
        //Fonction dessinant les murs de la map 1
        //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
        let wallsNO = [[1, 50, 16, 50], [31, 34, 56, 34], [36, 59, 46, 59], [70, 64, 80, 64], [18, 12, 48, 12], [18, 0, 18, 12], [48, 0, 48, 12], [80, 1, 80, 25], [80, 45, 80, 64], [36, 59, 36, 64], [46, 59, 46, 64]];
        let wallsSO = [[1, 78, 16, 78], [31, 94, 56, 94], [36, 69, 46, 69], [70, 64, 80, 64], [18, 116, 48, 116], [18, 116, 18, 128], [48, 116, 48, 128], [80, 64, 80, 85], [80, 103, 80, 128], [36, 64, 36, 69], [46, 64, 46, 69]];
        let wallsNE = [[80, 1, 80, 25], [80, 45, 80, 64], [145, 50, 160, 50], [105, 34, 130, 34], [115, 59, 125, 59], [112, 12, 142, 12], [142, 0, 142, 12], [112, 0, 112, 12], [125, 59, 125, 64], [115, 59, 115, 64], [80, 64, 90, 64]];
        let wallsSE = [[80, 64, 90, 64], [80, 64, 80, 85], [80, 103, 80, 128], [144, 78, 160, 78], [105, 94, 130, 94], [115, 69, 125, 69], [112, 116, 142, 116], [142, 116, 142, 128], [112, 116, 112, 128], [125, 64, 125, 69], [115, 64, 115, 69]];

        return {
            wallsNO: wallsNO,
            wallsNE: wallsNE,
            wallsSO: wallsSO,
            wallsSE: wallsSE
        };
    }

    private patternTwo(): { wallsNO: number[][], wallsNE: number[][], wallsSE: number[][], wallsSO: number[][] } {
        //Fonction dessinant les murs de la map 2
        //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
        let wallsNO = [[60, 0, 60, 10], [1, 50, 11, 50], [70, 54, 80, 54], [60, 0, 60, 10], [55, 60, 55, 64], [20, 33, 38, 33], [11, 50, 11, 64], [70, 54, 70, 64], [60, 10, 80, 10], [55, 64, 70, 64], [38, 15, 38, 33], [35, 63, 35, 64], [80, 27, 80, 38]];
        let wallsSO = [[1, 78, 11, 78], [70, 74, 80, 74], [60, 118, 60, 128], [55, 64, 55, 68], [20, 93, 38, 93], [11, 64, 11, 78], [70, 64, 70, 74], [55, 64, 70, 64], [38, 93, 38, 111], [35, 64, 35, 65], [60, 118, 80, 118], [80, 91, 80, 105]];
        let wallsNE = [[80, 10, 100, 10], [80, 54, 90, 54], [90, 54, 90, 64], [150, 50, 160, 50], [100, 0, 100, 10], [105, 60, 105, 64], [120, 33, 138, 33], [150, 50, 150, 64], [80, 27, 80, 38], [90, 64, 105, 64], [120, 15, 120, 33], [125, 63, 125, 64]];
        let wallsSE = [[80, 74, 90, 74], [90, 64, 90, 74], [150, 78, 160, 78], [100, 118, 100, 128], [105, 64, 105, 68], [120, 93, 138, 93], [150, 64, 150, 78], [80, 118, 100, 118], [80, 91, 80, 105], [90, 64, 105, 64], [120, 93, 120, 111], [125, 64, 125, 65]];

        return {
            wallsNO: wallsNO,
            wallsNE: wallsNE,
            wallsSO: wallsSO,
            wallsSE: wallsSE
        };
    }
} 