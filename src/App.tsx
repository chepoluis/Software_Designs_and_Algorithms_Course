// Here you can use the classes
import { Client } from "./design_patterns/Client";

const client = new Client(23, 'Colima', 'Jalisco', 28750, 13123, 23);
const client2 = new Client(0, 'Jalisco', 'Colima', 23123, 78750, 32);
// const client3 = new Client(89, 'Colima', 'Jalisco', 28750, 23123, 23);
// const client4 = new Client(0, 'Jalisco', 'Colima', 23123, 28750, 32);

console.log(client.ship())
console.log(client2.ship())

// console.log(client3.ship())
// console.log(client4.ship())

function App() {
  return (
    <div className="App">
      <h1>Software_Designs_and_Algorithms_Course</h1>
    </div>
  );
}

export default App;
