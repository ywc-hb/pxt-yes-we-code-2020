LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();
//Master.init()
/*
LCD1IN8.DrawLine(114, 20, 124, 20, 0, DOT_PIXEL.DOT_PIXEL_4, LINE_STYLE.LINE_SOLID)
LCD1IN8.LCD_Display()

*/
let a = new Walls();
let b = new Character(25, 64512, a);
let d = new Character(125, 64512, a);
//let c = new Ball(10, 10, 0, 5, a, b, d, 1, 1);
let e = new Ball(90, 10, 20, 100, a, b, d, 1, 1);