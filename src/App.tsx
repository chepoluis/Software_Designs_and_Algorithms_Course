// Here you can use the classes
import { Book } from "./OOP_part_2/classes/Book";
import { Page } from "./OOP_part_2/classes/Page";
import { Pages } from "./OOP_part_2/classes/Pages";

// const p = new Pages([
//   new Page(1, 'with text', 'simple paper'),
//   new Page(2, 'with text', 'simple paper'),
//   new Page(3, 'with text', 'simple paper'),
//   new Page(4, 'with text', 'simple paper')
// ]);

// console.log(p.totalPages);

// p.totalPages = [new Page(5, 'with text', 'simple paper'), new Page(6, 'with text', 'simple paper')];

// console.log(p.totalPages);

//------------

const book = new Book('Harry Potter', 'J. K. Rowling', new Pages([
  new Page(1, 'with text', 'aaaa'),
  new Page(2, 'with text', 'simple paper'),
  new Page(3, 'with text', 'simple paper'),
  new Page(4, 'with text', 'simple paper')
]));

for (let b of book) {
  console.log(b);
}

function App() {
  return (
    <div className="App">
      <h1>Software_Designs_and_Algorithms_Course</h1>
    </div>
  );
}

export default App;
