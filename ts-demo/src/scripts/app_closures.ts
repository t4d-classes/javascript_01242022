
const outer = () => {

  let t = 2;

  setTimeout(function incrementT() {
    console.log('incrementT');
    t = 4;
  }, 2000);

  const inner = () => {
    console.log(t);
  };

  return inner;

}

const innerFn = outer();

innerFn(); // 2

setTimeout(function secondCallToInnerFn() {
  console.log('secondCallToInnerFn');
  innerFn(); // 4
}, 4000);

//console.dir(innerFn);



export { }