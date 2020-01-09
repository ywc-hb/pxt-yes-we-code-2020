// Code principal ici

LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
//LCD1IN8.DrawCircle(10, 64, 4, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
//LCD1IN8.DrawCircle(16, 64, 2, 0, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.LCD_SetBL(8)



let walls = new Walls()
let test = new Character("Test", 20, 64512)

input.onButtonPressed(Button.A, function () {
    test.move(-1, 1)
})

input.onButtonPressed(Button.B, function () {
    test.move(1, -1)
})

input.onButtonPressed(Button.AB, function () {
    test.move(0, -1)
})

input.onPinPressed(TouchPin.P0, function () {
    test.move(0, 1)
})








