function patternOne() :void {
    /* Fonction dessinant les murs de la map 1 */
    let murs = [[0, 30, 15, 30]] //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]

    for(let i = 0; i < murs.length ; i++) {
        
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

    let pattern_number = Math.randomRange(1, 3);
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
