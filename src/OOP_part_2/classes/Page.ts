export class Page {

    constructor(
        private _pageNumber: number,
        private _pageType: string,
        private _pageMaterial: string
    ) { }

    get pageNumber(): number {
        return this._pageNumber;
    }

    get pageType(): string {
        return this._pageType;
    }

    get pageMaterial(): string {
        return this._pageMaterial;
    }

    toString(): string {
        return `here is page ${ this._pageType } #${ this._pageNumber } and it's material is ${ this._pageMaterial }`;
    }
}