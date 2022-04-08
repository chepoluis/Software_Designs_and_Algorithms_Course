import { Heap } from './Heap';
export class MinHeap extends Heap {

    pairIsInCorrectOrder(firstElement: number, secondElement: number): boolean {
        return this.compare.lessThanOrEqual(firstElement, secondElement);
    }
}