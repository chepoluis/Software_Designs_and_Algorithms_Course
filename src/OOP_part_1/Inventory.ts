import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
    static instance: Inventory;
    private _items: Item[] = [];

    private constructor() { }

    static callInventory(): Inventory {
        if ( !Inventory.instance ) {
            Inventory.instance = new Inventory();
        }

        return Inventory.instance;
    }

    public addItem(item: Item): void {
        this._items = [...this._items, item];

        console.log(this._items)
    }
    
    public sort(comparator?: ItemComparator): void {
        this._items.sort((a, b) => a.value - b.value);
    }
    
    public toString(): string {
        return this._items.join(', ');
    }
    
}