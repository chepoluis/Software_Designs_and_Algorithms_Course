import { Pages } from "./Pages";
export class Book implements Iterable<any>{
    private done: boolean = false;
    private counter: number = 0;

    constructor(
        private _title: string,
        private _author: string,
        private _pages: Pages
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
                    value: this.customToString(this.counter++)
                }
            }
        }
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    public customToString(position: number): string {
        return `Book: ${ this._title } by ${ this._author } with number of pages: ${ this._pages.pages.length }, here is page with text #${this.counter} and it's material is ${ this._pages.pages[position].pageMaterial }`;
    }

    public toString(): string {
        return `Book: ${ this._title } by ${ this._author } with number of pages: ${ this._pages.pages.length }`;
    }
}