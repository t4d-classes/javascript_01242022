# Exercise 2

1. Add the following object to the following array.

```javascript
{
  firstName: 'Bob',
  lastName: 'Smith',
}
```

```javascript
const persons = [
  { id: 1, firstName: 'Jane', lastName: 'Thomas' },
  { id: 2, firstName: 'Sally', lastName: 'Wilkins' }
];
```

2. Using the following rules:

- Generate a new `id` for the object to be added ensuring the `id` is unique. Hint: do not use the array length plus 1. Recommendation: look at the `Math.max` function to find the max id and increment by 1.

- Update the array immutably (do not modify the original array object). Hint: consider the array spread operator to make a copy of the original array.

3. Ensure it works!