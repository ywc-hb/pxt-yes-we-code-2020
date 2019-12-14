function patternOne() :void {
    /* Fonction dessinant les murs de la map 1 */
    //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
    //1ere ligne = horizontal partie gauche, puis vertical partie gauche, puis horizontal partie droite, et verticale partie droite
    let murs = [[1, 50, 16, 50], [1, 78, 16, 78], [31, 34, 56, 34], [31, 94, 56, 94], [36, 59, 46, 59], [36, 69, 46, 69], [70, 64, 90, 64], [18, 12, 48, 12], [18, 116, 48, 116], 
    [18, 0, 18, 12], [48, 0, 48, 12], [18, 116, 18, 128], [48, 116, 48, 128], [80, 1, 80, 25], [80, 45, 80, 85], [80, 103, 80, 128], [36, 59, 36, 69], [46, 59, 46, 69], 
    [160, 50, 145, 50], [160, 78, 144, 78], [130, 34, 105, 34], [130, 94, 105, 94], [125, 59, 115, 59], [125, 69, 115, 69], [142, 12, 112, 12], [142, 116, 112, 116], 
    [142, 0, 142, 12], [112, 0, 112, 12], [142, 116, 142, 128], [112, 116, 112, 128], [125, 59, 125, 69], [115, 59, 115, 69]]
    let j = 0;
    while (j < murs.length) {
        LCD1IN8.DrawLine(murs[j][0], murs[j][1], murs[j][2], murs[j][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
        j ++
    }
}

function patternTwo() :void {
    /* Fonction dessinant les murs de la map 2 */

}

function patternThree() :void {
    /* Fonction dessinant des murs de la map 3 */

}

function displayWalls() :void {
    /* Fonction qui choisit aléatoirement une map et qui l'affiche */

    //let pattern_number = Math.randomRange(1, 3);
/*
    switch(pattern_number) {
        case 1:
            patternOne();
            break;
        
        case 2:
            patternTwo();
            break;
        
        case 3:
            patternThree();
            break;
        
        default:
            patternOne();
            break;
    }
*/
    patternOne();
    LCD1IN8.LCD_Display();
}
