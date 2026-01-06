// ------------------------------
// ES6+ Array Methods Practice
// Using map(), filter(), reduce()
// ------------------------------

// Sample user data
const users = [
  { name: "Alice", age: 22, isActive: true },
  { name: "Bob", age: 17, isActive: false },
  { name: "Charlie", age: 30, isActive: true }
];

// 1. map() — return array of user names
//MAP - map is an array method that transforms every element of an array into new element and returns the newly transformed array.
const userNames = users.map(user => user.name);
console.log("User Names:", userNames);

// 2. filter() — get only active users
//FILTER - filter works similar to that of map except that the returned array consists of only those elements that satisfies condition.
const activeUsers = users.filter(user => user.isActive);
console.log("Active Users:", activeUsers);

// 3. reduce() — calculate total age
//REDUCE - reduce processes each element in the array and reduces it to a single value.
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total Age:", totalAge);
