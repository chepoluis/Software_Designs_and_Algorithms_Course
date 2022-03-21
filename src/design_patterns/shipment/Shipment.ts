import { Shipper } from '../shipper/Shipper';
let shipmentId = 0;
export class Shipment {
    private shipper: Shipper;

    constructor(
        private _shipmentId: number,
        private _toAddress: string,
        private _fromAddress: string,
        private _toZipCode: number,
        private _fromZipCode: number,
        private _weight: number
    ) {
        this.shipper = new Shipper(_fromZipCode);

        if (this._shipmentId === 0)
            this._shipmentId = ++shipmentId;

    }

    public getShipmentID() {
        return this._shipmentId;
    }

    public ship(): string {
        return `
            Shipment with the ID ${this.getShipmentID()} will be picked up from ${this.fromZipCode} ${this.fromAddress}, and shipped to ${this.toZipCode} ${this.toAddress}
            Cost = ${this.shipper.getCost()}
            *MARK FRAGILE*
            *MARK DO NOT LEAVE IF ADDRESS NOT AT HOME*
            *MARK RETURN RECEIPT REQUESTED*
        `;
    }

    public getCost(): number {
        return this.weight * this.shipper.getCost();
    }

    /**
     * get and set - toAddress
     */
    get toAddress() {
        return this._toAddress;
    }

    set toAddress(newAddress: string) {
        this._toAddress = newAddress;
    }

    /**
     * get and set - fromAddress
     */
    get fromAddress() {
        return this._fromAddress;
    }

    set fromAddress(newAddress: string) {
        this._fromAddress = newAddress;
    }

    /**
     * get and set - toZipCode
     */
    get toZipCode() {
        return this._toZipCode;
    }

    set toZipCode(newZipCode: number) {
        this._toZipCode = newZipCode;
    }

    /**
     * get and set - fromZipCode
     */
    get fromZipCode() {
        return this._fromZipCode;
    }

    set fromZipCode(newZipCode: number) {
        this._fromZipCode = newZipCode;
    }

    /**
     * get - weight
     */
    get weight() {
        return this._weight;
    }
}