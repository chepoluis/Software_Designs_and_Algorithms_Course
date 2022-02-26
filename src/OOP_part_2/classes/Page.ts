export class Page {

    constructor(
        public _pageNumber: number,
        public _pageType: string,
        public _pageMaterial: string
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

    public toString(): string {
        return `here is page ${ this._pageType } #${ this._pageNumber } and it's material is ${ this._pageMaterial }`;
    }
}