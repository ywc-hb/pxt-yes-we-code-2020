LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();


LCD1IN8.DisString(49, 30, "Commencer", 0);
LCD1IN8.DisString(56, 60, "Records", 0);
LCD1IN8.DisString(56, 90, "Options", 0);

LCD1IN8.DrawRectangle(47, 28, 114, 42, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
LCD1IN8.LCD_Display();

let selection = 1;
while (true) {
    if (input.isGesture(Gesture.Shake) == true) {
        if (selection == 1) {
            LCD1IN8.LCD_Clear();
            Master.init();
            break;
        }
    }
    else if (input.buttonIsPressed(Button.A) == true) {
        switch (selection) {
            case 1:
                selection = 3;
                LCD1IN8.DrawRectangle(47, 28, 114, 42, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(46, 27, 114, 42);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                basic.pause(300);
                break;

            case 2:
                selection = 1;
                LCD1IN8.DrawRectangle(47, 28, 114, 42, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 58, 107, 72, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(46, 27, 114, 42);
                LCD1IN8.LCD_DisplayWindows(52, 57, 107, 72);
                basic.pause(300);
                break;

            case 3:
                selection = 2;
                LCD1IN8.DrawRectangle(53, 58, 107, 72, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(52, 57, 107, 72);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                basic.pause(300);
                break;
        }
    }
    if (input.buttonIsPressed(Button.B) == true) {
        switch (selection) {
            case 1:
                selection = 2;
                LCD1IN8.DrawRectangle(47, 28, 114, 42, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 58, 107, 72, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(52, 57, 107, 72);
                LCD1IN8.LCD_DisplayWindows(46, 27, 114, 42);
                basic.pause(300);
                break;

            case 2:
                selection = 3;
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 58, 107, 72, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                LCD1IN8.LCD_DisplayWindows(52, 57, 107, 72);
                basic.pause(300);
                break;

            case 3:
                selection = 1;
                LCD1IN8.DrawRectangle(47, 28, 114, 42, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(46, 27, 114, 42);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                basic.pause(300);
                break;
        }
    }
}

