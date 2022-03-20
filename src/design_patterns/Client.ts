import { Shipment } from './shipment/Shipment';

export class Client {
    private shipment: Shipment;

    constructor(
        private toAddress: string,
        private fromAddress: string,
        private toZipCode: number,
        private fromZipCode: number,
        private weight: number
    ) {
        this.shipment = new Shipment();
    }

    test() {
        
    }
}