// Ajouter le nom de la 99 ici
class Connection {
    constructor(channel: number) {
        radio.setGroup(channel);
        radio.setTransmitPower(7);
        
    }
}