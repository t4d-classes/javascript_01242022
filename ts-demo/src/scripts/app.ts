

// setTimeout(() => {
//   console.log("a");
// }, 0);

// console.log("b");

const delay = () => Math.floor(Math.random() * 1000) + 500;

setTimeout(() => {
    console.log("a");
    setTimeout(() => {
        console.log("b");
        setTimeout(() => {
            console.log("c");
        }, delay());
    }, delay());
}, delay());


function allDone() {
  console.log('all done');
}

setTimeout(() => {
  console.log('a');
}, delay());

setTimeout(() => {
  console.log('b');
}, delay());

setTimeout(() => {
  console.log('c');
}, delay());

// Lab Exercise

// Run the `allDone` function after all three `setTimeout` callback functions have been called.
// Rules:
//  - You cannot use Promises or Async/Await
//  - You cannot hard code any "delay" values
//  - All three calls to setTimeout must occur in the same task


export { }