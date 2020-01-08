function patternOne(): {mursNO: number[][], mursNE: number[][], mursSE: number[][], mursSO: number[][]} {
    /* Fonction dessinant les murs de la map 1 */
    //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
    //1ere ligne = horizontal partie gauche, puis vertical partie gauche, puis horizontal partie droite, et verticale partie droite
    let mursNO = [[1, 50, 16, 50], [31, 34, 56, 34], [36, 59, 46, 59], [70, 64, 80, 64], [18, 12, 48, 12], [18, 0, 18, 12], [48, 0, 48, 12], [80, 1, 80, 25], [80, 45, 80, 64], [36, 59, 36, 64], [46, 59, 46, 64]]
    
    let mursSO = [[1, 78, 16, 78], [31, 94, 56, 94], [36, 69, 46, 69], [70, 64, 80, 64], [18, 116, 48, 116], [18, 116, 18, 128], [48, 116, 48, 128], [80, 64, 80, 85], [80, 103, 80, 128], [36, 64, 36, 69], [46, 64, 46, 69]]
    
    let mursNE = [[80, 1, 80, 25], [80, 45, 80, 64], [160, 50, 145, 50], [130, 34, 105, 34], [125, 59, 115, 59], [142, 12, 112, 12], [142, 0, 142, 12], [112, 0, 112, 12], [125, 59, 125, 64], [115, 59, 115, 64], [80, 64, 90, 64]]

    let mursSE = [[80, 64, 90, 64], [80, 64, 80, 85], [80, 103, 80, 128], [160, 78, 144, 78], [130, 94, 105, 94], [125, 69, 115, 69], [142, 116, 112, 116], [142, 116, 142, 128], [112, 116, 112, 128], [125, 64, 125, 69], [115, 64, 115, 69]]

    let murs = mursNO.concat(mursSO).concat(mursNE).concat(mursSE)

    //LCD1IN8.DrawRectangle(0, 0, 160, 129, 0, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)

    let j = 0;
    while (j < murs.length) {
        LCD1IN8.DrawLine(murs[j][0], murs[j][1], murs[j][2], murs[j][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
        j++
    }

    return {
        mursNO: mursNO, 
        mursNE: mursNE, 
        mursSO: mursSO, 
        mursSE: mursSE
    };
}
/*
function patternTwo() {
    //Fonction dessinant les murs de la map 2
    //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
    //1ere ligne = horizontal partie gauche, puis vertical partie gauche, puis horizontal partie droite, et verticale partie droite
    let murs = [[1, 50, 11, 50], [1, 78, 11, 78], [70, 54, 90, 54], [70, 74, 90, 74], [60, 0, 60, 10], [60, 128, 60, 118], [55, 60, 55, 68], [20, 33, 38, 33], [20, 93, 38, 93],
    [11, 50, 11, 78], [70, 54, 70, 74], [90, 54, 90, 74], [60, 10, 100, 10], [70, 64, 55, 64], [38, 33, 38, 15], [38, 93, 38, 111], [31, 63, 31, 65],
    [160, 50, 150, 50], [160, 78, 150, 78], [100, 0, 100, 10], [100, 128, 100, 118], [105, 60, 105, 68], [120, 33, 138, 33], [120, 93, 138, 93],
    [150, 50, 150, 78], [60, 118, 100, 118], [80, 27, 80, 38], [80, 91, 80, 105], [90, 64, 105, 64], [120, 33, 120, 15], [120, 93, 120, 111], [129, 63, 129, 65]]
    LCD1IN8.DrawRectangle(0, 0, 160, 129, 0, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)

    let j = 0;
    while (j < murs.length) {
        LCD1IN8.DrawLine(murs[j][0], murs[j][1], murs[j][2], murs[j][3], 65535, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
        j++
    }

    return {
        mursNO: mursNO,
        mursNE: mursNE,
        mursSO: mursSO,
        mursSE: mursSE
    };
}

function patternThree(): void {
    //Fonction dessinant des murs de la map 3

}
*/
function displayWalls(): void {
    //Fonction qui choisit aléatoirement une map et qui l'affiche

    let pattern_number = Math.randomRange(1, 1); //A modifier en fonction des patterns prets à l'emploi

    switch (pattern_number) {
        case 1:
            patternOne();
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
            patternOne();
            break;
    }

    LCD1IN8.LCD_Display();

}
