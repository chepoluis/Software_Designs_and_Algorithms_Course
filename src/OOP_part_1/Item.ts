import { Comparable } from './Comparable';

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
    }

    public use(): void {
        
    }

    public compareTo(other: Item): number {
        console.log('this._name ', this._name)
        console.log('other._name ', other._name)

        return 1;
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
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    static reset(): void {
        id = 0;
    }
}
