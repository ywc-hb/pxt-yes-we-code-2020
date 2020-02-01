LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

//let master = new Master();
let wall = new Walls()
let enemy = new Character(65, 64512, wall)
let ally = new Character(120, 64512, wall)
let ball = new Ball(10, 10, 0, 0, wall, enemy, ally, 1, 1)
