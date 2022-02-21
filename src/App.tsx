import { Consumable } from "./OOP_part_1/Consumable";
import { Inventory } from "./OOP_part_1/Inventory";
import { Weapon } from "./OOP_part_1/Weapon";

const c1 = new Consumable('Bread', 2, 4, false);

// console.log(c1.eat());
// console.log(c1.use());
// console.log(c1.use());

const weapon1 = new Weapon('Raygun', 122, 34);
const weapon2 = new Weapon('Raygun2', 1, 0.336);
const weapon3 = new Weapon('Sniper', 45, 334);

const invetory = Inventory.callInventory();
console.log(invetory.toString());
invetory.sort();
console.log(invetory.toString());

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
