class Master {
    protected action: number;
    protected _pattern: Walls;
    protected _enemy: Character;
    protected _ally: Character;
    protected _ball_enemy: Ball;
    protected _ball_ally: Ball;

    constructor() {
        this.introduction();
        this.menu();
        this._pattern = new Walls();
    }

    private introduction(): void {
        //Do the introduction
    }
    private menu(): void {
        //Do the menu
    }
}