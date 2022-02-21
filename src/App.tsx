import { Consumable } from "./OOP_part_1/Consumable";
import { Inventory } from "./OOP_part_1/Inventory";
import { Weapon } from "./OOP_part_1/Weapon";

const c1 = new Consumable('Bread', 2, 4, false);

// console.log(c1.eat());
// console.log(c1.use());
// console.log(c1.use());

const weapon1 = new Weapon(5, 10, 'Raygun', 122, 34);
const weapon2 = new Weapon(3, 15, 'Raygun2', 1, 0.336);
const weapon3 = new Weapon(10, 15,'Sniper', 45, 334);
const hammer = new Weapon(30.4219, 0.2093, 'Hammer', 300, 2.032);

console.log(hammer.toString());
console.log(hammer.use());
console.log(hammer.use());
console.log(hammer.use());
console.log(hammer.use());
console.log(hammer.use());
console.log(hammer.use());
console.log(hammer.use());

console.log(hammer.toString());


// const invetory = Inventory.callInventory();

// console.log( weapon2.compareTo(weapon3));
// console.log(weapon1);
// console.log(weapon2);
// console.log(weapon3);

// Weapon.reset();

// const weapon4 = new Weapon('Sniper', 212, 334);
// console.log(weapon4);


function App() {
  return (
    <div className="App">
      <h1>:D</h1>
    </div>
  );
}

export default App;
