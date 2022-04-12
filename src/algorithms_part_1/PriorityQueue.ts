import { MinHeap } from "./heap/MinHeap";
import { Comparator } from "./utils/Comparator";
// interface Iitem {
//     priority: number;
//     randomNumber: number
// }


/**
 * HACER TESTS
 */

export default class PriorityQueue extends MinHeap {
    private priorities: Map<any, any>; 

    constructor() {
        // debugger;
        super();

        this.priorities = new Map();

        this.compare = new Comparator(this.comparePriority.bind(this));
    }

    public add(item: any, priority: number = 0): PriorityQueue {
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }

    private comparePriority(a: number, b: number): number {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0;
        }
        
        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
    }
}