enum direction {
    /* Enum des différents types de rebonds possibles
     */
    Horizontal, // Rebond horizontal
    Vertical, // Rebond vertical
    None // Pas de rebond
}

let wallNW: number[][];
let wallSW: number[][];
let wallNE: number[][];
let wallSE: number[][];

function displayMap() : void {
    // Fonction affichant les murs en les dessinant
    map();
    let walls = wallSW.concat(wallNW).concat(wallNE).concat(wallSE);
    let j = 0;
    while (j < walls.length) {
        LCD1IN8.DrawLine(walls[j][0], walls[j][1], walls[j][2], walls[j][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID);
        j++;
    }
    LCD1IN8.LCD_Display();
}

function map(): void {
    //Fonction dessinant les murs de la map 1
    //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
    wallNW = [[1, 1, 80, 1], [1, 1, 1, 64], [1, 50, 16, 50], [31, 34, 56, 34], [36, 59, 46, 59], [70, 64, 80, 64], [18, 12, 48, 12], [18, 0, 18, 12], [48, 0, 48, 12], [80, 1, 80, 25], [80, 45, 80, 64], [36, 59, 36, 64], [46, 59, 46, 64]];
    wallSW = [[1, 128, 80, 128], [1, 64, 1, 128], [1, 78, 16, 78], [31, 94, 56, 94], [36, 69, 46, 69], [70, 64, 80, 64], [18, 116, 48, 116], [18, 116, 18, 128], [48, 116, 48, 128], [80, 64, 80, 85], [80, 103, 80, 128], [36, 64, 36, 69], [46, 64, 46, 69]];
    wallNE = [[80, 1, 160, 1], [160, 1, 160, 64], [80, 1, 80, 25], [80, 45, 80, 64], [145, 50, 160, 50], [105, 34, 130, 34], [115, 59, 125, 59], [112, 12, 142, 12], [142, 0, 142, 12], [112, 0, 112, 12], [125, 59, 125, 64], [115, 59, 115, 64], [80, 64, 90, 64]];
    wallSE = [[80, 128, 160, 128], [160, 64, 160, 128], [80, 64, 90, 64], [80, 64, 80, 85], [80, 103, 80, 128], [144, 78, 160, 78], [105, 94, 130, 94], [115, 69, 125, 69], [112, 116, 142, 116], [142, 116, 142, 128], [112, 116, 112, 128], [125, 64, 125, 69], [115, 64, 115, 69]];
}

function collision(x : number, y : number, rad : number) : direction {
    // x : position x de l'objet
    // y : position y de l'objet
    // rad : rayon de l'objet
    // Fonction détectant s'il y a une collision entre les murs et ce qui est passé en paramètre
    // Renvoie un booleen ainsi que l'orientation du mur touché
    let murs : number[][]
    if (x <= 80 && y <= 64) {
        murs = wallNW;
    }
    else if (x <= 80 && y >= 64) {
        murs = wallSW;
    }
    else if (x >= 80 && y <= 64) {
        murs = wallNE;
    }
    else {
        murs = wallSE;
    }
    for(let i = 0; i < murs.length; i++) { // Définition du point sur le plus proche sur le murs en cours
        let closest : number[] = [-1, -1];
    
        if(murs[i][0] == murs[i][2]) { // Teste si le mur vertical
            if(y >= murs[i][1] && y <= murs[i][3]) { // Le centre de l'objet est dans l'axe du mur
                closest[0] = murs[i][0];
                closest[1] = y;
            }
            else if(y < murs[i][1]) { // Le centre de l'objet est au dessus du mur
                closest[0] = murs[i][0];
                closest[1] = murs[i][1];
            }
            else if(y > murs[i][3]) { // Le centre de l'objet est au dessous du mur
                closest[0] = murs[i][0];
                closest[1] = murs[i][3];
			}
		}
        else { // Sinon le murs est horizontal
            if(x >= murs[i][0] && x <= murs[i][2]) { // Le centre de l'objet est dans l'axe du mur
                closest[0] = x;
                closest[1] = murs[i][1];
            }
            else if(x < murs[i][0]) { // Le centre de l'objet est à gauche du mur
                closest[0] = murs[i][0];
                closest[1] = murs[i][1];
            }
            else if(x > murs[i][2]) { // Le centre de l'objet est à droite du mur
                closest[0] = murs[i][2];
                closest[1] = murs[i][1];
            }
		}
        if (Math.sqrt(Math.pow(closest[0] - x, 2) + Math.pow(closest[1] - y, 2)) <= rad) { // Défini le point le plus proche
            if(murs[i][0] == murs[i][2]) { // Le mur est horizontal
		    return direction.Horizontal;
		    }
            else { // Le mur est vertical
			    return direction.Vertical;
            }
        }		
	}
    return direction.None;
}

/*private map(): void {
    //Fonction dessinant les murs de la map 2
    //Coordonnées des murs au format [[x_start, y_start, x_end, y_end], ...]
    this.wallNW = [[60, 0, 60, 10], [1, 50, 11, 50], [70, 54, 80, 54], [60, 0, 60, 10], [55, 60, 55, 64], [20, 33, 38, 33], [11, 50, 11, 64], [70, 54, 70, 64], [60, 10, 80, 10], [55, 64, 70, 64], [38, 15, 38, 33], [35, 63, 35, 64], [80, 27, 80, 38]];
    this.wallSW = [[1, 78, 11, 78], [70, 74, 80, 74], [60, 118, 60, 128], [55, 64, 55, 68], [20, 93, 38, 93], [11, 64, 11, 78], [70, 64, 70, 74], [55, 64, 70, 64], [38, 93, 38, 111], [35, 64, 35, 65], [60, 118, 80, 118], [80, 91, 80, 105]];
    this.wallNE = [[80, 10, 100, 10], [80, 54, 90, 54], [90, 54, 90, 64], [150, 50, 160, 50], [100, 0, 100, 10], [105, 60, 105, 64], [120, 33, 138, 33], [150, 50, 150, 64], [80, 27, 80, 38], [90, 64, 105, 64], [120, 15, 120, 33], [125, 63, 125, 64]];
    this.wallSE = [[80, 74, 90, 74], [90, 64, 90, 74], [150, 78, 160, 78], [100, 118, 100, 128], [105, 64, 105, 68], [120, 93, 138, 93], [150, 64, 150, 78], [80, 118, 100, 118], [80, 91, 80, 105], [90, 64, 105, 64], [120, 93, 120, 111], [125, 64, 125, 65]];
}*/