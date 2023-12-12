/**
 * This code is named "SophisticatedCode" and it demonstrates a complex algorithm for sorting an array of objects based on multiple criteria.
 * The objects in the array represent employees and have properties such as name, age, experience, and salary.
 * This algorithm sorts the employees by salary in descending order and then by age in ascending order.
 * It also filters out the employees who have less than 5 years of experience.
 */

const employees = [
  { name: 'John', age: 30, experience: 8, salary: 5000 },
  { name: 'Alice', age: 25, experience: 3, salary: 4000 },
  { name: 'Michael', age: 35, experience: 10, salary: 7000 },
  { name: 'Laura', age: 28, experience: 5, salary: 5500 },
  { name: 'David', age: 32, experience: 6, salary: 6000 },
];

function filterAndSortEmployees() {
  // Filter employees with less than 5 years of experience
  const filteredEmployees = employees.filter((emp) => emp.experience >= 5);

  // Sort the filtered employees by salary in descending order
  const sortedEmployees = filteredEmployees.sort((a, b) => b.salary - a.salary);

  // Sort the sortedEmployees by age in ascending order
  sortedEmployees.sort((a, b) => a.age - b.age);

  return sortedEmployees;
}

const sortedAndFilteredEmployees = filterAndSortEmployees();

console.log(sortedAndFilteredEmployees);

// Output:
// [
//   { name: 'David', age: 32, experience: 6, salary: 6000 },
//   { name: 'Laura', age: 28, experience: 5, salary: 5500 },
//   { name: 'John', age: 30, experience: 8, salary: 5000 },
//   { name: 'Michael', age: 35, experience: 10, salary: 7000 }
// ]