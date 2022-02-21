import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    constructor(
        private numberOfSlices: number,
        private slicesEaten: number,
        spoiled: boolean
    ) {
        super('Pizza', 2, 4, spoiled);
    }

    public eat(): string {

        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.consumed = true;
            }

            return 'You eat a slice of pizza. :D'
        } else {
            return '';
        }
        
    }
}