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


}
