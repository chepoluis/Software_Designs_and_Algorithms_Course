// interface Iitem {
//     priority: number;
//     randomNumber: number
// }

export class PriorityQueue {
    private priorities: Map<number, number>; 

    constructor() {
        this.priorities = new Map();
    }

    public addItem(item: number, priority: number = 0) {
        this.priorities.set(item, priority);
        
    }
}