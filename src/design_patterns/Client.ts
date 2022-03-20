import { Shipment } from './shipment/Shipment';

export class Client {
    private shipment: Shipment;

    constructor(
        private shipmentId: number,
        private fromAddress: string,
        private toAddress: string,
        private toZipCode: number,
        private fromZipCode: number,
        private weight: number
    ) {
        this.shipment = new Shipment(shipmentId, toAddress, fromAddress, toZipCode, fromZipCode, weight);
    }

    ship() {
        return this.shipment.ship();
    }
}