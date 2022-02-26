import { Page } from './Page';
export class Pages {
    
    constructor(
        private _pages: Page[]
    ) { }

    get pages(): Page[] {
        return this._pages;
    }

    set pages(newPage: Page[]) {
        this._pages = [...this._pages, ...newPage];
    }

}
