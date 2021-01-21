class Master {
    static leftCharacter: Character;
    static rightCharacter: Character;
    static ballRight: Ball;
    static ballLeft: Ball;

    static init() {
        let connection = new Connection(1);
        Master.rightCharacter = new Character("left", 140, 64512);
        Master.leftCharacter = new Character("right", 20, 64512);
        //Master.ballLeft = new Ball("left", 10, 10, 0, 0, Master.pattern, Master.rightCharacter, Master.leftCharacter, 1, 1);
    }

    private static move(action: string) {
        //Definition de la direction d'un possible mouvement
        let value_move: number[];
        let x_new_ball: number;
        let y_new_ball: number;
        switch (action.substr(7)) {
            case 'W':
                value_move = [-2, 0];
                y_new_ball = Master.rightCharacter.y;
                x_new_ball = Master.rightCharacter.x - Master.rightCharacter.rad;
                break;
            case 'E':
                value_move = [2, 0];
                y_new_ball = Master.rightCharacter.y;
                x_new_ball = Master.rightCharacter.x + Master.rightCharacter.rad;
                break;
            case 'N':
                value_move = [0, -2];
                y_new_ball = Master.rightCharacter.y - Master.rightCharacter.rad;
                x_new_ball = Master.rightCharacter.x;
                break;
            case 'S':
                value_move = [0, 2];
                y_new_ball = Master.rightCharacter.y + Master.rightCharacter.rad;
                x_new_ball = Master.rightCharacter.x;
                break;
            case 'NE':
                value_move = [2, -2];
                y_new_ball = Master.rightCharacter.y - Master.rightCharacter.rad;
                x_new_ball = Master.rightCharacter.x + Master.rightCharacter.rad;
                break;
            case 'NW':
                value_move = [-2, -2];
                y_new_ball = Master.rightCharacter.y - Master.rightCharacter.rad;
                x_new_ball = Master.rightCharacter.x - Master.rightCharacter.rad;
                break;
            case 'SE':
                value_move = [2, 2];
                y_new_ball = Master.rightCharacter.y + Master.rightCharacter.rad;
                x_new_ball = Master.rightCharacter.x + Master.rightCharacter.rad;
                break;
            case 'SW':
                value_move = [-2, 2];
                y_new_ball = Master.rightCharacter.y + Master.rightCharacter.rad;
                x_new_ball = Master.rightCharacter.x - Master.rightCharacter.rad;
                break;
            default:
                value_move = [0, 0];
                break;  
        }

        switch (action.substr(0, 6)) {
            case 'R_move_':
                Master.rightCharacter.move(value_move[0], value_move[1]);
                break;
            case 'R_shoot':
                basic.showString(action);
                basic.showNumber(value_move[0]);
                if (Master.rightCharacter.remainingBalls != 0) {
                    Master.ballRight.existance = false;
                    Master.ballRight = new Ball("right", x_new_ball, y_new_ball, 0, 10, Master.rightCharacter, Master.leftCharacter, value_move[0], value_move[1]);
                }
                break;
            case 'R_charg':
                Master.rightCharacter.recharge();
                break;
            case 'L_move_':
                Master.leftCharacter.move(value_move[0], value_move[1]);
                break;
            case 'L_shoot': 
                Master.ballLeft = new Ball("left", x_new_ball, y_new_ball, 0, 10, Master.rightCharacter, Master.leftCharacter, value_move[0], value_move[1]);
                break;
            case 'L_charg':
                Master.leftCharacter.recharge();
                break;
            default:
                break;
        }
    }

    private static endGame(action: string) {
        //Do something to finish the game
    }

    private static relive(action: string) {
        switch (action[0]) {
            case 'R':
                Master.rightCharacter.death ++;
                break;
            case 'L':
                Master.leftCharacter.death ++;
                break;
            default:
                basic.showString("Error in 'relive()'");
                break;
        }
    }

    static actions(action: string) {
        switch (action.substr(2, 6)) {
            case "kaput":
                Master.endGame(action); //Et je parle pas du dernier Avengers
                break;
            case "reliv":
                Master.relive(action);
                break;
            default:
                Master.move(action);
        }
    }


    static killedCharacter(who: Character) {
        switch (who.name) {
            case "right":
                radio.sendString("R_dead");
                break;
            case "left":
                radio.sendString("L_dead");
                break;
            default:
                basic.showString("Error in 'killedCharacter()'");
                break;
        }
    }
}