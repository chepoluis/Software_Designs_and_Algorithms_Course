// Here you can use the classes
import PriorityQueue from "./algorithms_part_1/PriorityQueue";

const pq = new PriorityQueue();

// const user1 = { name: 'Mike' };
// const user2 = { name: 'Bill' };
// const user3 = { name: 'Jane' };

const user1 = 10;
const user2 = 20;
const user3 = 30;

// for (let index = 10000; index >= 0; index--) {
//   const element = 10000;
  
//   pq.add(element + 1, index);
// }

// console.log(pq);

pq.add(user1, 1);
pq.add(user2, 2);
pq.add(user3, 0);

pq.peek();



function App() {
  return (
    <div className="App">
      <h1>Software_Designs_and_Algorithms_Course</h1>
    </div>
  );
}

export default App;
