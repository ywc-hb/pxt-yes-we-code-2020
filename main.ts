LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

// Le t-shirt envoie "R_array_N" ou "R_array_S" et "R_choix" lors du choix (lol mdr xptdr c lojic wsh) (et pour le signal venant du t-shirt de gauche c'est 'L' à la place de 'R')
// Le t-shirt passe en mode "jeu" quand il recoit "start_game"
function menu(){
displayDialogue(52, 20, "LABTOUCH", 0, 0, false, true)
LCD1IN8.DisString(49, 50, "Commencer", 0);
LCD1IN8.DisString(56, 70, "Records", 0);
LCD1IN8.DisString(56, 90, "Options", 0);

LCD1IN8.DrawRectangle(47, 48, 114, 62, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
LCD1IN8.LCD_Display();

let selection = 1;
while (true) {
    if (input.isGesture(Gesture.Shake) == true) {
        if (selection == 1) {
            LCD1IN8.LCD_Clear();
            Master.init();
            break;
        }
        else if (selection == 2) {
            LCD1IN8.LCD_Clear();
            fenetre_menu("Liste des records :");
            break;
        }
        else {
            LCD1IN8.LCD_Clear();
            fenetre_menu("Options :");
            break;
        }
    }
    else if (input.buttonIsPressed(Button.A) == true) {
        switch (selection) {
            case 1:
                selection = 3;
                LCD1IN8.DrawRectangle(47, 48, 114, 62, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(46, 47, 114, 62);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                basic.pause(300);
                break;

            case 2:
                selection = 1;
                LCD1IN8.DrawRectangle(47, 48, 114, 62, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 68, 107, 82, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(46, 47, 114, 62);
                LCD1IN8.LCD_DisplayWindows(52, 67, 107, 82);
                basic.pause(300);
                break;

            case 3:
                selection = 2;
                LCD1IN8.DrawRectangle(53, 68, 107, 82, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(52, 67, 107, 82);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                basic.pause(300);
                break;
        }
    }
    if (input.buttonIsPressed(Button.B) == true) {
        switch (selection) {
            case 1:
                selection = 2;
                LCD1IN8.DrawRectangle(47, 48, 114, 62, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 68, 107, 82, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(52, 67, 107, 82);
                LCD1IN8.LCD_DisplayWindows(46, 47, 114, 62);
                basic.pause(300);
                break;

            case 2:
                selection = 3;
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 68, 107, 82, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                LCD1IN8.LCD_DisplayWindows(52, 67, 107, 82);
                basic.pause(300);
                break;

            case 3:
                selection = 1;
                LCD1IN8.DrawRectangle(47, 48, 114, 62, 0, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.DrawRectangle(53, 88, 107, 103, 65535, DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
                LCD1IN8.LCD_DisplayWindows(46, 47, 114, 62);
                LCD1IN8.LCD_DisplayWindows(52, 87, 107, 103);
                basic.pause(300);
                break;
        }
    }
}
}
menu();