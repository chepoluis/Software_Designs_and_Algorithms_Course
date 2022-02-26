import { Item } from './Item';
import { Pages } from './Pages';
export class Magazine extends Item {
    constructor(
        private _title: string,
        pages: Pages
    ) { 
        super(pages);
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    toString(position: number): string {
        return `Magazine: ${ this.title } with number of pages: ${ this._pages.pages.length }, here is page ${ this._pages.pages[position].pageType } #${this.counter} and it's material is ${ this._pages.pages[position].pageMaterial }`;
    }
}
