import { Pages } from "./Pages";
import { Item } from './Item';
export class Book extends Item {

    constructor(
        private _title: string,
        private _author: string,
        pages: Pages
    ) {
        super(pages);
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

    toString(position: number): string {
        return `Book: ${ this._title } by ${ this._author } with number of pages: ${ this._pages.pages.length }, here is page ${ this._pages.pages[position].pageType } #${this.counter} and it's material is ${ this._pages.pages[position].pageMaterial }`;
    }
}