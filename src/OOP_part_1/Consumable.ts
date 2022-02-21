import { Item } from "./Item";

export class Consumable extends Item {
    private _consumed: boolean = false;

    constructor(
        _name: string,
        _value: number,
        _weight: number,
        private _spoiled: boolean
    ) {
        super(_name, _value, _weight);
    }

    public eat(): string {
        if (!this._spoiled) {
            this.consumed = true;
            return `You eat the ${this.name}.`;
        } else {
            this.consumed = true;
            return `You eat the ${this.name}. \nYou feel sick.`
        }
    }

    public use(): string {
        if (!this._consumed && !this._spoiled) {
            this.consumed = true;
            return this.eat();
        } else
            return `There is no nothing left of the ${this.name} to consume.`;
    }

    public isConsumed(): boolean {
        return true;
    }

    set consumed(consumed: boolean) {
        this._consumed = consumed;
    }

    public isSpoiled(): boolean {
        return true;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }
}