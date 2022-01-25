
const delay = () => Math.floor(Math.random() * 1000) + 500;


// type ResolveFn<S> = (result: S) => void;
// type RejectFn<S> = (result: S) => void;
// type AsyncOperationFn<R> = (resolve: ResolveFn<R>, reject: RejectFn<R>) => void; 

// class Promise<T> {

//   _resolveFns: ResolveFn<T>[] = [];
//   _rejectFns: RejectFn<T>[] = [];

//   constructor(asyncOperationFn: AsyncOperationFn<T>) {
//     const resolveFn: ResolveFn<T> = (result) => {
//       this._resolveFns.forEach(fn => fn(result));
//     };
//     const rejectFn: RejectFn<T> = (result) => {
//       this._rejectFns.forEach(fn => fn(result));
//     };

//     asyncOperationFn(resolveFn, rejectFn);
//   }

//   then(fn: ResolveFn<T>) {
//     this._resolveFns.push(fn);
//   }

//   catch(fn: RejectFn<T>) {
//     this._rejectFns.push(fn);
//   }
// }

// class Promise {

//   constructor(asyncOperationFn) {

//     this._resolveFns = [];
//     this._rejectFns = [];

//     const resolveFn = (result) => {
//       this._resolveFns.forEach(fn => fn(result));
//     };
//     const rejectFn = (result) => {
//       this._rejectFns.forEach(fn => fn(result));
//     };

//     asyncOperationFn(resolveFn, rejectFn);
//   }

//   then(fn) {
//     this._resolveFns.push(fn);
//   }

//   catch(fn) {
//     this._rejectFns.push(fn);
//   }
// }


const p = new Promise<string>((resolve, reject) => {

  setTimeout(() => {

    resolve("a");

  }, delay());

});

p.then((result) => {

  console.log(result);

});

console.log('made it here');

export { }