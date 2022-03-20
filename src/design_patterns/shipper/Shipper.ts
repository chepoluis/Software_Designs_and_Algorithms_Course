import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from './ChicagoSprintShipper';
import { PacificParcelShipper } from "./PacificParcelShipper";

export class Shipper {
    private _cost: number = 0;

    constructor(private _fromZipCode: number) {
        const firstNumberZipCode = this._fromZipCode.toString()[0];

        switch (firstNumberZipCode) {
            case '1':
            case '2':
            case '3':
                this._cost = AirEastShipper.cost;
                break;
            
            case '4':
            case '5':
            case '6':
                this._cost = ChicagoSprintShipper.cost;
                break;

            case '7':
            case '8':
            case '9':
                this._cost = PacificParcelShipper.cost;
                break;
            default:
                this._cost = AirEastShipper.cost;
                break;
        }
    }

    getCost(): number {
        return this._cost;
    }
}