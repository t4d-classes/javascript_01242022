
const delay = () => Math.floor(Math.random() * 1000) + 500;

const taskA = () =>
  new Promise<string>(
    resolve => setTimeout(() => resolve("a"), delay())
  )
  .then(result => { console.log(result); return result; });

const taskB = () =>
  new Promise<string>(
    resolve => setTimeout(() => resolve("b"), delay())
  ).then(result => { console.log(result); return result; });
   
const taskC = () => new Promise<string>(
    resolve => setTimeout(() => resolve("c"), delay())
  ).then(result => { console.log(result); return result; });

// Promise.all([taskA(), taskB(), taskC()]).then(results => {
//   console.log(results);
//   console.log('all done');
// });

const doItAll = async () => {

  const results = await Promise.all([taskA(), taskB(), taskC()]);

  console.log(results);
  console.log('all done');

};

doItAll();

      
export { }