
// const delay = () => Math.floor(Math.random() * 1000) + 500;

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

function myFetch<T>(url: string) {

  return new Promise<T>( resolve => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
    
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText));
      }
    
    });
    
    xhr.open('GET', url);
    xhr.send();

  });

}


// Implement the `myFetch` function as shown below
// use the XHR example to execute the actual AJAX

myFetch<Car[]>('http://localhost:5050/cars').then(cars => console.log(cars));

export { }