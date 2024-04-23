// write code here
const array = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];

const result = array
  .filter(person => person.age >= 18)
  .map(person => person.name);

console.log(result);
