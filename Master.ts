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
    }

    private introduction(): void {
        //Do the introduction
    }
    private menu(): void {
        //Do the menu
    }

    public action(action: string) {
        let value_move: number[];
        switch (action.substr(7)) {
            case 'W':
                value_move = [-2, 0];
                break;
            case 'E':
                value_move = [2, 0];
                break;
            case 'N':
                value_move = [0, -2];
                break;
            case 'S':
                value_move = [0, 2];
                break;
            case 'NE':
                value_move = [2, -2];
                break;
            case 'NW':
                value_move = [-2, -2];
                break;
            case 'SE':
                value_move = [2, 2];
                break;
            case 'SW':
                value_move = [-2, 2];
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