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

    public action(actionNumber: number) {
        basic.showNumber(actionNumber)
        switch (actionNumber) {
            case 10:
                this.rightCharacter.move(-3, 0);
                break;

            case 11:
                this.rightCharacter.move(3, 0);
                break;

            case 12:
                this.rightCharacter.move(0, -3);
                break;

            case 13:
                this.rightCharacter.move(0, 3);
                break;

            case 20:
                break;

            case 21:
                this.rightCharacter.recharge();
                break;

            default:
                break;
        }
    }
}