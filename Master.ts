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
        basic.showString(action)

        if (action[0] == 'R') {
            switch (action) {
                case 'R_moveLeft':
                    this.rightCharacter.move(-3, 0);
                    break;

                case 'R_moveRight':
                    this.rightCharacter.move(3, 0);
                    break;

                case 'R_moveUp':
                    this.rightCharacter.move(0, -3);
                    break;

                case 'R_moveDown':
                    this.rightCharacter.move(0, 3);
                    break;

                case 'R_shoot':
                    break;

                case 'R_recharge':
                    this.rightCharacter.recharge();
                    break;

                default:
                    break;
            }
        }

        else if (action[0] == 'L') {
            switch (action) {
                case 'L_moveLeft':
                    this.leftCharacter.move(-3, 0);
                    break;

                case 'L_moveRight':
                    this.leftCharacter.move(3, 0);
                    break;

                case 'L_moveUp':
                    this.leftCharacter.move(0, -3);
                    break;

                case 'L_moveDown':
                    this.leftCharacter.move(0, 3);
                    break;

                case 'L_shoot':
                    break;

                case 'L_recharge':
                    this.leftCharacter.recharge();
                    break;

                default:
                    break;
            }
        }
    }
}