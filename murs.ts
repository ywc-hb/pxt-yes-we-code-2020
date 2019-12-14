// Ajouter votre code ici
function randomWalls() {
    let x_start = Math.randomRange(0, 165)
    let x_end = x_start + Math.randomRange(25, 50)
    let y = Math.randomRange(1, 120)
    LCD1IN8.DrawLine(x_start, y, x_end, y, 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID)
    LCD1IN8.LCD_Display()
}
