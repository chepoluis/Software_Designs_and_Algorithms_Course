import PriorityQueue from "../../algorithms_part_1/PriorityQueue"

describe('Tests in PriorityQueue', () => {
    test('should create a default Priority Queue', () => {
        const pq = new PriorityQueue();

        expect( pq ).toBeDefined();
    });

    test('should insert items to the queue and respect priorities', () => {
        const pq = new PriorityQueue();

        pq.add(10, 1);
        expect(pq.peek()).toBe(10);

        pq.add(5, 2);
        expect(pq.peek()).toBe(10);
    
        pq.add(100, 0);
        expect(pq.peek()).toBe(100);
    })

    it('should be possible to use objects in priority queue', () => {
        const priorityQueue = new PriorityQueue();
    
        const user1 = { name: 'Mike' };
        const user2 = { name: 'Bill' };
        const user3 = { name: 'Jane' };
    
        priorityQueue.add(user1, 1);
        expect(priorityQueue.peek()).toBe(user1);
    
        priorityQueue.add(user2, 2);
        expect(priorityQueue.peek()).toBe(user1);
    
        priorityQueue.add(user3, 0);
        expect(priorityQueue.peek()).toBe(user3);
      });
    
})