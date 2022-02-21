// Here you can test the classes

import { Consumable } from "./OOP_part_1/Consumable";
import { Inventory } from "./OOP_part_1/Inventory";
import { Pizza } from "./OOP_part_1/Pizza";
import { Sword } from "./OOP_part_1/Sword";
import { Weapon } from "./OOP_part_1/Weapon";

const bread = new Consumable('Bread', 2, 4, false);
const weapon1 = new Weapon(5, 10, 'Raygun', 122, 34);
const weapon2 = new Weapon(3, 15, 'Raygun2', 1, 0.336);
const weapon3 = new Weapon(10, 15,'Sniper', 45, 334);
const hammer = new Weapon(30.4219, 0.2093, 'Hammer', 300, 2.032);

const pizza = new Pizza(3, 0, false);
pizza.eat();
pizza.eat();
pizza.eat();

const inventory = Inventory.callInventory();
console.log(inventory.toString());

function App() {
  return (
    <div className="App">
      <h1>Software_Designs_and_Algorithms_Course</h1>
    </div>
  );
}

export default App;
