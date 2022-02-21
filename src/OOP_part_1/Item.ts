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
        this._id = id;
        this._value = value;
        this._name = name;
        this._weight = weight;
    }
        
    get id(): number {
        return this._id
    }

    get value(): number {
        return this._value;
    }

    get name(): string {
        return this._name
    }

    get weight(): number {
        return this._weight;
    }

    public compareTo(other: Item): number {
        // your code goes here
        return 1;
    }
}
