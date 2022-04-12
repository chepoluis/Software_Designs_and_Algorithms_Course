export class Comparator {
    public compare: Function;

    constructor(compareFunction?: Function) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    static defaultCompareFunction(a: number | string, b: number | string): number {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    public lessThanOrEqual(a: number | string, b: number | string): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
    * Checks if variable "a" is greater than or equal to "b".
    */
    public greaterThanOrEqual(a: number | string, b: number | string): boolean {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * Checks if variable "a" is less than "b"
     */
    public lessThan(a: number | string, b: number | string): boolean {
        // debugger;
        return this.compare(a, b) < 0; // What does return this.compare ???
    }

    /**
     * Checks if variable "a" is greater than "b"
     */
    public greaterThan(a: number | string, b: number | string): boolean {
        return this.compare(a, b) > 0;
    }

    /**
     * Checks if two variable are equal
     */
    public equal(a: number | string, b: number | string): boolean {
        return this.compare(a, b) === 0;
    }
}