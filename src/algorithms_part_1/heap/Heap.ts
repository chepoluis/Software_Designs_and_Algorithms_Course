import { Comparator } from "../utils/Comparator";

export class Heap {
    private heapContainer: number[];
    public compare: Comparator;

    constructor(comparatorFunction?: Function) {
    // constructor() {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly');
        }

        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }

    public getHeapContainer() {
        return this.heapContainer;
    }

    public add(item: any): Heap {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    /**
     * Take the last element (last in array of bottom left in a tree)
     * in the heap container and lift it up until it is in the correct
     * order with respect to it's parent element
     */
    heapifyUp(customStartIndex?: number): void {
        let currentIndex: number = customStartIndex || this.heapContainer.length - 1;

        while(
            this.hasParent(currentIndex) &&
            !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
        ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    private swap(indexOne: number, indexTwo: number) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    private hasParent(childIndex: number): boolean {
        return this.getParentIndex(childIndex) >= 0;
    }

    private getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    private parent(childIndex: number) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    pairIsInCorrectOrder(firstElement: number, secondElement: number): boolean {
        return this.compare.lessThanOrEqual(firstElement, secondElement);
    }
    
    public peek() {
        // debugger;
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0];
    } 
}