import PriorityQueue from "./algorithms_part_1/PriorityQueue";

const pq = new PriorityQueue();

// const user1 = { name: 'Mike' };
// const user2 = { name: 'Bill' };
// const user3 = { name: 'Jane' };

const user1 = { name: 'Mike' };
const user2 = { name: 'Bill' };
const user3 = { name: 'Jane' };
const user4 = { name: 'Luis' };

// for (let index = 0; index < 10000; index++) {
for (let index = 9999; index >= 0; index--) {
// for (let index = 9; index >= 0; index--) {
  pq.add((index + 1), index);
}

console.log(pq.peek());
console.log(pq.getHeapContainer());
// for (let index = 0; index < pq.getHeapContainer().length; index++) { 
//   console.log(pq.getHeapContainer()[index]);
// }

// pq.add(user1, 1);
// console.log(pq.peek());

// pq.add(user2, 7);
// console.log(pq.peek());

// pq.add(user3, 2);
// console.log(pq.peek());

// pq.add(user4, 0);

// console.log(pq);
// console.log(pq.peek());

// pq.add(user1, 1);
// pq.add(user2, 2);
// pq.add(user3, 0);

// pq.peek();



function App() {
  return (
    <div className="App">
      <h1>Software_Designs_and_Algorithms_Course</h1>
    </div>
  );
}

export default App;
