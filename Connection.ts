class Connection {
    protected _master: Master;

    constructor(channel: number, newMaster: Master) {
        radio.setGroup(channel);
        radio.setTransmitPower(7);
        this._master = newMaster;
        //this.receive();
    }

    private receive(): void {
        control.inBackground(function () {
            radio.onReceivedString(function (receivedString: string) {
                this._master.action(receivedString);
            })
        })
    }
}
