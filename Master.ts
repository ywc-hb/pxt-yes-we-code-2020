class Master {
    protected pattern: Walls;
    protected leftCharacter: Character;
    protected rightCharacter: Character;
    protected ballRight: Ball;
    protected ballLeft: Ball;

    constructor() {
        this.introduction();
        this.menu();
        this.pattern = new Walls();
        let connection = new Connection(1, this);
        this.rightCharacter = new Character(140, 64512, this.pattern);
        this.leftCharacter = new Character(20, 64512, this.pattern);
        //this.ballRight = new Ball(10, 10, 0, 10, this.pattern, this.rightCharacter, this.leftCharacter, 1, 1);
        //basic.pause(100);
        //this.ballRight = new Ball(10, 10, 0, 10, this.pattern, this.rightCharacter, this.leftCharacter, 1, 1);

    }

    private introduction(): void {
        //Do the introduction
    }
    private menu(): void {
        //Do the menu
    }

    public action(action: string) {
        let value_move: number[];
        let x_new_ball: number;
        let y_new_ball: number;
        switch (action.substr(7)) {
            case 'W':
                value_move = [-2, 0];
                y_new_ball = this.rightCharacter.y;
                x_new_ball = this.rightCharacter.x - this.rightCharacter.rad;
                break;
            case 'E':
                value_move = [2, 0];
                y_new_ball = this.rightCharacter.y;
                x_new_ball = this.rightCharacter.x + this.rightCharacter.rad;
                break;
            case 'N':
                value_move = [0, -2];
                y_new_ball = this.rightCharacter.y - this.rightCharacter.rad;
                x_new_ball = this.rightCharacter.x;
                break;
            case 'S':
                value_move = [0, 2];
                y_new_ball = this.rightCharacter.y + this.rightCharacter.rad;
                x_new_ball = this.rightCharacter.x;
                break;
            case 'NE':
                value_move = [2, -2];
                y_new_ball = this.rightCharacter.y - this.rightCharacter.rad;
                x_new_ball = this.rightCharacter.x + this.rightCharacter.rad;
                break;
            case 'NW':
                value_move = [-2, -2];
                y_new_ball = this.rightCharacter.y - this.rightCharacter.rad;
                x_new_ball = this.rightCharacter.x - this.rightCharacter.rad;
                break;
            case 'SE':
                value_move = [2, 2];
                y_new_ball = this.rightCharacter.y + this.rightCharacter.rad;
                x_new_ball = this.rightCharacter.x + this.rightCharacter.rad;
                break;
            case 'SW':
                value_move = [-2, 2];
                y_new_ball = this.rightCharacter.y + this.rightCharacter.rad;
                x_new_ball = this.rightCharacter.x - this.rightCharacter.rad;
                break;
            default:
                value_move = [0, 0];
                break;  
        }

        if (action[0] == 'R') {
            switch (action.substr(2, 6)) {
                case 'move_':
                    this.rightCharacter.move(value_move[0], value_move[1]);
                    break;
                case 'shoot':
                    this.ballRight = new Ball(x_new_ball, y_new_ball, 0, 10, this.pattern, this.rightCharacter, this.leftCharacter, value_move[0], value_move[1]);
                    break;
                case 'charg':
                    this.rightCharacter.recharge();
                    break;
                default:
                    break;
            }
        }
        else if (action[0] == 'L') {
            switch (action.substr(2, 6)) {
                case 'move_':
                    this.rightCharacter.move(value_move[0], value_move[1]);
                    break;
                case 'shoot': 
                    this.ballRight = new Ball(x_new_ball, y_new_ball, 0, 10, this.pattern, this.rightCharacter, this.leftCharacter, value_move[0], value_move[1]);
                    break;
                case 'charg':
                    this.rightCharacter.recharge();
                    break;
                default:
                    break;
            }
        }
    }
}