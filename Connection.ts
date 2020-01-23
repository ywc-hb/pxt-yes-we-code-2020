// Ajouter votre code ici
class Connection {
    protected _channel: number;

    constructor(channel: number) {
        this._channel = channel;
        radio.setGroup(this._channel);
        radio.setTransmitPower(255);
    }
}