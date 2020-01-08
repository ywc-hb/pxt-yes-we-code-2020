/*LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

let pos = [80, 64]
let vec = [10, -10]
let rad = 5
let murs = [[95, 30, 95, 90], [65, 49, 95, 49]]
LCD1IN8.DrawLine(murs[0][0], murs[0][1], murs[0][2], murs[0][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID)
LCD1IN8.DrawLine(murs[1][0], murs[1][1], murs[1][2], murs[1][3], 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID)


LCD1IN8.DrawCircle(pos[0], pos[1], rad, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
pos[0] += vec[0]
pos[1] += vec[1]

LCD1IN8.DrawCircle(pos[0], pos[1], rad, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)

*/
/* Nommage des positions : 
        ---B---
      /         \
     /           \
    |             |
    E      A      C
    |             |
     \           /
      \         /
        ---D---

*/
/*
for(let i = 0; i < murs.length; i++) {
    //Test de la position D
    if (pos[0] >= murs[i][0] && pos[0] <= murs[i][2] && pos[1] + rad >= murs[i][1] && pos[1] + rad <= murs[i][3]) {
        basic.showNumber(0)
        vec[1] = -vec[1]
    }

    //Test de la position B
    else if (pos[0] >= murs[i][0] && pos[0] <= murs[i][2] && pos[1] - rad >= murs[i][1] && pos[1] - rad <= murs[i][3]) {
        basic.showNumber(1)
        vec[1] = -vec[1]
    }

    //Test de la position C
    if (pos[0] + rad >= murs[i][0] && pos[0] + rad <= murs[i][2] && pos[1] >= murs[i][1] && pos[1] <= murs[i][3]) {
        basic.showNumber(2)
        vec[0] = -vec[0]
    }

    //Test de la position E
    else if (pos[0] - rad >= murs[i][0] && pos[0] - rad <= murs[i][2] && pos[1] >= murs[i][1] && pos[1] <= murs[i][3]) {
        basic.showNumber(3)
        vec[0] = -vec[0]
    }
}



pos[0] += vec[0]
pos[1] += vec[1]

LCD1IN8.DrawCircle(pos[0], pos[1], rad, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)

LCD1IN8.LCD_Display()*/
