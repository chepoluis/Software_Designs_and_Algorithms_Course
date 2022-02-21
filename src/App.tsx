import { Weapon } from "./OOP_part_1/Weapon";

const weapon1 = new Weapon('Raygun', 12, 34);
const weapon2 = new Weapon('Raygun2', 212, 0.336);
const weapon3 = new Weapon('Sniper', 212, 334);

weapon2.compareTo(weapon3);
// console.log(weapon1);
// console.log(weapon2);
// console.log(weapon3);

// Weapon.reset();

const weapon4 = new Weapon('Sniper', 212, 334);
// console.log(weapon4);


function App() {
  return (
    <div className="App">
      <h1>:D</h1>
    </div>
  );
}

export default App;
