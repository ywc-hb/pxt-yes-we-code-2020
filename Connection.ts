class Connection {
    protected _master: Master;

    constructor(channel: number) {
        radio.setGroup(channel);
        radio.setTransmitPower(7);
        this.receive();
    }

    protected receive(): void {
        radio.onReceivedString(function (receivedString: string) {
            Master.actions(receivedString);
        })
    }
}
