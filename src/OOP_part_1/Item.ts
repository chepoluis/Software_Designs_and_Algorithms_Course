import { Comparable } from './interfaces/Comparable';
import { Inventory } from './Inventory';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static numberOfItems: number = 0;
    private _id: number;
    private _value: number;
    private _name: string;
    private _weight: number;

    constructor(
        name: string,
        value: number,
        weight: number
    ) {
        this._id = id++;
        this._value = value;
        this._name = name;
        this._weight = weight;

        Item.numberOfItems++;
        
        Inventory.callInventory().addItem(this);
    }

    public use(): void {
        
    }

    public compareTo(other: Item): number {

        if (this._value === other._value)
            return this._name.localeCompare(other._name); // TO DO: Improve
        else if (this._value > other._value)
            return 1;
        
        return -1;
    }

    public toString(): string {
        return `${this._name} - Value: ${this._value}, Weight: ${this._weight.toFixed(2)}`;
    }

    get id(): number {
        return this._id
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name;
    }

    get weight(): number {
        return Number(this._weight.toFixed(2));
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    static reset(): void {
        id = 0;
    }
}
