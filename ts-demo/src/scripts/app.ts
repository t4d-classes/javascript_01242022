
// const delay = () => Math.floor(Math.random() * 1000) + 500;

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:5050/cars');
xhr.send();

// Implement the `myFetch` function as shown below
// use the XHR example to execute the actual AJAX

myFetch('http://localhost:5050/cars').then(cars => console.log(cars));

export { }