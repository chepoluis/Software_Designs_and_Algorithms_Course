import { Item } from './Item';
import { Pages } from './Pages';
export class Comics extends Item {
    constructor(
        private _title: string,
        private _author: string,
        private _artist: string,
        pages: Pages
    ) { 
        super(pages);
    }

    get title() {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor: string) {
        this._author = newAuthor;
    }

    get artist() {
        return this._artist;
    }

    set artist(newArtist: string) {
        this._artist = newArtist;
    }

    toString(position: number): string {
        return `Comics: ${ this._title } by ${ this._author }, the artist is ${ this._artist }, number of pages: ${ this._pages.pages.length }, here is page ${ this._pages.pages[position].pageType } #${this.counter} and it's material is ${ this._pages.pages[position].pageMaterial }`;
    }
}