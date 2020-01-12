LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

let walls = new Walls();
let test = new Character("Test", 20, 64512, walls);
let ball = new Ball("A", 30, 64, 0, 10, walls, test);

input.onButtonPressed(Button.A, function () {
    test.move(-1, 0);
})
input.onButtonPressed(Button.B, function () {
    test.move(1, 0);
})
input.onButtonPressed(Button.AB, function () {
    test.move(0, -1);
})
input.onPinPressed(TouchPin.P0, function () {
    test.move(0, 1);
})


