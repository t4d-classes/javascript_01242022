/// type alias
type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
};

// prefer to not use the interface because it implies
// both type as well as class to implement it
// interface Car {
//   id: number;
//   make: string;
//   model: string;
//   year: number;
// };


// Java
class Car2 {
  id: number;
  make: string;
  model: string;
  year: number;

  constructor(id: number, make: string, model: string, year: number) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car: Car = {
  id: 1, make: 'Ford', model: 'T', year: 1928,
};

const car2: Car = JSON.parse(
  '{ "id": 2, "make": "Ford", "model": "T", "year":1929 }');

const car3: Car = new Car2(3, 'Tesla', 'S', 120000); 

console.log(car.make);
console.log(car2.make);
console.log(car3.model);

export { }