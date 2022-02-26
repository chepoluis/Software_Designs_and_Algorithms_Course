import { Pages } from './Pages';

export abstract class Item implements Iterable<any> {
    public counter: number = 0;

    constructor(
        public _pages: Pages
    ) { }
    
    [Symbol.iterator]() {
        this.counter = 0;

        return {
            next: () => {
                if (this.counter === this._pages.pages.length) {
                    return {
                        done: true,
                        value: undefined
                    }
                }
                
                return {
                    done: false,
                    value: this.toString(this.counter++)
                }
            }
        }
    }

    abstract toString(position: number): string;
}