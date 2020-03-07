class Walls {
    public wallNW: number[][];
    public wallSW: number[][];
    public wallNE: number[][];
    public wallSE: number[][];
    private walls: number[][];

    constructor() {
        this.map();
        this.walls = this.wallSW.concat(this.wallNW).concat(this.wallNE).concat(this.wallSE);
        let j = 0;
        while (j < this.walls.length) {
            LCD1IN8.DrawLine(this.walls[j][0], this.walls[j][1], this.walls[j][2], this.walls[j][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
            j++;
        }
        LCD1IN8.LCD_Display();
    }

    private map(): void {
        //Fonction dessinant les murs de la map 1
        //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
        this.wallNW = [[1, 1, 80, 1], [1, 1, 1, 64], [1, 50, 16, 50], [31, 34, 56, 34], [36, 59, 46, 59], [70, 64, 80, 64], [18, 12, 48, 12], [18, 0, 18, 12], [48, 0, 48, 12], [80, 1, 80, 25], [80, 45, 80, 64], [36, 59, 36, 64], [46, 59, 46, 64]];
        this.wallSW = [[1, 128, 80, 128], [1, 64, 1, 128], [1, 78, 16, 78], [31, 94, 56, 94], [36, 69, 46, 69], [70, 64, 80, 64], [18, 116, 48, 116], [18, 116, 18, 128], [48, 116, 48, 128], [80, 64, 80, 85], [80, 103, 80, 128], [36, 64, 36, 69], [46, 64, 46, 69]];
        this.wallNE = [[80, 1, 160, 1], [160, 1, 160, 64], [80, 1, 80, 25], [80, 45, 80, 64], [145, 50, 160, 50], [105, 34, 130, 34], [115, 59, 125, 59], [112, 12, 142, 12], [142, 0, 142, 12], [112, 0, 112, 12], [125, 59, 125, 64], [115, 59, 115, 64], [80, 64, 90, 64]];
        this.wallSE = [[80, 128, 160, 128], [160, 64, 160, 128], [80, 64, 90, 64], [80, 64, 80, 85], [80, 103, 80, 128], [144, 78, 160, 78], [105, 94, 130, 94], [115, 69, 125, 69], [112, 116, 142, 116], [142, 116, 142, 128], [112, 116, 112, 128], [125, 64, 125, 69], [115, 64, 115, 69]];
    }
}