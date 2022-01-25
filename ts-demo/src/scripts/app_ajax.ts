
// const delay = () => Math.floor(Math.random() * 1000) + 500;

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

type NewCar = Omit<Car, 'id'>;

// function myFetch<T>(url: string) {

//   return new Promise<T>( resolve => {

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('readystatechange', () => {
    
//       if (xhr.status === 200 && xhr.readyState === 4) {
//         resolve(JSON.parse(xhr.responseText));
//       }
    
//     });
    
//     xhr.open('GET', url);
//     xhr.send();

//   });

// }


// Implement the `myFetch` function as shown below
// use the XHR example to execute the actual AJAX

// myFetch<Car[]>('http://localhost:5050/cars').then(cars => console.log(cars));

// fetch('http://localhost:5050/cars')
//   .then(res => res.json())
//   .then((cars: Car[]) => console.log(cars));

// const appendCar = (car: NewCar): Promise<Car> => {

//   return fetch('http://localhost:5050/cars', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(car),
//   })
//     .then(res => res.json()); 

// }

// appendCar({
//   make: 'Ford',
//   model: 'T',
//   year: 1928,
//   color: 'black',
//   price: 800,
// }).then(car => console.log(car));

const appendCar = async (car: NewCar): Promise<Car> => {

  const res = await fetch('http://localhost:5050/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });

  const savedCar: Car = await res.json();

  return savedCar;

}

const car = await appendCar({
  make: 'Ford',
  model: 'T',
  year: 1928,
  color: 'black',
  price: 800,
});

console.log(car);



export { }