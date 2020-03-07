// Ajouter votre code ici
function fenetre_menu(text : string){
    displayDialogue(10, 10, text, 0, 0, false, true)
    LCD1IN8.LCD_Display()
    while (true){
        if (input.isGesture(Gesture.Shake) == true){
            LCD1IN8.LCD_Clear();
            basic.pause(100)
            menu();
            break;
        }
    }
}