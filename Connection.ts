// Ajouter le nom de la 99 ici
class Connection {
    protected master: Master;
    public test: number;

    constructor(channel: number, newMaster: Master) {
        radio.setGroup(channel);
        radio.setTransmitPower(7);
        this.master = newMaster;
        this.receive()
    }

    private receive(): void {
        control.inBackground(function () {
            radio.onReceivedString(function (receivedString: string) {
                this.master.action(receivedString);
            })
        })
    }
}